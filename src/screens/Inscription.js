import React, {Component} from 'react';
import '../style/Inscription.css';
import iconInscription from '../icons/iconInscription.png';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';

class Inscription extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Page className="InscriptionPage">
            <div className="InscriptionPage_containerInscription">
                <form action="" method="post" className="InscriptionPage_containerInscription_formInscription">
                <div class="InscriptionPage_containerInscription_formInscription_flexName">
                <input type="text" name="email" id="nom" placeholder="Nom"/>
                <input type="text" name="email" id="prenom" placeholder="Prénom"/>
            </div>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Mot de passe"/>
                <input type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe"/>
                </form>
            </div>
            <img src={iconInscription} alt="NextStep" className="InscriptionPage_icon"/>
            </Page>
        )
    }
}

export default Inscription