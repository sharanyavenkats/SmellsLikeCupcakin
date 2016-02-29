'use strict';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Smells Like Cupcakin'</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavItem eventKey={2} href="#">Daily Flavors</NavItem>
                        <NavItem eventKey={3} href="#">Orders</NavItem>
                        <NavItem eventKey={4} href="#">Location</NavItem>
                        <NavItem eventKey={5} href="#">Contact Us</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};
