import './Accueil.scss';
import firebase from 'firebase/app';
import {instanceFirebaseUI } from '../firebase';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';

export default function Accueil() {

    useEffect(
        () => instanceFirebaseUI.start('#firebase-widget', {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
        },[]) // ,[] = appelle une seule fois
    )

    return (
        <div className="Accueil" >
            <h3 className="logo">Signets <span>beta</span></h3>
            <h3 className="amorce">Organiser vos signets Web, <br/>Simple comme bonjour!</h3>
            <h4 className="connexion-etiquette">Connexion a Signets</h4>
            <div id="firebase-widget"></div>
        </div>
    )
}