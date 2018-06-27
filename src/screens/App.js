import React, { Component } from 'react';
import Login from './Login';
import { store } from "../redux/reducers";
import {Provider} from 'react-redux';
import { Navigator } from 'react-onsenui';
import MediaQuery from 'react-responsive';
import * as firebase from 'firebase'
import Entry from './Entry';



class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        };
        firebase.initializeApp(config);
    }

  render() {
    return (
        <Provider store={store}>
           <Entry/>
        </Provider>
    );
  }
}

export default App;
