import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { ManagingOrderContextType, OrderItemProps } from "../types/Orders";
import { OrderManagerContext } from "./OrderManager";
import "../styles/orderitem.scss";


/*
Represents an order item which was given by the user or was fetched from the brwosers localStorage 
*/
export const OrderPackage: React.FC<OrderItemProps> = ({key, order}) => {
    //here we extract the 2 functions from the OrderManagerContext so we can attach it to the icons event listener
    const {deleteOrder, editOrder} = React.useContext<ManagingOrderContextType>(OrderManagerContext);

    return (
        <React.Fragment>
            <div className="order-item-container">
                <div className="order-info-container">
                    
                    <div className="order-item-header">Dátum</div>
                    <div className="order-item-header">Postapont neve</div>
                    <div className="order-item-header">Küldemény súlya</div>
                    <div>{order.date}</div>
                    <div>{order.address}</div>
                    <div>{order.weight}  gramm</div>
                </div>
                <div className="order-button-container">
                    <FiTrash2 className="order-button" onClick={() => deleteOrder(order.id)}/>
                    <FiEdit2 className="order-button" onClick={() => editOrder(order.id)}/>
                </div>
            </div>
        </React.Fragment>
    );
};