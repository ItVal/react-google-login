import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const clientId = 'your google ClientId here ';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success', res);
        navigate("/redirect");
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };


    return (
        <div>
            <h2>React Google Login</h2>
           
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
           
        </div>
    );
}

export default Login;