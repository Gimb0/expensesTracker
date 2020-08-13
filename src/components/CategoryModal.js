import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from "reactstrap";

export default class ExpenseModal extends Component {
    constructor(props) {
    	super(props);
		this.state = {
			newCategory: this.props.newCategory,
			categories: this.props.categories
		};
	}
	
    handleChange = e => {
		let { name, value } = e.target;
		const newCategory = { ...this.state.newCategoryItem, [name]: value };
		this.setState({ newCategory });
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

	render() {
		const { toggle, onSave } = this.props;
		return (
			<Modal isOpen={true} toggle={toggle}>
			<ModalHeader toggle={toggle}> New Category </ModalHeader>
			<ModalBody>
				<Form>
				<FormGroup>
					<Label for="category">Category</Label>
					<Input
						type="text"
						name="category"
						value={this.state.newCategory.category}
						onChange={this.handleChange}
						placeholder="Enter New Category"
					/>
				</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="success" onClick={() => onSave(this.state.newCategory)}>
					Save
				</Button>
			</ModalFooter>
			</Modal>
		);
    }
}