import React, { Component } from 'react'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import Auth from '../components/Auth'

export default class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            password: "",
            authError: false
        }
    }

    handleFieldChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let auth = new Auth()
        let result = await auth.obtainAuthToken(this.state.username, this.state.password)
        if(result === false) {
            console.log("Login failed")
            this.setState({
                authError: true
            })
        } else if(result === true) {
            window.location.href = "/"
        } else {
            console.log("error")
        }
    }

    render() {
        let displayAuthError = null
        if(this.state.authError) {
            displayAuthError = (
                <p className="text-danger">Username or Password incorrect!</p>
            )
        }
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Login</h1>
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                    <div className="card p-3">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input id='username' type='text' name='username' value={this.state.username} onChange={this.handleFieldChange} required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input id='password' type='password' name='password' value={this.state.password} onChange={this.handleFieldChange} required></Input>
                            </FormGroup>
                            { displayAuthError }
                            <FormGroup>
                                <Button type="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }
}