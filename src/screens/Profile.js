import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import '../style/Profile.css'
import imageProfile from '../icons/imageProfile.png';
import settings from '../icons/settings.png';

class Profile extends Component {

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
                <p className="ProfilePage_description_response"> Reponse</p>

            </div>
        </Page>
    );
  }
}

export default Profile;
