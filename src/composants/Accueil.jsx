import './Accueil.scss';
import firebase from 'firebase/app';
import {instanceFirebaseUI } from '../firebase';

export default function Accueil(props) {
    return (
        <div className="Accueil" >
            <h3 className="logo">Signets <span>beta</span></h3>
            <h3 className="amorce">Organiser vos signets Web, <br/>Simple comme bonjour!</h3>
            <h4 className="connexion-etiquette">Connexion a Signets</h4>
            <div className="firebase-widget"></div>
        </div>
    )
}