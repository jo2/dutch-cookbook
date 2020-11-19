import React from 'react';
import {Container} from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer__content">
                    © {new Date().getFullYear()}
                </div>
            </Container>
        </footer>);
};

export default Footer;
