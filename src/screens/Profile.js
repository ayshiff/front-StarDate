import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import '../style/Profile.css'
import imageProfile from '../icons/imageProfile.png';
import settings from '../icons/settings.png';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        this.disconnect = this.disconnect.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    editProfile() {
        this.setState({
            edit: true
        })
    }

    edit() {

    }

    disconnect () {
        this.props.nav.popPage();
    }

  render() {
        let content =  (<div className="ProfilePage_description">
            <div className="ProfilePage_description_header">
                <h1 className="ProfilePage_description_header_Name"> DarkVador, 50</h1>
                <img onClick={this.editProfile} src={settings} alt="settings" className="ProfilePage_description_header_settings"/>
            </div>
            <h3 className="ProfilePage_description_place">Terraria</h3>
            <p className="ProfilePage_description_about"> A propos</p>
            <p className="ProfilePage_description_description"> ezfezfezfzefzefzfefsdfssdfsdfsdfsdfsdgfdsgdfgdgezfeezefz</p>
        </div>);

        let editContent =  (<form className="ProfilePage_description">
          <div className="ProfilePage_description_header">
              <input className="ProfilePage_description_header_Name" value="DarkVador"/>
          </div>
                <p className="ProfilePage_description_about">Planète</p>
          <input className="ProfilePage_description_place" value="Terraria"/>
          <p className="ProfilePage_description_about"> A propos</p>
          <input className="ProfilePage_description_description" value="hgktkfyututiuytiutuyduy" />
      </form>
        )
    return (
        <Page key="ProfilePage" className="ProfilePage">

            <div className="ProfilePage_image"></div>
            {this.state.edit? editContent: content}
            {this.state.edit? <button onClick={this.edit} className="ProfilePage_deconnection">
                Modifier
            </button>: <button onClick={this.disconnect} className="ProfilePage_deconnection">
                Se déconnecter
            </button>}

            {this.state.edit? <p className="ProfilePage_suppress"> Supprimer le compte </p>: null}

        </Page>
    );
  }
}

export default Profile;
