import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Login from './pages/Login'
import Logout from './components/Logout'
import Auth from './components/Auth'


const guestNavbar = (
	<Navbar color="dark" dark expand="md">
		<NavbarBrand href="/">FinanceManager</NavbarBrand>
		<Nav className="container-fluid">
			<NavItem>
				<NavLink href="/">Home</NavLink>
			</NavItem>
			<NavItem className="ml-auto">
				<NavLink href="/login">Login</NavLink>
			</NavItem>
		</Nav>
	</Navbar>
)

const memberNavbar = (
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
				<NavLink href="/logout">Logout</NavLink>
			</NavItem>
		</Nav>
	</Navbar>
)

export default class App extends Component {
	constructor(props) {
		super()

		this.state = {
			navbar: guestNavbar
		}
	}

	componentDidMount() {
		let auth = new Auth()

		if(auth.isLoggedIn()) {
			this.setState({
				navbar: memberNavbar
			})
		} else {
			this.setState({
				navbar: guestNavbar
			})
		}
	}

	render() {
		return (
			<Router>
				<div>
					{ this.state.navbar }
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/logout">
							<Logout />
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
		)
	}
}