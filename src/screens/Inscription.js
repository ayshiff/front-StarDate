import React, {Component} from 'react';
import '../style/Inscription.css';
import arrowRight from '../icons/arrowRight.svg';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import arrow from '../icons/arrow.svg';
import ReactSwipe from 'react-swipe';
import OvalToggle from '../icons/OvalToggle.svg';
import oval from '../icons/oval.svg';
import female from '../icons/female.svg';
import male from '../icons/male.svg';
import both from '../icons/both.svg';
import Main from './Main';
import * as firebase from 'firebase'
import axios from 'axios';
import {getLoginAction} from "../redux/action";
import {connect} from "react-redux";

class Inscription extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            userSearch: null,
            userState: null,
            userGalaxie: null,
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            age: null,
            bio: "",
            image: null,
            fetch: true

        };
        this.backPage = this.backPage.bind(this);
        this.next = this.next.bind(this);
        this.onItemClickSearch = this.onItemClickSearch.bind(this)
        this.onItemClickState = this.onItemClickState.bind(this)
        this.onItemClick = this.onItemClick.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.bioChange = this.bioChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.passwordConfirmChange = this.passwordConfirmChange.bind(this)
        this.ageChange = this.ageChange.bind(this)
        this.register = this.register.bind(this)
        this.handleChangePlanete = this.handleChangePlanete.bind(this);
        this.handleChangeEspece = this.handleChangeEspece.bind(this);
        this.fetchPositions = this.fetchPositions.bind(this);
        this.fetchRaces = this.fetchRaces.bind(this);
        this.fetchSectors = this.fetchSectors.bind(this);
    }

    register(){
        let that = this;
        let data = JSON.stringify({
            name: that.state.name,
            email: that.state.email,
            password: that.state.password,
            position: '/api/positions/1',
            race: '/api/races/1',
            description: that.state.bio,
            gender: that.state.userState,
            searchGender: that.state.userSearch,
            image: that.state.image,
            age: 12
        });
        console.log(data)

                    axios.post('http://localhost:8000/api/users',
                            data
                    ,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
                        .then(function (response) {
                            firebase.auth().createUserWithEmailAndPassword(that.state.email, that.state.password)
                                .then(function(e) {
                                    that.props.onSubmit(that.state.email);
                                    that.props.navigator.pushPage({component: Main})
                                })
                                .catch(function(error){
                                    console.log(error.code + '' + error.message)
                            });
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error.response);
                        });

        }

    backPage() {
        if(this.state.index === 0) {
            this.props.navigator.popPage();
        } else {
            this.prev()
        }
    }

    emailChange (event) {
        this.setState({
            email : event.target.value
        })
    }

    bioChange (event) {
        this.setState({
            bio : event.target.value
        })
    }

    passwordChange (event) {
        this.setState({
            password : event.target.value
        })
    }

    passwordConfirmChange (event) {
        this.setState({
            passwordConfirm : event.target.value
        })
    }

    ageChange (event) {
        this.setState({
            age : event.target.value
        })
    }

   nameChange (event) {
        this.setState({
            name : event.target.value
        })
    }

    handleChangeEspece(e){
        this.setState({espece:e.target.value});
    }

    handleChangePlanete(e){
        this.setState({planete:e.target.value});
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
        if(event.currentTarget.style.backgroundColor === "rgb(237, 90, 90)" ) {
            event.currentTarget.style.backgroundColor = "white"
            this.setState({
                userGalaxie: null
            })
        } else if (event.currentTarget.style.backgroundColor !== "rgb(237, 90, 90)" && this.state.userGalaxie === null) {
            event.currentTarget.style.backgroundColor = "rgb(237, 90, 90)"
            this.setState({
                userGalaxie: event.currentTarget.id,
            })
        }
    }

    fetchRaces() {
        let tab = []
        axios.get('http://localhost:8000/api/races')
            .then(function (response) {
                console.log(response);
                response.data['hydra:member'].map(function (e) {
                    tab.push(e)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            tabRaces: tab
        })
    }

    fetchPositions() {
        let tab = []
        axios.get('http://localhost:8000/api/positions')
            .then(function (response) {
                console.log(response);
                response.data['hydra:member'].map(function (e) {
                    tab.push(e)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            tabPositions: tab
        })

    }

    fetchSectors() {
        let tab = []
        axios.get('http://localhost:8000/api/sectors')
            .then(function (response) {
                console.log(response);
                response.data['hydra:member'].map(function (e) {
                    tab.push(e)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            tabSectors: tab
        })
    }


    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(e.target.files[0])
        reader.onloadend = () => {
            this.setState({
                image: file.name,
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    next() {
        if(this.state.index === 3) {
            this.register();
        } else {
            this.reactSwipe.next();
        }
    }

    prev() {
        this.reactSwipe.prev();
    }

    componentWillMount() {
        this.fetchSectors();
        this.fetchRaces();
        this.fetchPositions();
    }

    render() {
        let that = this
        function setIndex(index) {
            that.setState({
                index
            })
        }

        function renderSwitch(index) {
            let tab = [];

            for(let i = 0; i<4;i++) {
                let classe = "oval"+i;
                if(index === i) {
                    tab.push(<img key={i} src={OvalToggle} alt="oval" className={classe} />)
                } else {
                    tab.push(<img key={i} src={oval} alt="oval" className={classe}/>)
                }

            }
            return tab
        }

        var style = {
            backgroundImage: 'url(' + this.state.imagePreviewUrl + ') !important',
        };

        let renderSectors = this.state.tabSectors.map((e) => (
            <div id={e.name} onClick={that.onItemClick} className="InscriptionPage_containerInscription3_div">
                <h1 className="InscriptionPage_containerInscription3_div_title">{e.name}</h1>
            </div>
        ));

        let renderRaces = this.state.tabRaces.map((e) => (
            <option value={e.name}>{e.name}</option>
        ));

        let renderPositions = this.state.tabPositions.map((e) => (
            <option value={e.name}>{e.name}</option>
        ));

        return (
            <Page key="InscriptionPage" className="InscriptionPage">
                <svg onClick={this.backPage} className="InscriptionPage_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                <ReactSwipe
                    swipeOptions={{disableScroll: true,continuous: false, speed: 700,transitionEnd: function(index, elem) {
                            setIndex(index)
                        }}}
                    ref={reactSwipe => this.reactSwipe = reactSwipe}>
                    <div>
                <h3 className="InscriptionPage_title">Remplir les informations</h3>
            <div className="InscriptionPage_containerInscription">
                <form action="" method="post" className="InscriptionPage_containerInscription_formInscription">
                <input onChange={this.nameChange} type="text" name="email" id="nom" placeholder="Nom*"/>
                <input onChange={this.emailChange} type="email" name="email" id="email" placeholder="Email*"/>
                    <input onChange={this.ageChange} type="number" name="date" id="date" placeholder="Age*"/>
                <input onChange={this.passwordChange} type="password" name="password" id="password" placeholder="Mot de passe*"/>
                <input onChange={this.passwordConfirmChange} type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe*"/>
                </form>
            </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title2"> Vous êtes ? </h3>
                        <div className="InscriptionPage_containerInscription2">
                        <div id="female" onClick={this.onItemClickState} className="InscriptionPage_containerInscription2_div">
                            <img src={male} alt="logoFemale" className="InscriptionPage_containerInscription2_logo"/>
                        </div>
                        <div id="male" onClick={this.onItemClickState} className="InscriptionPage_containerInscription2_div">
                            <img src={female} alt="logoMale" className="InscriptionPage_containerInscription2_logo"/>
                        </div>
                        <div id="other" onClick={this.onItemClickState} className="InscriptionPage_containerInscription2_div">
                            <h2 className="InscriptionPage_containerInscription2_div_other"> Autre </h2>
                        </div>
                        </div>
                        <h3 className="InscriptionPage_title2"> Vous recherchez ? </h3>
                    <div className="InscriptionPage_containerInscription2">
                        <div className="InscriptionPage_containerInscription2">
                            <div id="female" onClick={this.onItemClickSearch} className="InscriptionPage_containerInscription2_div">
                                <img src={male} alt="logoFemale" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                            <div id="male" onClick={this.onItemClickSearch} className="InscriptionPage_containerInscription2_div">
                                <img src={female} alt="logoMale" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                            <div id="other" onClick={this.onItemClickSearch} className="InscriptionPage_containerInscription2_div">
                                <img src={both} alt="logoAutre" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title"> Sélectionnez votre galaxie </h3>
                        <div className="InscriptionPage_containerInscription3">
                            {renderSectors}
                        </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title"> Dites nous en plus </h3>
                        <div className="InscriptionPage_containerInscription4">
                        <div style={style} className="InscriptionPage_containerInscription4_pic">
                            {this.state.file ? <img src={this.state.imagePreviewUrl} />: null}

                            <input type="file" accept="image/*" capture="camera" onChange={(e) => this._handleImageChange(e)} />
                        </div>
                        <select onChange={this.handleChangeEspece} className="InscriptionPage_containerInscription4_espece">
                        <option value="" selected disabled hidden>Votre espece</option>
                            {renderRaces}
                        </select>
                            <select onChange={this.handleChangePlanete} className="InscriptionPage_containerInscription4_planete">
                                <option value="" selected disabled hidden>Votre planète</option>
                                {renderPositions}
                            </select>
                        <div className="InscriptionPage_containerInscription4_Bio">
                        <textarea onChange={this.bioChange} placeholder="Bio" rows="4" cols="50">
                            
                        </textarea>
                            </div>
                        </div>
                    </div>
                </ReactSwipe>
            <img onClick={this.next} src={arrowRight} alt="NextStep" className="InscriptionPage_icon"/>
                <div className="LoginPage_index" style={{marginTop: '30px'}}>
                    {renderSwitch(this.state.index)}
                </div>
            </Page>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //email: state.email,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (email) => {
            dispatch(getLoginAction(email))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Inscription)