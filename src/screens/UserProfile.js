import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/ChatHome.css';
import '../style/Profile.css';
import Chat from './Chat';
import '../style/Profile.css';
import MediaQuery from 'react-responsive';
import { Modal } from 'react-onsenui';
import axios from "axios/index";
import settings from '../icons/settings.svg';
import confirm from '../icons/confirm.svg';
import warning from '../icons/warning.svg';
import profilePic from '../icons/profilePic.png';

class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
        this.backPage = this.backPage.bind(this);
        this.pushPageChat = this.pushPageChat.bind(this);
        console.log(this.props)
    }

    backPage() {
        this.props.navigator.popPage();
    }

    pushPageChat() {
        this.props.navigator.pushPage({component: Chat});
    }

    componentWillMount () {
        let that = this;
        console.log(this.props.match.params.id)
        if(this.props.match.params.id) {
            axios.get('http://localhost:8000/api/users')
                .then(function (response) {
                    let respon = response.data['hydra:member'].find((e) => {
                        return e.id == that.props.match.params.id
                    });
                    axios.get('http://localhost:8000'+respon.position)
                        .then(function(e) {
                            that.setState({
                                position: e.data.name,
                                name: respon.name,
                                age: respon.age,
                                description: respon.description
                            })
                        })
                        .catch((error) => console.log(error));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }



    render() {
        return(
            <Page key="ProfilePage" className="ProfilePage">

                <MediaQuery query="(max-width: 420px)">
                <svg onClick={this.backPage} className="ProfilePage_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                <div className="ProfilePage_image"></div>
                <div className="ProfilePage_description">
                    <div className="ProfilePage_description_header">
                        <h1 className="ProfilePage_description_header_Name"> {this.state.name}, {this.state.age}</h1>
                        <svg onClick={this.pushPageChat} className="ProfilePage_description_header_settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
                    </div>
                    <h3 className="ProfilePage_description_place">{this.state.position}</h3>
                    <p className="ProfilePage_description_about"> A propos</p>
                    <p className="ProfilePage_description_description"> {this.state.description}</p>

                </div>
                </MediaQuery>

                <MediaQuery query="(min-width: 421px)">
                    <div className="HomePageDesktop_sideBar">
                        <img className="HomePageDesktop_sideBar_profilePic" src={profilePic} alt="profilePic"/>
                        <div className="HomePageDesktop_sideBar_nav">
                            <div className="HomePageDesktop_sideBar_items">
                                <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="35" height="28"><path fill="#F04240" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>
                                <a className="HomePageDesktop_sideBar_items_links" href={"/profile/"+this.props.match.params.id}><span className="HomePageDesktop_sideBar_items_span">Profil</span></a>
                            </div>
                            <div className="HomePageDesktop_sideBar_items">
                                <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="35" height="28">
                                    <path fill="rgba(204,204,206,0.46)" d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"/></svg>
                                <a className="HomePageDesktop_sideBar_items_links" href={"/home/"+this.props.match.params.id}>Carte</a>
                            </div>
                            <div className="HomePageDesktop_sideBar_items">
                                <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="28"><path fill="rgba(204,204,206,0.46)"  d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
                                <a className="HomePageDesktop_sideBar_items_links" href={"/chat/"+this.props.match.params.id}>Message</a>
                            </div>
                        </div>
                    </div>
                    <div className=""> <img class="ProfilePageDesktop_image"src="#" alt=""/> </div>
                    <div className="ProfilePageDesktop_description">
                        <p className="ProfilePageDesktop_description_header_name">{this.state.name}, {this.state.age}</p>
                        <h3 className="ProfilePageDesktop_description_place">{this.state.position}</h3>
                        <p className="ProfilePageDesktop_description_about"> A propos</p>
                        <p className="ProfilePageDesktop_description_txt"> {this.state.description}</p>
                        <img className="ProfilePageDesktop_description_settings" src={settings}/>
                        <img className="ProfilePageDesktop_description_settings_ok" src={confirm}/>
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
                            <input onClick={this.disconnectDesktop} value="Oui" type="button" className="ProfilePageDesktop_modal_logout_input_right"/>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.modalIsOpenDelete}
                    >
                        <div className="ProfilePageDesktop_modal_delete">
                            <img className="ProfilePageDesktop_modal_delete_img" src={warning} alt=""/>
                            <p className="ProfilePageDesktop_modal_delete_txt">Voulez-vous vraiment vous supprimer votre compte ?</p>
                            <input onClick={this.closeModalDelete} value="Non" type="button" className="ProfilePageDesktop_modal_delete_input_left"/>
                            <input value="Oui" type="button" className="ProfilePageDesktop_modal_delete_input_right"/>
                        </div>
                    </Modal>
                </MediaQuery>
            </Page>
        )
    }
}

export default UserProfile