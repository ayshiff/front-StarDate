import React, { Component } from 'react';
import Login from './Login';
import { store } from "../redux/reducers";
import {Provider} from 'react-redux';
import { Navigator } from 'react-onsenui';
import MediaQuery from 'react-responsive';
// import * as firebase from 'firebase'



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
        // firebase.initializeApp(config);
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
