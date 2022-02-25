import React from "react";
import CssBaseline from '@mui/material/CssBaseline';

import {Header} from "../Header";
import {Footer} from "../Footer";
import {Sidebar} from "../Sidebar";
import {Navigate} from "../Navigate";

export const Layout:React.FC = ({children}) => {
    return (
        <Navigate>
            <CssBaseline />
            <section>
                <Header />
                <Sidebar />
                <section>
                    {children}
                </section>
                <Footer />
            </section>
        </Navigate>
    )
}