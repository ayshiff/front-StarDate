import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar, Modal, Button } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import Main from './Main'
import '../style/Login.css'
import logo from '../icons/logo.png';
import planet from '../icons/planet.svg';
import stars1 from '../icons/stars1.svg';
import stars2 from '../icons/stars2.svg';
import placeholder from '../icons/placeholder.png';
import placeholder2 from '../icons/placeholder2.png';
import oval from '../icons/oval.svg';
import OvalToggle from '../icons/OvalToggle.svg';
import Inscription from './Inscription';
import * as firebase from 'firebase'
import {getLoginAction} from '../redux/action'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive';
import desktopfemale from '../icons/female.svg';
import desktopmale from '../icons/male.svg';
import desktopboth from '../icons/both.svg';
import axios from 'axios';
import { findDOMNode } from 'react-dom';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            modalIsOpen: false,
            error: null,
            indexContent: 0,
            userSearch: null,
            userState: null,
            userGalaxie: null
        };
        this.pushPageMain = this.pushPageMain.bind(this);
        this.pushPageInscription = this.pushPageInscription.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.loginAction = this.loginAction.bind(this)
        this.loginActionDesktop = this.loginActionDesktop.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.registerDesktop = this.registerDesktop.bind(this)
        this.onItemClickSearch = this.onItemClickSearch.bind(this)
        this.onItemClickState = this.onItemClickState.bind(this)
        this.onItemClick = this.onItemClick.bind(this)
    }


    onItemClickSearch(event) {
        if(event.currentTarget.style.backgroundColor === "rgb(237, 90, 90)" ) {
            event.currentTarget.style.backgroundColor = "white"
            this.setState({
                userSearch: null
            })
        } else if (event.currentTarget.style.backgroundColor !== "rgb(237, 90, 90)" && this.state.userSearch === null) {
            event.currentTarget.style.backgroundColor = "rgb(237, 90, 90)"
            this.setState({
                userSearch: event.currentTarget.id,

            })
        }
    }

    onItemClickState(event) {
        console.log(event.currentTarget.style.backgroundColor)
        if(event.currentTarget.style.backgroundColor === "rgb(237, 90, 90)" ) {
            event.currentTarget.style.backgroundColor = "white"
            this.setState({
                userState: null
            })
        } else if (event.currentTarget.style.backgroundColor !== "rgb(237, 90, 90)" && this.state.userState === null) {
            event.currentTarget.style.backgroundColor = "rgb(237, 90, 90)"
            this.setState({
                userState: event.currentTarget.id,
            })
        }
    }

    onItemClick(event) {
        if(event.currentTarget.style.color === "rgb(237, 90, 90)" ) {
            event.currentTarget.style.color = "black"
            this.setState({
                userGalaxie: null
            })
        } else if (event.currentTarget.style.color !== "rgb(237, 90, 90)" && this.state.userGalaxie === null) {
            event.currentTarget.style.color = "rgb(237, 90, 90)"
            this.setState({
                userGalaxie: event.currentTarget.id,
            })
        }
    }

    pushPageMain() {
        this.props.navigator.pushPage({component: Main})
    }

    pushPageInscription() {
        this.props.navigator.pushPage({component: Inscription})
    }

    emailChange (event) {
        this.setState({
            email : event.target.value
        })
    }

    passwordChange (event) {
        this.setState({
            password : event.target.value
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    loginActionDesktop (){

        let that = this;
        this.props.onSubmit(this.state.email);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){

            axios.get('http://localhost:8000/api/users')
                .then(function (response) {
                    let respon = response.data['hydra:member'].find((e) => {
                        return e.email === that.state.email
                    });
                    if(respon.password === that.state.password) {
                         window.location.href = "/home/"+respon.id;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }).catch(error => {
            // console.log(error.code +''+ error.message)
            console.log(error.message);
            that.setState({
                error: error.code // ou error.message
            })
        })
    }

    loginAction (){

        let that = this;
        this.props.onSubmit(this.state.email);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
            console.log(user.user.uid);

            axios.get('http://localhost:8000/api/users')
                .then(function (response) {
                    let respon = response.data['hydra:member'].find((e) => {
                        return e.email === that.state.email
                    });
                    if(respon.password === that.state.password) {
                        that.props.navigator.pushPage({component: Main})
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }).catch(error => {
            // console.log(error.code +''+ error.message)
            console.log(error.message);
            that.setState({
                error: error.code // ou error.message
            })
        })
    }

    registerDesktop () {
        this.setState({indexContent: this.state.indexContent +1})
        if(this.state.indexContent === 3) {
            window.location.href = "/home";
        }
    }

    closeModal() {

           this.setState({
                modalIsOpen: false
            })
    }

  render() {
        let that = this;
      function setIndex(index) {
          that.setState({
              index
          });
      }
    function renderSwitch(index) {
          let tab = [];

        for(let i = 0; i<3;i++) {
            let classe = "oval"+i;
              if(index === i) {
                  tab.push(<img key={i} src={OvalToggle} alt="oval" className={classe} />)
              } else {
                  tab.push(<img key={i} src={oval} alt="oval" className={classe}/>)
              }

        }
        return tab
    }

    let showContent = () => {
            switch (this.state.indexContent){
                case 0 :
                    return content1();
                case 1:
                    return content2();
                case 2:
                    return content3();
                case 3:
                    return content4();
            }
    };
    // Homepage Content step 1 register
    let content1 = () => (
      <div className="homeDesktop_inscriptionContainer">
        <h3 className="homeDesktop_createAccount">Créez vous <span className="homeDesktop_coloriage">un compte </span></h3>
        <div className="homeDesktop_containerInscription">
            <form action="" method="post" className="homeDesktop_formInscription">
                <div className="homeDesktop_flexName">
                    <input className="homeDesktop_inputItemForm" type="text" name="email" id="nom" placeholder="Nom*" />
                </div>
                <input className="homeDesktop_inputItemForm" type="email" name="email" id="email" placeholder="Email*" />
                <input className="homeDesktop_inputItemForm" type="number" name="age" id="age" placeholder="Age*" />
                <input className="homeDesktop_inputItemForm" type="password" name="password" id="password" placeholder="Mot de passe*" />
                <input className="homeDesktop_inputItemForm" type="password" name="password" id="password2" placeholder="Comfirmer le mot de passe*" />
            </form>
            <button onClick={this.registerDesktop} className="homeDesktop_inscriptionBtn">S'inscrire</button>
        </div>
     </div>);
    // Homepage Content Step 2 register
      let content2 = () => (<div className="homeDesktop_inscriptionContainer">
          <h3 className="homeDesktop_createAccount">
              Créez vous <span className="homeDesktop_coloriage">un compte </span></h3>
          <div className="homeDesktop_containerInscription">
              <div className="homeDesktop_titleContainerStep2" >
                  <h3 className="homeDesktop_titleStep2">
                      Vous êtes ?
                  </h3>
              </div>
              <div className="homeDesktop_containerInscription2">
                  <div onClick={this.onItemClickState} className="homeDesktop_logoStep2Container">
                  <img src={desktopmale} alt="logoFemale" className="homeDesktop_logoStep2" />
              </div>
                  <div onClick={this.onItemClickState} className="homeDesktop_logoStep2Container">
                  <img src={desktopfemale} alt="logoMale" className="homeDesktop_logoStep2" />
                  </div>
                  <div onClick={this.onItemClickState} className="homeDesktop_logoStep2Container">
                  <h5 className="homeDesktop_otherStep2">Autre</h5>
                  </div>
              </div>
              <div className="homeDesktop_titleContainerStep2">
                  <h3 className="homeDesktop_titleStep2">
                      Vous recherchez ?
                  </h3>
              </div>
              <div className="homeDesktop_containerInscription2">
                  <div onClick={this.onItemClickSearch} className="homeDesktop_logoStep2Container">
                  <img src={desktopmale} alt="logoFemale" className="homeDesktop_logoStep2" />
                  </div>
                  <div onClick={this.onItemClickSearch} className="homeDesktop_logoStep2Container">
                  <img src={desktopfemale} alt="logoMale" className="homeDesktop_logoStep2" />
                  </div>
                  <div onClick={this.onItemClickSearch} className="homeDesktop_logoStep2Container">
                  <h5 className="homeDesktop_otherStep2">Autre</h5>
                  </div>
              </div>
              <button onClick={this.registerDesktop} className="homeDesktop_inscriptionBtn">Suivant</button>
          </div>
      </div>);
    // Homepage content step 3 register
      let content3 = () => (<div className="homeDesktop_inscriptionContainer">
          <h3 className="homeDesktop_createAccount">
              Créez vous <span className="homeDesktop_coloriage">un compte </span></h3>
          <div className="homeDesktop_containerInscription">
              <h3 className="homeDesktop_titleStep2">
                  Selectionner <span className="homeDesktop_coloriage">votre galaxie.</span></h3>
              <div className="homeDesktop_buttonGalaxyContainer">
                  <button onClick={this.onItemClick} className="homeDesktop_buttonGalaxy">Voie lactée</button>
              </div>
              <button onClick={this.registerDesktop} className="homeDesktop_inscriptionBtn">Suivant</button>
          </div>
        </div>);


        let content4 = () => (<div className="homeDesktop_inscriptionContainer">
            <h3 className="homeDesktop_createAccount">
                Créez vous <span className="homeDesktop_coloriage">un compte </span></h3>
        <div className="homeDesktop_containerInscription">
                <h3 className="homeDesktop_titleStep2">Dites nous en <span className="homeDesktop_coloriage">plus.</span></h3>
        <div className="homeDesktop_formInscription">
            <div className="homeDesktop_profileContainer">
                <div className="homeDesktop_profileItemContainer">
                <div className="homeDesktop_profileItems">
                    <div className="homeDesktop_inputItemFormImgContainer">
                    <label for="upload-photo">Choisir une photo</label>
                    <input className="homeDesktop_inputItemFormImg" type="file" accept=".jpg, .jpeg, .png" name="photo" id="upload-photo"/>
                    </div> 
                </div>
                <div className="homeDesktop_profileItems">
                    <select className="homeDesktop_selectItemForm" name="Votre planete" size="" id="age" placeholder="age*" >
                         <option className="homeDesktop_selectOption">Votre planete</option>
                    </select>
                    <select className="homeDesktop_selectItemForm"  name="Votre espece" size="" id="age" placeholder="age*">
                         <option>Votre especes</option>
                    </select>
                </div>
                  </div>
                <div className="homeDesktop_bioContainer">
                    <input className="homeDesktop_bioContent" type="text" placeholder="À propos de moi"  autofocus />
                </div>
            </div>
        </div>
             <button onClick={this.registerDesktop} className="homeDesktop_inscriptionBtn">Suivant</button>
    </div>
        </div>);

    return (

        <Page className="LoginPage">

            <Modal
                isOpen={this.state.modalIsOpen}
            >
                <div className="LoginPage_modal">
                    <p className="LoginPage_modal_p">
                        Ecrivez votre email
                    </p>
                    <input type="text" placeholder="Email"/>
                    <p>
                        <button onClick={this.closeModal}>
                            Envoyer
                        </button>
                    </p>
                </div>
            </Modal>
            <MediaQuery query="(max-width: 420px)">
            <ReactSwipe className="LoginPage_carousel" swipeOptions={{
                continuous: false,
                speed: 400,
                transitionEnd: function(index, elem) {
                   setIndex(index)
                }
            }} key={3}>
                <div>
                    <div className="LoginPage_carousel_textLogin">
                            <p className="LoginPage_carousel_textLogin_textLoginContainer">
                                Bienvenue sur StarDate <br/>
                                le <span>1er site de rencontre <br/>
                                intergalactique.</span>
                        </p>
                    </div>
                    <img src={planet} alt="logo" className="LoginPage_carousel_planet"/>
                    <img src={logo} alt="logo" className="LoginPage_carousel_logo"/>
                    <img src={stars1} alt="logo" className="LoginPage_carousel_stars1"/>
                    <img src={stars2} alt="logo" className="LoginPage_carousel_stars2"/>
                </div>

                <div className="LoginPage_carousel_div">
                    <div className="LoginPage_carousel_textLogin">
                        <p className="LoginPage_carousel_textLogin_textLoginContainer">
                        Découvrez des profiles
                        <br/>
                      <span>
                          dans tous l’univers.
                          </span>
                        </p>
                    </div>
                    <img src={placeholder} alt="logo" className="LoginPage_carousel_div_img2"/>
                </div>
                <div className="LoginPage_carousel_div">
                    <div className="LoginPage_carousel_textLogin">
                        <p className="LoginPage_carousel_textLogin_textLoginContainer">
                        Trouvez celui qui <br/>
                            <span>vous complète.</span>
                        </p>
                    </div>
                    <img src={placeholder2} alt="logo" className="LoginPage_carousel_div_img3"/>
                </div>
            </ReactSwipe>
            <div className="LoginPage_index">
            {renderSwitch(this.state.index)}
            </div>


            <div className="containerLogin">
                <div className="containerLogin_formLogin">
                    <input onChange={this.emailChange} type="email" name="email" id="email" placeholder="Email"/>
                    <input onChange={this.passwordChange} type="password" name="password" id="password" placeholder="Mot de passe"/>
                    <div className="containerLogin_params">
                        <div className="containerLogin_params_checkbox">
                        <input
                            name="ResterConnecter"
                            type="checkbox"
                            checked={this.state.ResterConnecter}
                            onChange={this.handleInputChange} />
                        <p> Rester connecté </p>
                        </div>
                        <p onClick={this.openModal}> Mot de passe oublié ? </p>
                    </div>

                    <div className="containerLogin_formLogin_buttons">
                    <button className="containerLogin_formLogin_buttons_create" onClick={this.pushPageInscription}>Créer un compte</button>
                    <button className="containerLogin_formLogin_buttons_connect" onClick={this.loginAction}>Se connecter </button>
                    </div>

                </div>
            </div>
            </MediaQuery>
            {/* Desktop home */}
            <MediaQuery query="(min-width: 421px)">
            {/* Header */}
            <div className="homeDesktop">
            <div className="homeDesktop_inputContainer">
                 <img src={logo} alt="logo" className="homeDesktop_logo" />
                 <div className="homeDesktop_container">
                   <input onChange={this.emailChange} className="homeDesktop_inputItem" type="email" name="email" id="email" placeholder="Email" />
                   <input onChange={this.passwordChange} className="homeDesktop_inputItem" type="password" name="password" id="password" placeholder="Mot de passe" />
                   <button className="homeDesktop_btnConnexion" onClick={this.loginActionDesktop}>Se connecter</button>
                   <div className="homeDesktop_forgottenContainer">
                       <p onClick={this.openModal} className="homeDesktop_forgotten">Mot de passe oublié ?</p>
                   </div>
                </div>
            </div>
            {/* Homepage Content */}
                    <div className="homeDesktop_bigContainer">
                {/* Homepage Content left side  */}
                        <div className="homeDesktop_textContainer">
                            <p className="homeDesktop_textTitle">
                                Bienvenue sur Star Date <br />
                                le <span className="homeDesktop_coloriage">1er site de rencontre <br />
                                    intergalactique.</span>
                            </p>
                        <img src={planet} alt="logo" className="homeDesktop_planet" />
                        <img src={stars1} alt="logo" className="homeDesktop_stars1" />
                        <img src={stars2} alt="logo" className="homeDesktop_stars2" />
                        </div>
                        {showContent()}
                      </div>
                 </div>
                 {/* Homepage content left side step 3 */}

            </MediaQuery>

      </Page>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        // getLogint: state.email,state.password
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (email) => {
            dispatch(getLoginAction(email))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
