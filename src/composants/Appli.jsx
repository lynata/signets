import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Accueil from './Accueil';
import { useState } from 'react';

export default function Appli() {
  const etatUtilisateur = useState(null);
  const [utilisateur, setUtilisateur] = etatUtilisateur;

  return (
    <div className="Appli">
      {
        utilisateur ?
        <>
          <Entete />
          <section className="contenu-principal">
            <ListeDossiers />
            <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
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
