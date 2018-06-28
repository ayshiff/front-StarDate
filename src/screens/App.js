import React, { Component } from "react";
import Login from "./Login";
import { store } from "../redux/reducers";
import { Provider } from "react-redux";
import { Navigator } from "react-onsenui";
import MediaQuery from "react-responsive";
import * as firebase from "firebase";
import Entry from "./Entry";
import config from "../config";

class App extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Entry />
      </Provider>
    );
  }
}

export default App;
