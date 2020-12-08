import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Login from './pages/Login'

export default function App() {
return (
	<Router>
	<div>
		<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/">FinanceManager</NavbarBrand>
			<Nav className="container-fluid">
				<NavItem>
					<NavLink href="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/expenses">Expenses</NavLink>
				</NavItem>
				<NavItem className="ml-auto">
					<NavLink href="/login">Login</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
		
		<Switch>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/expenses">
				<Expenses />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</div>
	</Router>
);
}