import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import '../style/Profile.css'
import imageProfile from '../icons/imageProfile.png';
import settings from '../icons/settings.png';
import MediaQuery from 'react-responsive';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.disconnect = this.disconnect.bind(this);
    }

    disconnect () {
        this.props.nav.popPage();
    }

  render() {
    return (
        <Page key="ProfilePage" className="ProfilePage">
            <div className="ProfilePage_image"></div>
            <div className="ProfilePage_description">
                <div className="ProfilePage_description_header">
                <h1 className="ProfilePage_description_header_Name"> DarkVador, 50</h1>
                <img src={settings} alt="settings" className="ProfilePage_description_header_settings"/>
                </div>
                <h3 className="ProfilePage_description_place">Terraria</h3>
                <p className="ProfilePage_description_about"> A propos</p>
                <p className="ProfilePage_description_description"> ezfezfezfzefzefzfefsdfssdfsdfsdfsdfsdgfdsgdfgdgezfeezefz</p>
                <div className="ProfilePage_description_div">
                <p className="ProfilePage_description_div_deconnection"> Se déconnecter </p>
                </div>
            </div>
            <button onClick={this.disconnect} className="ProfilePage_deconnection">
                Se déconnecter
            </button>
            <p className="ProfilePage_suppress"> Supprimer le compte </p>
        <MediaQuery query="(min-width: 421px)">
        <div className=""> <img class="ProfilePageDesktop_image"src="wala.png" alt=""/> </div>
      <div className="ProfilePageDesktop_description">
        <p className="ProfilePageDesktop_description_header_name">Zimbabwe, 12</p>
        <h3 className="ProfilePage_description_place">Terraria</h3>
        <p className="ProfilePage_description_about"> A propos</p>
        <p className="ProfilePage_description_txt"> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour
           réaliser un livre spécimen de polices de texte.</p>
           <img className="ProfilePage_description_settings" src="settings.png"/>
           <img className="ProfilePage_description_settings_ok" src="ok.png"/>

      </div>
      <div className="ProfilePageDesktop_description_input">
    <input className="ProfilePageDesktop_description_input_logout" value="Se deconnecter" type="button"/>
    <input className="ProfilePageDesktop_description_input_delete" value="supprimer le compte" type="button"/>
    </div>
           </MediaQuery> 
        </Page>
    );
  }
}

export default Profile;
