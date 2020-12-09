import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Finance Manager</h1>
                <p className="text-white text-center my-2">Welcome to your personal finance toolkit</p>
            </main>
        )
    }
}