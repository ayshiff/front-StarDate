import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import '../style/Home.css';
import mask1 from '../icons/mask1.svg';
import mask2 from '../icons/mask2.svg';
import mask3 from '../icons/mask3.svg';
import mask4 from '../icons/mask4.svg';
import profilePic from '../icons/profilePic.png';
import MediaQuery from 'react-responsive';
import UserProfile from './UserProfile';
import Inscription from "./Inscription";
import Profile from './Profile';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1,
        users: []
    };
    this.pushProfile = this.pushProfile.bind(this)
  }

  // Request => API users
  /*
  componentWillMount() {
      axios.get('http://localhost:8000/api/users')
          .then(function (response) {
              console.log(response);
              this.setState({
                  users: response
              })
          })
          .catch(function (error) {
              console.log(error);
          });

  } */

  pushPageProfile() {
      this.props.nav.pushPage({component: UserProfile})
  }

    pushProfile() {
        window.location.href = "/profile";
    }


  render() {
    return (
        <Page key="HomePage" className="HomePage">
            <MediaQuery query="(min-width: 421px)">

            <div className="HomePageDesktop">
                <div className="HomePageDesktop_sideBar">
                  <img className="HomePageDesktop_sideBar_profilePic" src={profilePic} alt="profilePic"/>
                  <div className="HomePageDesktop_sideBar_nav">
                    <div className="HomePageDesktop_sideBar_items">
                      <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="35" height="28"><path fill="rgba(204,204,206,0.46)" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"/></svg>
                      <a className="HomePageDesktop_sideBar_items_links" href="/profile">Profil</a>
                    </div>
                    <div className="HomePageDesktop_sideBar_items">
                      <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="35" height="28">
                        <path fill="#F04240" d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"/></svg>
                      <a className="HomePageDesktop_sideBar_items_links" href="/home"><span className="HomePageDesktop_sideBar_items_span">Carte</span></a>
                    </div>
                    <div className="HomePageDesktop_sideBar_items">
                      <svg className="HomePageDesktop_sideBar_items_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="28"><path fill="rgba(204,204,206,0.46)" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
                      <a className="HomePageDesktop_sideBar_items_links" href="/chat">Message</a>
                    </div>
                  </div>
                </div>
                <div className="HomePageDesktop_map">
                  <div className="HomePageDesktop_map_myPosition">
                      <img src={profilePic} className="HomePageDesktop_map_myPosition_mask1"/>
                      <img src={mask2} className="HomePageDesktop_map_myPosition_mask2"/>
                      <img src={mask3} className="HomePageDesktop_map_myPosition_mask3"/>
                      <img src={mask4} className="HomePageDesktop_map_myPosition_mask4"/>
                  </div>
                  <div className="HomePageDesktop_map_profiles">
                    <img className="HomePageDesktop_map_profiles_pic" src={profilePic} alt="profilePic"/>
                  </div>
                </div>
                <div className="HomePageDesktop_view">
                  <div className="HomePageDesktop_view_modal">
                    <img className="HomePageDesktop_view_modal_pic" src={profilePic} alt="profilePic"/>
                    <h2 className="HomePageDesktop_view_modal_name">Neytiri, <span className="HomePageDesktop_view_modal_age">24</span></h2>
                    <p className="HomePageDesktop_view_modal_planet">Pandora</p>
                    <h4 className="HomePageDesktop_view_modal_about">À propos</h4>
                    <p className="HomePageDesktop_view_modal_descri">BRAAAWWWWHH Sznf fef zfezf ezfez fez fez fezfez</p>
                    <button className="HomePageDesktop_view_modal_button">Message</button>
                  </div>
                </div>
              </div>

                <h1 onClick={this.pushProfile}> Page Profile </h1>

            </MediaQuery>

            <MediaQuery query="(max-width: 420px)">
                <ReactSwipe className="HomePage_carousel" swipeOptions={{
                    startSlide: 1,
                    continuous: true,
                    speed: 700
                }} key={3}>
                    <div className="HomePage_carousel1" style={{color: "white", height: '90vh'}}>

                    </div>
                    <div className="HomePage_carousel2" style={{color: "white", height: '90vh'}}>
                        <img onClick={this.pushPageProfile.bind(this)} src={profilePic} alt="profilePic" className="HomePage_carousel2_profile"/>
                        <div className="HomePage_carousel2_loading">
                            <img src={mask1} className="HomePage_carousel2_loading_mask1"/>
                            <img src={mask2} className="HomePage_carousel2_loading_mask2"/>
                            <img src={mask3} className="HomePage_carousel2_loading_mask3"/>
                            <img src={mask4} className="HomePage_carousel2_loading_mask4"/>
                        </div>
                    </div>
                    <div className="HomePage_carousel3" style={{color: "white", height: '90vh'}}>

                    </div>

                </ReactSwipe>
            </MediaQuery>

      </Page>
    );
  }
}

export default Home;
