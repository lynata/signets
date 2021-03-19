import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {instanceFirestore} from '../firebase';
import AjouterDossier from './AjouterDossier';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);
  const etatDossiers = useState([]);
  const [dossiers, setDossiers] = etatDossiers;
  // const [utilisateur, setUtilisateur] = etatUtilisateur;

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        util => {
          setUtilisateur(util);
          //creer le profil de lutilisateur dans firestore si lutil nest pas NULL
          if(util){
            instanceFirestore.collection('utilisateurs').doc(util.uid).set({
              nom: util.displayName, 
              courriel : util.email,
              datecompte: firebase.firestore.FieldValue.serverTimestamp()
            }, {merge: true});
          }
          // console.log("obj util connecte retourne par google", util)
        }
      );
    }, []
  );

  // gestion de la boite de dialogue "ajout dossier"
  const [ouvert, setOuvert] = useState(false);
  

  function gererAjout(nom, couverture, couleur) {
    //ajouter le dossier dans firestore
    // console.log("les 3 param", nom, couleur, couverture);
    const objDossier = {
      nom: nom,
      couverture: couverture,
      couleur: couleur,
      datemodif: firebase.firestore.FieldValue.serverTimestamp()
    }
    instanceFirestore.collection('utilisateurs').doc(utilisateur.uid).collection('dossiers').add(objDossier).then(
      refDoc => {
        setOuvert(false);
        refDoc.get().then(
          doc => setDossiers([...dossiers, {...doc.data(), id: doc.id}])
        )
      }
    );
    //rafraishir ketat de ka variable "dossiers"
    // setDossiers([...dossiers, objDossier]);
    // puis fermer la boite de dialogue
    
  }

  return (
    <div className="Appli">
      {
        utilisateur ?
        <>
          <Entete utilisateur={utilisateur} />
          <section className="contenu-principal">
            <ListeDossiers utilisateur={utilisateur} etatDossiers={etatDossiers} />
            <AjouterDossier ouvert={ouvert} setOuvert={setOuvert} gererAjout={gererAjout}/>
            <Fab onClick={() =>setOuvert(true)} className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
              <AddIcon />
            </Fab>
          </section> 
        </>
        :
          <Accueil />
      }
    </div>
  );
}
