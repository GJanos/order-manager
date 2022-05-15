import React from "react";
import "../styles/header.scss";

interface HeaderProps {
    headline:string;
}

// prints out a header not too complicated
export const Header: React.FC<HeaderProps> = ({headline}) => {
    return (
        <p className="header">{headline}</p>  
    );
};