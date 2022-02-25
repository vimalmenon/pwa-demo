import React from "react";
import {useLocation} from "react-router"


export const Footer:React.FC = () => {
    const location = useLocation();
    if (location.pathname === "/") {
        return null;
    }
    return (
        <footer>
            This is footer
        </footer>
    )
}