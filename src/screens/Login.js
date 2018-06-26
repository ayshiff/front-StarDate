import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar, Modal, Button } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import Main from './Main'
import '../style/Login.css'
import logo from '../icons/logo.png';
import planet from '../icons/planet.png';
import stars1 from '../icons/stars1.png';
import stars2 from '../icons/stars2.png';
import placeholder from '../icons/placeholder.png';
import placeholder2 from '../icons/placeholder2.png';
import oval from '../icons/oval.png';
import OvalToggle from '../icons/OvalToggle.png';
import Inscription from './Inscription';
import * as firebase from 'firebase'
import MediaQuery from 'react-responsive';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            modalIsOpen: false,
            error: null
        };
        this.pushPageMain = this.pushPageMain.bind(this);
        this.pushPageInscription = this.pushPageInscription.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.loginAction = this.loginAction.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
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

    loginAction (){

        let that = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
            console.log(user);
            that.pushPageMain()
        }).catch(error => {
            // console.log(error.code +''+ error.message)
            console.log(error.message);
            that.setState({
                error: error.code // ou error.message
            })
        })
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
    return (
        
        <Page className="LoginPage">
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
                                Bienvenue sur Star Date <br/>
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
            </MediaQuery>

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
            {/* Desktop home */}
            <MediaQuery query="(min-width: 421px)">
            {/* Header */}
            <header className="homeDesktop">
            <div className="homeDesktop_inputContainer">
                 <img src={logo} alt="logo" className="homeDesktop_logo" />    
                 <div>
                 <div className="homeDesktop_container">
                   <input className="homeDesktop_inputItem" type="email" name="email" id="email" placeholder="Email" />
                   <input className="homeDesktop_inputItem" type="password" name="password" id="password" placeholder="Mot de passe" />
                   <button className="homeDesktop_btnConnexion">Se connecter</button>
                   <div className="homeDesktop_forgottenContainer">
                       <p className="homeDesktop_forgotten">Mot de passe oublié ?</p>
                   </div>
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
                       {/* Homepage content right side */}
                        <div className="homeDesktop_inscriptionContainer">
                            <h3 className="homeDesktop_createAccount">Créez vous <span className="homeDesktop_coloriage">un compte </span></h3>
                            <div className="homeDesktop_containerInscription">
                                <form action="" method="post" className="homeDesktop_formInscription">
                                    <div className="homeDesktop_flexName">
                                        <input className="homeDesktop_inputItemForm" type="text" name="email" id="nom" placeholder="Nom*" />
                                    </div>
                                    <input className="homeDesktop_inputItemForm" type="email" name="email" id="email" placeholder="Email*" />
                                    <input className="homeDesktop_inputItemForm" type="number" name="age" id="age" placeholder="age*" />
                                    <input className="homeDesktop_inputItemForm" type="password" name="password" id="password" placeholder="Mot de passe*" />
                                    <input className="homeDesktop_inputItemForm" type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe*" />
                                    <button className="homeDesktop_inscriptionBtn">S'inscrire</button>
                                </form>
                            </div>
                        </div>
                    </div>


            </header>
            </MediaQuery>

      </Page>
    );
  }
}

export default Login;
