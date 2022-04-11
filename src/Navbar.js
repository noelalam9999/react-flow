import React from 'react';
import './Navbar.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BsList,BsFillBellFill } from "react-icons/bs";
import userImg from './profile.jpg';
export default function Mainnavbar() {
    return (
        <div>
            <Navbar >
            <Container >
                <BsList className='sidebarIcon' viewBox='0 0 20 13'></BsList>
                <Navbar.Brand href="#home">Gazelle</Navbar.Brand>
              
                <Nav >
              
                <Nav.Link href="#pricing"><BsFillBellFill className='bell-icon'></BsFillBellFill></Nav.Link>
                <img src={userImg} className='userImg'></img>
                </Nav>
               
            </Container>
            </Navbar>
        </div>
    )
}
