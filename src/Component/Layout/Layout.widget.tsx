import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import {useLocation} from "react-router";


import {Header} from "../Header";
import {Footer} from "../Footer";
import {Sidebar} from "../Sidebar";
import {Navigate} from "../Navigate";

import {PageLinks} from "../../Data";


export const Layout:React.FC = ({children}) => {
    const location = useLocation();
    const {title} = PageLinks[location.pathname] || {};
    return (
        <Navigate>
            <CssBaseline />
            <section>
                <Header />
                <Sidebar />
                <section>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                    
                </section>
                <Footer />
            </section>
        </Navigate>
    )
}