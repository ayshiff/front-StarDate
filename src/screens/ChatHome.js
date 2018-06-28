import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/ChatHome.css';
import '../style/Home.css';
import '../style/forsize.css';
import MediaQuery from 'react-responsive';
import settings from '../icons/settings.png';
import profilePic from '../icons/profilePic.png';
import Chat from './Chat';

class ChatHome extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.pushChat = this.pushChat.bind(this)
    }

    pushChat () {
        this.props.nav.pushPage({component: Chat})
    }


    render() {
        return(
            <Page key="ChatPage" className="ChatPage">
                <MediaQuery query="(max-width: 420px)">
                <div onClick={this.pushChat} className="ChatPage_div">
                    <img className="ChatPage_div_image" src={profilePic} alt=""/>
                    <div className="ChatPage_div_container">
                        <h3 className="ChatPage_div_container_title">Chewbaca</h3>
                        <p className="ChatPage_div_container_message">Hello :)</p>
                    </div>
                </div>
                </MediaQuery>

                <MediaQuery query="(min-width: 421px)">
                <div className="ChatPageDesktop">
                  <div className="HomePageDesktop_sideBar">
                    <img className="HomePageDesktop_sideBar_profilePic" src={profilePic} alt="profilePic"/>
                    <div className="HomePageDesktop_sideBar_nav">
                        <div className="HomePageDesktop_sideBar_items">
                            <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="35" height="28"><path fill="#F04240" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>
                            <a className="HomePageDesktop_sideBar_items_links" href="/profile"><span className="HomePageDesktop_sideBar_items_span">Profil</span></a>
                        </div>
                        <div className="HomePageDesktop_sideBar_items">
                            <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="35" height="28">
                                <path fill="rgba(204,204,206,0.46)" d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"/></svg>
                            <a className="HomePageDesktop_sideBar_items_links" href="/home">Carte</a>
                        </div>
                        <div className="HomePageDesktop_sideBar_items">
                            <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="28"><path fill="rgba(204,204,206,0.46)" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
                            <a className="HomePageDesktop_sideBar_items_links" href="/chat">Message</a>
                        </div>
                    </div>
                  </div>
                  <div className="ChatPageDesktop_contact">
                    <div className="ChatPageDesktop_contact_container">
                      <div className="ChatPageDesktop_contact_card">
                        <div className="ChatPageDesktop_contact_card_notif"></div>
                        <img src={profilePic} alt="profilePic" className="ChatPageDesktop_contact_card_pic"/>
                        <div className="ChatPageDesktop_contact_card_contents">
                          <h4 className="ChatPageDesktop_contact_card_contents_name">Johnny</h4>
                          <p className="ChatPageDesktop_contact_card_contents_lastMessage">On est champion !!</p>
                        </div>
                      </div>
                      <div className="ChatPageDesktop_contact_card">
                        <img src={profilePic} alt="profilePic" className="ChatPageDesktop_contact_card_pic"/>
                        <div className="ChatPageDesktop_contact_card_contents">
                          <h4 className="ChatPageDesktop_contact_card_contents_name">Zizou</h4>
                          <p className="ChatPageDesktop_contact_card_contents_lastMessage">Coup de boule</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ChatPageDesktop_conv">
                    <div className="ChatPageDesktop_conv_read">
                      <div className="ChatPageDesktop_conv_read_contents">

                        <div className="ChatPageDesktop_conv_read_received">
                          <img src="profilePic.png" alt="profilePic" className="ChatPageDesktop_conv_read_received_pic"/>
                          <p className="ChatPageDesktop_conv_read_received_message">On est quoi ?</p>
                        </div>

                        <div className="ChatPageDesktop_conv_read_send">
                          <p className="ChatPageDesktop_conv_read_send_message">Champion mon frère.</p>
                          <img src="profilePic.png" alt="profilePic" className="ChatPageDesktop_conv_read_send_pic"/>
                        </div>

                        <div className="ChatPageDesktop_conv_read_received">
                          <img src="profilePic.png" alt="profilePic" className="ChatPageDesktop_conv_read_received_pic"/>
                          <p className="ChatPageDesktop_conv_read_received_message">ON EST CHAMPION !!!</p>

                        </div>

                      </div>
                    </div>

                    <div className="ChatPageDesktop_conv_sendingZone">
                      <input className="ChatPageDesktop_conv_sendingZone_input" type="text" name="Nouveau message" value="Nouveau message"/>

                    </div>
                  </div>
                </div>
                </MediaQuery>

            </Page>
        )
    }
}

export default ChatHome
