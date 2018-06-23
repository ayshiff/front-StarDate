import React, {Component} from 'react';
import '../style/Inscription.css';
import iconInscription from '../icons/iconInscription.png';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import arrow from '../icons/arrow.svg';
import ReactSwipe from 'react-swipe';

class Inscription extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        };
        this.backPage = this.backPage.bind(this);
        this.next = this.next.bind(this);
    }

    backPage() {
        if(this.state.index === 0) {
            this.props.navigator.popPage();
        } else {
            this.prev()
        }

    }

    next() {
        this.reactSwipe.next();
    }

    prev() {
        this.reactSwipe.prev();
    }

    render() {
        let that = this
        function setIndex(index) {
            that.setState({
                index
            })
        }
        return (
            <Page key="InscriptionPage" className="InscriptionPage">
                <svg onClick={this.backPage} className="InscriptionPage_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                <ReactSwipe
                    swipeOptions={{disableScroll: true, speed: 700,transitionEnd: function(index, elem) {
                            setIndex(index)
                        }}}
                    ref={reactSwipe => this.reactSwipe = reactSwipe}
                    className="InscriptionPage_swipe">
                    <div>
                <h3 className="InscriptionPage_title">Remplir les informations</h3>
            <div className="InscriptionPage_containerInscription">
                <form action="" method="post" className="InscriptionPage_containerInscription_formInscription">
                <div className="InscriptionPage_containerInscription_formInscription_flexName">
                <input type="text" name="email" id="nom" placeholder="Nom"/>
                <input type="text" name="email" id="prenom" placeholder="Prénom"/>
            </div>
                <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="date" name="date" id="date" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Mot de passe"/>
                <input type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe"/>
                </form>
            </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title">Remplir les informations</h3>
                        <div className="InscriptionPage_containerInscription">
                            <form action="" method="post" className="InscriptionPage_containerInscription_formInscription">
                                <div className="InscriptionPage_containerInscription_formInscription_flexName">
                                    <input type="text" name="email" id="nom" placeholder="Nom"/>
                                    <input type="text" name="email" id="prenom" placeholder="Prénom"/>
                                </div>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                                <input type="date" name="date" id="date" placeholder="Email"/>
                                <input type="password" name="password" id="password" placeholder="Mot de passe"/>
                                <input type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe"/>
                            </form>
                        </div>
                    </div>
                </ReactSwipe>
            <img onClick={this.next} src={iconInscription} alt="NextStep" className="InscriptionPage_icon"/>
            </Page>
        )
    }
}

export default Inscription