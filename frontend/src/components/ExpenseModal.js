import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, InputGroupAddon, InputGroupText, InputGroup, Col, Row } from "reactstrap";

export default class ExpenseModal extends Component {
    constructor(props) {
    	super(props);
		this.state = {
			error: false,
			activeItem: this.props.activeItem,
			categories: this.props.categories
		};
	}
	
    handleChange = e => {
		let { name, value } = e.target;
		if(e.target.list) {
			if(this.checkCategoryExists(value)) {
				value = this.findCategoryID(value);
				console.log("category exists")
			}
		}
		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });
	};

	findCategoryID = category => {
		for(var cat of this.state.categories)
			if(cat.category === category)
				return cat.id;
	}

	findCategory = id => {
		for(var cat of this.state.categories)
			if(cat.id === id)
				return cat.category;
	}

	checkCategoryExists = category => {
		for(var cat of this.state.categories) {
			if(category === cat.category)
				return true;
		}

		return false;
	}

	verifyExpense = () => {
		if(this.checkCategoryExists(this.findCategory(this.state.activeItem.category)))
			this.props.onSave(this.state.activeItem)
		else {
			this.setState({
				error: true
			})
		}
	}

	render() {
		const { toggle } = this.props;
		var displayError = null;
		if(this.state.error) {
			displayError = (
				<p style={{color: 'red'}}>
					Category does not exist!
					Please create the category first.	
				</p>
			)
		}

		return (
			<Modal isOpen={true} toggle={toggle}>
			<ModalHeader toggle={toggle}> Expense </ModalHeader>
			<ModalBody>
				<Form>
				<FormGroup>
					<Label for="expense">Expense</Label>
					<Input
						type="text"
						name="expense"
						value={this.state.activeItem.expense}
						onChange={this.handleChange}
						placeholder="Enter Expense"
					/>
				</FormGroup>
				<FormGroup>
					<Row>
						<Col>
							<Label for="amount">Amount</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText>$</InputGroupText>
								</InputGroupAddon>
								<Input
									type="number"
									name="amount"
									value={this.state.activeItem.amount}
									onChange={this.handleChange}
									placeholder="Enter expense amount"
								/>
							</InputGroup>
						</Col>
						<Col>
							<Label for="date">Date</Label>
							<Input
								type="date"
								name="date"
								value={this.state.activeItem.date}
								onChange={this.handleChange}
							/>
						</Col>
					</Row>
				</FormGroup>
				<FormGroup>
					<Label for="category">
						Category
					</Label>
					<Input
						name="category"
						value={this.findCategory(this.state.activeItem.category)}
						onChange={this.handleChange}
						placeholder="Enter category"
						list="category"
					/>
					<datalist id="category">
						{this.state.categories.map((item, key) =>
							<option key={key} value={item.category} />
						)}
					</datalist>
				</FormGroup>
				{ displayError }
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="success" onClick={this.verifyExpense}>
					Save
				</Button>
			</ModalFooter>
			</Modal>
		);
    }
}