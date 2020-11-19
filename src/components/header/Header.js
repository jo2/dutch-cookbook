import React from 'react';
import {Container} from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
    <header>
        <img className="header__image" src="https://via.placeholder.com/2000x500/" alt="header image"/>
        <Container>
            <div className="header__heading">
                <h1>Dutch Kochbuch</h1>
                <h2 className="header__subtitle">Rezepte und Gewürzmischungen für den Dutch Oven</h2>
            </div>
        </Container>
    </header>);
};

export default Header;
