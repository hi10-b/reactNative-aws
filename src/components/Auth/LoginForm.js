import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import HomePage from '../HomePage';
// import AuthenticateUser from './AuthenticateUser';


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.userNameHandler = this.userNameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);

    }

    userNameHandler(e) {
        this.setState({ userName: e.target.value, })
    }

    passwordHandler(e) {
        this.setState({ password: e.target.value, })
    }

    handleSubmit(e) {
        // return <AuthenticateUser user={user} />

        e.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.password
        }

        axios.post('http://localhost:5000/users/login', user)
            .then(res => {
                const response = res["data"];
                const success = response["success"];
                const user = response["user"];
                if (!success != undefined && !success) {
                    console.log(response);
                    // checks the json response from backend and if it was not sucessful return the following error
                    this.setState({ error: 'Invalid user or pass' })
                } else {
                    console.log(response);
                    console.log(user);

                    //sets all the relevant user details into the session
                    // sessionStorage.setItem('UserID', user._id);
                    sessionStorage.setItem('user', JSON.stringify(user));
                    // sessionStorage.setItem('UserEmail', user.email);

                    //if there were any previous errors it gets cleared and logged in status is changed to true
                    this.setState({ error: '' })
                    // this.setState({ loggedIn: true })
                    // this.refreshPage();
                }
            })



    }

    render() {
        if (sessionStorage.getItem('user') != null) {
            return (<HomePage />)
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={this.userNameHandler} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.passwordHandler} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default LoginForm

