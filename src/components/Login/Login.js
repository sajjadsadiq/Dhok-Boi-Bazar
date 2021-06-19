import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import images from '../../fakeData/images/singIn.svg'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);

    const handelGoogleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
               const {displayName, email} = result.user;
               const singInUser = {name: displayName, email: email}
               setLoggedInUser(singInUser)
               history.replace(from)
            })
        console.log("click Here");
    }
    return (
        <div>
            <img src={images} alt=""/>
            <Button variant="success" className="singInBtnDesign" onClick={handelGoogleSingIn}><FontAwesomeIcon icon={faGoogle} /> Sing In With Google</Button>
            
        </div>
    );
};

export default Login;