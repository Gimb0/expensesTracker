import React, { Component } from 'react'
import axios from 'axios'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import FormFeedback from 'reactstrap/lib/FormFeedback'

export default class Login extends Component{
    constructor(props) {
        this.state = (
            error: false
        )
    }

    obtainAuthToken = (username, password) => {
        axios.post('/token/obtain/', (username, password))
        .then(res => {
            if(res.status === 200) {
                // Move to expenses page
                localStorage.setItem('JWT-Access', res.body.access)
                localStorage.setItem('JWT-Refresh', res.body.refresh)
            } else if(res.status === 401) {
                // Display error message
            }
        })
    }

    refreshAccessToken = (username, password) => {
        axios.post('/token/refresh/', localStorage.getItem('JWT-Refresh'))
        .then(res => {
            if()
        })
    }

    render() {
        var displayError = null;
        if(this.state.error === true) {
            displayError = (
                <FormGroup>
                        <FormFeedback>Username or Password is incorrect!</FormFeedback>
                    </FormGroup>
            )
        }

        return (
            <Form >
                <FormGroup>
                    <Label for='username'>Username</Label>
                    <Input id='username' type='text' name='username' required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input id='password' type='password' name='password'></Input>
                </FormGroup>
                displayError
                <FormGroup>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}