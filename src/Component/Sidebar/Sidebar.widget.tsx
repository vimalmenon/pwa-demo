import React from "react";
import {useLocation} from "react-router"


export const Sidebar:React.FC = () => {
    const location = useLocation();
    if (location.pathname === "/") {
        return null;
    }
    return (
        <aside>
            This is sidebar
        </aside>
    )
}