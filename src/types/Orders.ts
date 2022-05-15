export type OrderItem = {
  id: string;
  address: string;
  weight: string;
  date: string;
};

export type OrderItemProps = {
  key: string;
  order: OrderItem;
}

export type ManagingOrderContextType = {
  allOrders: OrderItem[];
  currentOrder: OrderItem | undefined;
  makeNewOrder: (order: OrderItem) => void;
  deleteOrder: (orderID: string) => void;
  editOrder: (orderID: string) => void;
  clearOrder: () => void;
};