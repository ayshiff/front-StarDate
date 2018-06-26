import React, { Component } from 'react';
import Login from './Login';
import { store } from "../redux/reducers";
import {Provider} from 'react-redux';
import { Navigator } from 'react-onsenui';
import MediaQuery from 'react-responsive';
import * as firebase from 'firebase'


class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyBPdT5YJUKo7YK6syefbwUfeCIEbYTPjLM",
            authDomain: "stardate-4dde0.firebaseapp.com",
            databaseURL: "https://stardate-4dde0.firebaseio.com",
            projectId: "stardate-4dde0",
            storageBucket: "stardate-4dde0.appspot.com",
            messagingSenderId: "833648798423"
        };
        firebase.initializeApp(config);
    }


    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;

        return React.createElement(route.component, props);
    }

  render() {
    return (
        <Provider store={store}>
            <Navigator
                key={"Navigator"}
                animation='slide'
                initialRoute={{ component: Login }}
                renderPage={this.renderPage}
            />
        </Provider>
    );
  }
}

export default App;
