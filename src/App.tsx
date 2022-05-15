import React from "react";
import {Page} from "./components/Page";
import {OrderMaker} from "./components/OrderMaker";
import {OrderLister} from "./components/OrderLister";
import {OrderManager} from "./components/OrderManager";
import  "../src/styles/app.scss";

/*building up application from smaller components
context: OrderManager
componenst: Page, OrderMaker, OrderLister
*/
export const App: React.FC = () => {
  return (
    <div className={"app"}>
      <OrderManager>
      <Page>
        <OrderMaker/>
        <OrderLister/>
      </Page>
    </OrderManager>
    </div>
  );
}


