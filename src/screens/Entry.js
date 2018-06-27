import React, { Component } from 'react';
import Login from './Login';
import { store } from "../redux/reducers";
import {Provider} from 'react-redux';
import { Navigator } from 'react-onsenui';
import MediaQuery from 'react-responsive';
import * as firebase from 'firebase'
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom'
import Home from './Home';
import Profile from './Profile';


class Entry extends Component {
    constructor(props) {
        super(props);
    }


    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;

        return React.createElement(route.component, props);
    }

    render() {
        return (
            <div>
                <MediaQuery query="(min-width: 421px)">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Login}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/profile' component={Profile}/>
                        </Switch>
                    </BrowserRouter>
                </MediaQuery>

                <MediaQuery query="(max-width: 420px)">
                    <Navigator
                        key={"Navigator"}
                        animation='slide'
                        initialRoute={{ component: Login }}
                        renderPage={this.renderPage}
                    />
                </MediaQuery>
            </div>
        );
    }
}

export default Entry;
