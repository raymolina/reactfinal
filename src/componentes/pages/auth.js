import React, { Component } from 'react';
import Login from "../auth/login";
import loginImg from "../../img-src/login.jpg";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth(){
        this.props.handleUsuccessfulLogin();

    }
    render() {
        return (
            <div className='auth-page-wrapper'>
                <div className='left-column' 
                style={{
                    backgroundImage: `url(${loginImg})`
                }}
                />

                <div className='right-column'>
                    <Login 
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>                
            </div>
        );
    }
}

export default Auth;