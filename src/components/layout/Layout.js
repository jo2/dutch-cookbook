import React from "react";
import Navigation from "../navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;
