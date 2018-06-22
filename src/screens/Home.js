import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import '../style/Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }

  render() {
    return (
        <Page className="HomePage">
          <ReactSwipe className="HomePage_carousel" swipeOptions={{
                startSlide: 1,
                continuous: true,
                speed: 700
            }} key={3}>
            <div class="HomePage_carousel1" style={{color: "white", height: '80vh'}}></div>
            <div class="HomePage_carousel2" style={{color: "white", height: '80vh'}}></div>
            <div class="HomePage_carousel3" style={{color: "white", height: '80vh'}}></div>

            </ReactSwipe>
      </Page>
    );
  }
}

export default Home;
