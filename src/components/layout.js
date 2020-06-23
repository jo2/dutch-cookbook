import React from "react";
import Header from "./header";
import "./layout.css";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            <Header/>
            <Container>
                <main>{children}</main>
            </Container>
            <footer>
                <Container>
                    © {new Date().getFullYear()}
                </Container>
            </footer>
        </>
    );
}

export default Layout;
