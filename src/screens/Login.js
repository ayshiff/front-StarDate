import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import Main from './Main'
import '../style/Login.css'
import logo from '../icons/logo.png';
import planet from '../icons/planet.png';
import stars1 from '../icons/stars1.png';
import stars2 from '../icons/stars2.png';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.pushPage = this.pushPage.bind(this);
    }

    pushPage() {
        this.props.navigator.pushPage({component: Main})
    }

  render() {
    return (
        <Page className="LoginPage">
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>
                    <p className="textLogin">
                            <div className="textLoginContainer">
                                Bienvenue sur Star Date <br/>
                                le <span>1er site de rencontre <br/>
                                intergalactique.</span>
                        </div>

                    </p>
                    <img src={planet} alt="logo" className="planet"/>
                    <img src={logo} alt="logo" className="logo"/>
                    <img src={stars1} alt="logo" className="stars1"/>
                    <img src={stars2} alt="logo" className="stars2"/>
                </div>
                <div>
                    <p className="textLogin">
                        <div className="textLoginContainer">
                        Découvrez des profiles <br/>
                        dans tous l’univers.
                        </div>
                    </p>
                </div>
                <div>
                    <p className="textLogin">
                        <div className="textLoginContainer">
                        Trouvez celui qui <br/>
                        vous complète.
                        </div>
                    </p>
                </div>
            </ReactSwipe>

            <div>

            </div>


            <div className="containerLogin">
                <form action="" method="post" className="formLogin">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <input type="submit" value="Se connecter"/>
                </form>
                <p onClick={this.pushPage}>
                    Se connecter
                </p>
            </div>


      </Page>
    );
  }
}

export default Login;
