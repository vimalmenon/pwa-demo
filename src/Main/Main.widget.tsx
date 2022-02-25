import React from "react";
import { Routes, Route } from "react-router-dom";

import {Home, NoCss, Table} from "../Page";
import {Layout} from "../Component";


export const Main:React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} />
                <Route 
                    path="no-css" 
                    element={<NoCss />} />
                <Route 
                    path="table" 
                    element={<Table />} />
                <Route
                    path="*"
                    element={<Home />}
                    />
            </Routes>
        </Layout>
    );
};