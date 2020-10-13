import React, { useState } from 'react'
import { IonToast, IonLoading, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';

import Layout from '../components/layout'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../redux/actions/user.action'

import Auth from '../helpers/auth'
import { Redirect } from 'react-router-dom';


const Login = () => {
    const [selected, setSelected] = useState("1")
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.user.loading);
    const userData = useSelector((state: any) => state.user.userData);
    const error = useSelector((state: any) => state.user.error);
    const succes = useSelector((state: any) => state.user.succes);
    const currentSegment = (e: any) => {
        setSelected(e.detail.value)
    }

    function signup(user: any) {
        dispatch(userAction.signup(user))

    }

    function login(user: any) {
        dispatch(userAction.login(user))
    }
    function makeAuth() {

        //  we receive data from backends
        const { token, userId, role, imgUrl } = userData
        /* 
        store user details and jwt token in local storage to 
        keep user logged in between page refreshes 

        */
        Auth.setToken(token);
        Auth.setUserId(userId);
        Auth.setRole(role)
        Auth.setImgUrl(imgUrl)
        window.location.reload();


    }
    if (Auth.isAuth()) {
        return <Redirect to='/' />
    }

    return (
        <Layout title={'Login'}>

            <IonSegment color="success" onIonChange={currentSegment} value={selected}  >
                <IonSegmentButton value="1">
                    <IonLabel>login</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="0">
                    <IonLabel>signup</IonLabel>
                </IonSegmentButton>
            </IonSegment>

            {
                Boolean(parseInt(selected)) && <LoginSignupForm loginOrsingup={login} action={'login'} />
            }
            {
                !Boolean(parseInt(selected)) && <LoginSignupForm loginOrsingup={signup} action={'signup'} />
            }

            {
                loading && <IonLoading
                    isOpen={true}
                    message={'Please wait...'}

                />

            }
            {
                error && <IonToast

                    color="danger"
                    isOpen={true}
                    message={error}
                    position="bottom"
                    duration={3000}

                />
            }
            {  succes && <IonToast

                color="succes"
                isOpen={true}
                message={"succes"}
                position="bottom"
                duration={3000}

            />}

            {userData && makeAuth()}

        </Layout>

    );
};


const LoginSignupForm = ({ loginOrsingup, action }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const _loginOrsingup = (e: any) => {
        e.preventDefault()
        loginOrsingup({ email, password })
    }
    return (<div className="ion-text-center"  >

        <form onSubmit={_loginOrsingup}    >


            <input onChange={handleEmail} placeholder=" email" required type="email"
                style={{ marginTop: "20px" }}


            /><br />

            <input onChange={handlePassword} placeholder="password" required minLength={5} maxLength={10}
                style={{ marginTop: "20px" }}
            />
            <br />
            <br />
            <button className="ionic-button "> {action}</button>
            <br />
        </form>
    </div>)
}
export default Login;
