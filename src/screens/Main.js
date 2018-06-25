import React, { Component } from 'react';
import '../style/Main.css';
import { Page, Toolbar, Tab, Tabbar, SplitterSide, Splitter, SplitterContent, List, ListItem } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Home from './Home'
import Profile from './Profile'
import Chat from './Chat'
// import MediaQuery from 'react-responsive'

import mask1 from '../icons/mask1.svg';
import mask2 from '../icons/mask2.svg';
import mask3 from '../icons/mask3.svg';
import mask4 from '../icons/mask4.svg';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: null,
            index: 1
        };
        this.renderTabs = this.renderTabs.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        let that = this;
        setTimeout(function() {
            that.setState({
                display: true
            })
        }, 2000)
    }


    renderTabs() {
        //  console.log('renderTabs')
        return [
            {
                content: (
                    <Profile nav={this.props.navigator} />
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
                    <Home nav={this.props.navigator}/>
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
        const tabDisplay = (
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
        );

        const loading = (
            <div className="MainPage_loading">
            <img src={mask1} className="MainPage_loading_mask1"/>
            <img src={mask2} className="MainPage_loading_mask2"/>
            <img src={mask3} className="MainPage_loading_mask3"/>
            <img src={mask4} className="MainPage_loading_mask4"/>
            </div>
        );

        return (
                <Page key="MainPage" className="MainPage">

                    {this.state.display ? tabDisplay: loading}
                </Page>
        );
    }
}

export default Main;
