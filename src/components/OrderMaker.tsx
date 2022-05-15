import React from "react";
import Select from 'react-select';
import {ChangeEvent} from "react"
import usePackageAddress from "../hooks/DataProvider";
import { Header } from "./Header";
import { useEffect} from "react";
import { OrderItem, ManagingOrderContextType } from "../types/Orders";
import { OrderManagerContext } from "./OrderManager";
import "../styles/ordermaker.scss";
import { selectStyle } from "../styles/select";

/*
Takes care of handling the user inputed data, then if it was successful updates the OrderManagerContext's state 
accordingly
*/
export const OrderMaker: React.FC = () => {
    const {currentOrder, makeNewOrder, clearOrder} = React.useContext<ManagingOrderContextType>(OrderManagerContext);
    const {addresses, error} = usePackageAddress();
    const [IDCounter, setIDCounter] = React.useState<number>(1);
    const [weight, setWeight] = React.useState<string>("");
    const [orderPoint, setOrderPoint] = React.useState<string>("");
    const [wrongWeight, setWrongWeight] = React.useState<boolean>(currentOrder ? false : true); 
    const [orderPointSelected, setOrderPointSelected] = React.useState<boolean>(currentOrder ? true : false); 

    //calculating time in given format 
    function calcDateAndTime(): string{
        const today = new Date();
        return today.getFullYear() + '. ' + (today.getMonth() + 1) + '. ' + today.getDate()  + '. - ' + today.getHours() + ':' + today.getMinutes();
    }

    function incrementID(): string {
        setIDCounter(IDCounter + 1);
        return IDCounter.toString();
    }

    //updates weight with every keyhit
    function handleWeightChange(event: ChangeEvent<HTMLInputElement>): void {
        setWeight(event.target.value || "");
    }
    
    //tests if there are any letters in the given string and if not is it larger than 0
    const checkWeightInput = () => {
        setWrongWeight( !/^\d+$/.test(weight) || +weight<0)
    }

    //if editable order was selected place its data there
    useEffect(() => {
        setWeight(currentOrder?.weight || "");
        setOrderPoint(currentOrder?.address || "");
    },[currentOrder]); 

    // it exist then gets the weight and current idcounter from localStorage
    useEffect(() => {
        if(localStorage.getItem('allOrders')) setIDCounter(JSON.parse(localStorage.getItem('allOrders') || '').length + 1);
        if(localStorage.getItem('orderWeight')){
            setWeight(JSON.parse(localStorage.getItem('orderWeight')|| ''));
            setWrongWeight(false);
        }
        // if we wanted to save the selected address as well
        /*
        if(localStorage.getItem('orderAddress')){
            setOrderPoint(JSON.parse(localStorage.getItem('orderAddress')|| ''));
            setOrderPointSelected(true);
        }
        */
    },[]);
    

    useEffect(() => {
        checkWeightInput();
        localStorage.setItem('orderWeight', JSON.stringify(weight));
        
    },[weight]);

    // if we wanted to save the selected address as well
    /*
    useEffect(() => {
        localStorage.setItem('orderAddress', JSON.stringify(orderPoint));
    },[orderPoint]);
    */  

    //handles the making of a new order, but only if every condition is met
    const handleSave = (): void =>{
        
        if(!wrongWeight && orderPointSelected){
            
            const newOrder: OrderItem = {
                id: currentOrder?.id || incrementID(),
                address: orderPoint || "",
                weight: weight,
                date: calcDateAndTime()
            }
            // resets all data so new orders can be made
            makeNewOrder(newOrder);
            setWeight("");
            clearOrder();
            setOrderPointSelected(false);
        }
    }

    if(error) {
        return (
            <div className="error">
                <p>{`${error} happened :(`}</p>
            </div>
        );
    }else{
        return (
            <React.Fragment>
                <Header headline = "Megrendelő űrlap"/>
                <div className="order-maker-container">
                    <div>
                        <p className="field-text">Küldemény súlya</p>
                        <div className="field-input-placeholder">
                            <input type="text" value={weight} onChange={handleWeightChange} />
                            <p className="field-placeholder">gramm</p>
                        </div>
                    </div>
                    <div>
                        <p className="field-text">Csomagpont</p>
                        <Select
                            value={addresses.filter(address => address.label === orderPoint)}
                            options={addresses}
                            styles={selectStyle}
                            defaultValue={undefined}
                            onChange={(opt) => {
                                setOrderPoint(opt?.label || orderPoint);
                                setOrderPointSelected(true);
                            }}
                        />
                    </div>
                    
                    <button 
                        className={(!wrongWeight && orderPointSelected)? "field-button active": "field-button disabled"}
                        disabled={!(!wrongWeight && orderPointSelected)} 
                        onClick={handleSave} >
                        Mentés</button>
                </div>
            </React.Fragment>
        );
    }
};