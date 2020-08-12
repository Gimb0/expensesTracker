import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, InputGroupAddon, InputGroupText, InputGroup, Col, Row } from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
    	super(props);
		this.state = {
			activeItem: this.props.activeItem,
			categories: this.props.categories
		};
	}
	
    handleChange = e => {

		console.log("e.target:")
		console.log(e.target)
		let { name, value } = e.target;
		if(e.target.list) {
			value = this.findCategoryID(value)
		}
		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });

		console.log("activeItem:")
		console.log(this.state.activeItem)
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

	render() {
		const { toggle, onSave } = this.props;
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
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="success" onClick={() => onSave(this.state.activeItem)}>
					Save
				</Button>
			</ModalFooter>
			</Modal>
		);
    }
}