import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';



const Toolbar = () => {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand tag={RouterNavLink} to="/">Shop</NavbarBrand>



			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/" exact>Products</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
};



export default Toolbar;