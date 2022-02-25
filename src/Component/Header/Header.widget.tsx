import React from "react";
import {useLocation} from "react-router";
import {FakeLinks} from "../../Data";


export const Header:React.FC = () => {
    const location = useLocation();
    const onNavigation = (event) => {
        event.preventDefault();
        console.log(location)
    };
    if (location.pathname === "/") {
        return null;
    }
    return (
        <header>
            <nav>
                {FakeLinks.map((link, key) => {
                    return (
                        <a href="" onClick={onNavigation} key={key}>{link.label}</a>
                    )
                })}
            </nav>
        </header>
    )
}