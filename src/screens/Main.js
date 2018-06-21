import React, { Component } from 'react';
import '../style/Main.css';
import { Page, Toolbar, Tab, Tabbar, SplitterSide, Splitter, SplitterContent, List, ListItem } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import ReactSwipe from 'react-swipe';
import 'onsenui/css/onsen-css-components.css';
import Home from './Home'
import Profile from './Profile'
import Chat from './Chat'
import MediaQuery from 'react-responsive'

class Main extends Component {

    constructor() {
        super();
        this.state = {
            index: 1
        };
        this.renderTabs = this.renderTabs.bind(this);
    }


    renderTabs() {
        //  console.log('renderTabs')
        return [
            {
                content: (
                    <Profile />
                ),
                tab: (
                    <Tab
                        className="Profile"
                        icon="fa-user-circle"
                    />
                )
            },
            {
                content: (
                    <Home/>
                ),
                tab: (
                    <Tab
                        className="TabP"
                        icon="fa-map"
                    />
                )
            },
            {
                content: (
                    <Chat />
                ),
                tab: (
                    <Tab
                        className="Chat"
                        icon="fa-comment"
                    />
                )
            }
        ];
    }


    pushPageComponent (page) {
        this.props.navigator.pushPage({ component: page })
    }

    render() {
        return (
            <MediaQuery query="(max-device-width: 400px)">
                <Page>
                    <Tabbar
                        autogrow
                        swipeable={false}
                        style={{color: '#686868'}}
                        position='bottom'
                        index={this.state.index}
                        tabBorder={false}
                        onPreChange={(event) => {
                            if (event.index != this.state.index) {
                                this.setState({ index: event.index });
                            }
                        }
                        }
                        renderTabs={this.renderTabs}
                    />
                </Page>
            </MediaQuery>
        );
    }
}

export default Main;
