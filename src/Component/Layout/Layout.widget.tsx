import React from "react";
import {useLocation} from "react-router";


import {Header} from "../Header";
import {Footer} from "../Footer";
import {Sidebar} from "../Sidebar";

import {PageLinks} from "../../Data";
import { Link } from "react-router-dom";

export const Layout:React.FC = ({children}) => {
    const location = useLocation();
    const {previous, next} = PageLinks[location.pathname] || {};
    return (
        <section>
            <Header />
            <Sidebar />
            {previous && <div>
                <Link to={previous}>Previous</Link>
            </div>}
            <section>
                {children}
            </section>
            {next&& <div>
                <Link to={next}>Next</Link>
            </div>}
            <Footer />
        </section>
    )
}