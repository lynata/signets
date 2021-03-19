import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function AjouterDossier({ouvert, setOuvert , gererAjout}) {
  const [nom, setNom] = useState('as');
  const [couverture, setCouverture] = useState('tu');
  const [couleur, setCouleur] = useState('#090');

  return (
    <div className="AjouterDossier" >
      <Dialog open={ouvert} onClose={() => setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dosser"
            type="text"
            fullWidth
            onChange={(evt) => setNom(evt.target.value)}
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(evt) => setCouverture(evt.target.value)}
          />
          <TwitterPicker
            width="100%"
            triangle= "hide"
            onChangeComplete= {(couleur, evt) => setCouleur(couleur.hex)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOuvert(false)} color="primary">
            Annuler
          </Button>
          <Button onClick={ () => gererAjout(nom, couverture, couleur)} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
