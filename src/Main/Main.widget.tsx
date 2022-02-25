import React from "react";
import { Routes, Route , Link} from "react-router-dom";

import {Home, NoCss} from "../Page";
import {Layout} from "../Component";


export const Main:React.FC = () => {
    return (
        <Layout>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/no-css">No Css</Link>
                <Link to="/no-csss">No Link</Link>
            </nav>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} />
                <Route 
                    path="no-css" 
                    element={<NoCss />} />
                <Route
                    path="*"
                    element={<Home />}
                    />
            </Routes>
        </Layout>
    );
};