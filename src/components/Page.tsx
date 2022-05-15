import React from "react";
import  "../styles/page.scss";

type PageProps = {
  children: any;
};

// its role is to place the whole page as well as render the children components
export const Page: React.FC<PageProps> = ({children}) => {
  return (
    <div className={"page-placer"}>
      <div className={"page-container"}>
        {children}
      </div>
    </div>
    
  );
};
