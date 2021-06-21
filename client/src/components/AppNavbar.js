<<<<<<< HEAD
=======

>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
<<<<<<< HEAD
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
=======
                    <NavbarBrand href="/">GIU Dashboard</NavbarBrand>
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/dimashaheen">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}


<<<<<<< HEAD

=======
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
export default AppNavbar;