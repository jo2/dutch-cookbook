import React from "react";

import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import {Container} from "react-bootstrap";
import '../styles/index.scss'

const IndexPage = () => {
    return (<Layout>
        <Header/>
        <Container>
            <div className="index__content">
                <h3>Vorwort</h3>
                <p>Nachdem ich mehrmals Gewürzmischungen frei Schnauze angefertigt habe, die ganz lecker waren, ärgerte mich
                    anschließend immer, diese nicht aufgeschrieben zu haben. Da mir nun endlich der eigene Ruhm zu Kopfe
                    gestiegen ist oder vielleicht auch nur die Dämpfe des Dutches, war es an der Zeit, diese frohlockenden
                    Rezepte für die Ewigkeit fest zu halten. Als Mann des Volkes, muss der erlangte Ruhm geteilt werden.
                    Dieses Werk steht natürlich nicht für sich und so ist es ratsam, um das Dutchen zu meistern, sich bei
                    mehreren Quellen inspirieren zu lassen, um am besten auf eigen Rezepte zu kommen.
                </p>
            </div>
        </Container>
    </Layout>);
};

export default IndexPage;
