import React from "react";
import { Container } from 'reactstrap'

import './Header.css';


const Header = () => {

    return ( 
    <header className="header">
        <Container>
            <div className="titre page">
                <h1>Test Technique JamSpace</h1>
            </div>
        </Container>
    </header>
    )
}

export default Header;