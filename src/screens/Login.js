import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import Main from './Main'

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
        <Page>
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>

          <p onClick={this.pushPage}>
              connection
          </p>

      </Page>
    );
  }
}

export default Login;
