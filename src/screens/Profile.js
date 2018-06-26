import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar, Modal } from 'react-onsenui';
import '../style/Profile.css'
import imageProfile from '../icons/imageProfile.png';
import settings from '../icons/settings.png';
import MediaQuery from 'react-responsive';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            modalIsOpen: false,
            modalIsOpenDelete: false
        };
        this.disconnect = this.disconnect.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.openModal = this.openModal.bind(this);
        this.openModalDelete = this.openModalDelete.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalDelete = this.closeModalDelete.bind(this);
        console.log(this.props.navigator)
    }

    editProfile() {
        this.setState({
            edit: true
        })
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }

    closeModalDelete() {
        this.setState({
            modalIsOpenDelete: false
        })
    }

    openModalDelete() {
        this.setState({
            modalIsOpenDelete: true
        })
    }

    edit() {

    }

    disconnect () {
        window.location.href = "/";
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

            <MediaQuery query="(max-width: 420px)">
            <div className="ProfilePage_image"></div>
            {this.state.edit? editContent: content}
            {this.state.edit? <button onClick={this.edit} className="ProfilePage_deconnection">
                Modifier
            </button>: <button onClick={this.disconnect} className="ProfilePage_deconnection">
                Se déconnecter
      </button>}

            {this.state.edit? <p className="ProfilePage_suppress"> Supprimer le compte </p>: null}

            </MediaQuery>

        <MediaQuery query="(min-width: 421px)">
        <div className=""> <img class="ProfilePageDesktop_image"src="#" alt=""/> </div>
      <div className="ProfilePageDesktop_description">
        <p className="ProfilePageDesktop_description_header_name">Zimbabwe, 12</p>
        <h3 className="ProfilePageDesktop_description_place">Terraria</h3>
        <p className="ProfilePageDesktop_description_about"> A propos</p>
        <p className="ProfilePageDesktop_description_txt"> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour
           réaliser un livre spécimen de polices de texte.</p>
           <img className="ProfilePageDesktop_description_settings" src="#"/>
           <img className="ProfilePageDesktop_description_settings_ok" src="#"/>
      </div>
      <div className="ProfilePageDesktop_description_input">
    <input onClick={this.openModal} className="ProfilePageDesktop_description_input_logout" value="Se deconnecter" type="button"/>
    <input onClick={this.openModalDelete} className="ProfilePageDesktop_description_input_delete" value="supprimer le compte" type="button"/>
    </div>
            <Modal
                isOpen={this.state.modalIsOpen}
            >
    <div className="ProfilePageDesktop_modal_logout">
      <p className="ProfilePageDesktop_modal_logout_txt">Voulez-vous vraiment vous deconnecter ?</p>
      <input onClick={this.closeModal} value="Non" type="button" className="ProfilePageDesktop_modal_logout_input_left"/>
      <input onClick={this.disconnect} value="Oui" type="button" className="ProfilePageDesktop_modal_logout_input_right"/>
    </div>
            </Modal>
                <Modal
                    isOpen={this.state.modalIsOpenDelete}
                >
    <div className="ProfilePageDesktop_modal_delete">
      <img className="ProfilePageDesktop_modal_delete_img" src="#" alt=""/>
      <p className="ProfilePageDesktop_modal_delete_txt">Voulez-vous vraiment vous deconnecter ?</p>
      <input onClick={this.closeModalDelete} value="Non" type="button" className="ProfilePageDesktop_modal_delete_input_left"/>
      <input value="Oui" type="button" className="ProfilePageDesktop_modal_delete_input_right"/>
    </div>
                </Modal>
           </MediaQuery> 

        </Page>
    );
  }
}

export default Profile;
