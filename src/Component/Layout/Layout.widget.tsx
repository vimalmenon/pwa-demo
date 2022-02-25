import React from "react";

import {Header} from "../Header";
import {Footer} from "../Footer";
import {Sidebar} from "../Sidebar";

export const Layout:React.FC = ({children}) => {
    return (
        <section>
            <Header />
            <Sidebar />
            <section>
                {children}
            </section>
            <Footer />
        </section>
    )
}