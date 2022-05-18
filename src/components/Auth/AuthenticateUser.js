import React, { useState } from 'react'
import axios from 'axios';
import LoginForm from './LoginForm';
import HomePage from '../HomePage';
import InvalidLogin from '../InvalidLogin';

function AuthenticateUser(user) {



    return (


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
                    // sessionStorage.setItem('UserObject', user);
                    // sessionStorage.setItem('UserEmail', user.email);

                    //if there were any previous errors it gets cleared and logged in status is changed to true
                    this.setState({ error: '' })
                    // this.setState({ loggedIn: true })
                    // this.refreshPage();
                }
            })
    )
}

export default AuthenticateUser
