import React, { Component } from 'react'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import Auth from '../components/Auth'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authError: false
        }
    }

    handleSubmit = (username, password) => {
        let auth = new Auth()
        if(!auth.obtainAuthToken(username, password)) {
            this.setState({
                authError: true
            })
        } else {
            // Once logged in go to main site.
        }
    }

    render() {
        let displayAuthError = null
        if(this.state.authError.authError) {
            displayAuthError = (
                <p className="text-danger">Username or Password incorrect!</p>
            )
        }
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Login</h1>
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                    <div className="card p-3">
                        <Form >
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input id='username' type='text' name='username' required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input id='password' type='password' name='password'></Input>
                            </FormGroup>
                            { displayAuthError }
                            <FormGroup>
                                <Button color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }
}