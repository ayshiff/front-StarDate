import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
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


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.pushPage = this.pushPage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    pushPage(e) {
        e.preventDefault();
        this.props.navigator.pushPage({component: Main})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



  render() {
        let that = this;
      function setIndex(index) {
          that.setState({
              index
          });
      }
    function renderSwitch(index) {
        switch (index) {
            case 0 :
                return (
                    <div className="LoginPage_index">
                        <img src={OvalToggle} alt="oval" className="oval0"/>
                        <img src={oval} alt="oval" className="oval1"/>
                        <img src={oval} alt="oval" className="oval2"/>
                    </div>
                );
            case 1:
                return (
                    <div className="LoginPage_index">
                        <img src={oval} alt="oval" className="oval0"/>
                        <img src={OvalToggle} alt="oval" className="oval1"/>
                        <img src={oval} alt="oval" className="oval2"/>
                    </div>
                );
            case 2:
                return (
                    <div className="LoginPage_index">
                        <img src={oval} alt="oval" className="oval0"/>
                        <img src={oval} alt="oval" className="oval1"/>
                        <img src={OvalToggle} alt="oval" className="oval2"/>
                    </div>
                )
        }
    }
    return (
        <Page className="LoginPage">
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
                        Découvrez des profiles <br/>
                            <span>dans tous l’univers.</span>
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

            <div>

            </div>

            {renderSwitch(this.state.index)}
            <div className="containerLogin">
                <form action="" method="post" className="containerLogin_formLogin">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <div className="containerLogin_params">
                        <div className="containerLogin_params_checkbox">
                        <input
                            name="ResterConnecter"
                            type="checkbox"
                            checked={this.state.ResterConnecter}
                            onChange={this.handleInputChange} />
                        <p> Rester connecté </p>
                        </div>
                        <p> Mot de passe oublié ? </p>
                    </div>
                    <div className="containerLogin_formLogin_buttons">
                    <button className="containerLogin_formLogin_buttons_create" type="submit" onClick={this.pushPage}>Créer un compte</button><button className="containerLogin_formLogin_buttons_connect" type="submit">Se connecter </button>
                    </div>
                </form>
            </div>


      </Page>
    );
  }
}

export default Login;
