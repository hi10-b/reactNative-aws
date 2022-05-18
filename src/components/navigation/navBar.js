import React from "react";
import {
	Nav,
	Navbar,
	Form,
	Button,
	NavDropdown,
	FormControl,
} from "react-bootstrap";

function NavigationBar() {
	return (
		<Navbar bg="light" expand="lg">
			{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/sales">Sales</Nav.Link>
					<Nav.Link href="/purchase">Purchase</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
