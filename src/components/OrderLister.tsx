import React from "react";
import { Header } from "./Header";
import { OrderPackage } from "./OrderPackage";
import { ManagingOrderContextType } from "../types/Orders";
import { OrderManagerContext } from "./OrderManager";
import "../styles/orderlister.scss";


// takes care of updating the list of available orders
export const OrderLister: React.FC = () => {
    //we extract allOrders from the OrderManagerContext so we can map over it
    const {allOrders} = React.useContext(OrderManagerContext) as ManagingOrderContextType;
    return (
            <div className="order-lister-conatiner">
            <Header headline = "Megrendelések"/>
                <div>
                    {allOrders.map((order) =>(
                        <OrderPackage key={order.id} order={order}/>
                    ))}
                </div>
            </div>
    );
};