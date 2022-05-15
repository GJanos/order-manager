import React, {ReactNode, useEffect } from 'react';
import {OrderItem, ManagingOrderContextType} from '../types/Orders';

//base implementation of OrderManagerContext
export const OrderManagerContext = React.createContext<ManagingOrderContextType>({
    allOrders: [],
    currentOrder: undefined,
    makeNewOrder: () => {},
    deleteOrder: () => {},
    editOrder: () => {},
    clearOrder: () => {}
});

type OrderManagerProps = {
    children: ReactNode;
};

/*
Context which can be seen by all its children components
It contains the main logic of the page, stores all the necessary info in one place and makes it available for everyone
Takes care of maintaining all and the currently selected order
*/
export const OrderManager: React.FC<OrderManagerProps> = ({ children }) => {
    const [allOrders, setAllOrders] = React.useState<OrderItem[]>([]);
    // this state represents the order which is being edited
    const [currentOrder, setCurrentOrder] = React.useState<OrderItem>();

    // if data exists useEffect gets it from localStorage
    useEffect(() => {
        if(localStorage.getItem('allOrders'))  setAllOrders(JSON.parse(localStorage.getItem('allOrders') || '')); 
        if(localStorage.getItem('currentOrder'))  setCurrentOrder(JSON.parse(localStorage.getItem('currentOrder') || ''));
    }, []);
    
    

    useEffect(() => {
        localStorage.setItem('allOrders', JSON.stringify(allOrders));
    }, [allOrders]);

    useEffect(() => {
        if(currentOrder) localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
    }, [currentOrder]);

    // making new order, have to be careful not to directly edit the state, just copy it
    const makeNewOrder = (order: OrderItem): void => {
        // if new order is made then just places it at the end of the list
        // if an existing order was modified then removes it and places the new one in the back
        setAllOrders([
            ...allOrders.filter((piece: OrderItem ) => piece.id !== order.id),
            order
        ])
    } 

    // filtering all appropriate orders
    const deleteOrder = (orderID: string): void => {
        setAllOrders(
            allOrders.filter((order: OrderItem) => order.id !== orderID)
        );
    }

    // find the order to edit
    const editOrder = (orderID: string): void => {
        let editableOrder = allOrders.find((order: OrderItem) => order.id === orderID);
        setCurrentOrder(editableOrder);
    }

    // clears and removes currentOrder
    const clearOrder = (): void => {
        setCurrentOrder(undefined);
        localStorage.removeItem('currentOrder');
    }


    return(
        <OrderManagerContext.Provider value={{ allOrders, currentOrder ,makeNewOrder, deleteOrder, editOrder, clearOrder}}>
            {children}
        </OrderManagerContext.Provider>
    );
}