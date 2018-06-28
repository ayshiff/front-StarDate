import React, { Component } from "react";
import { Page } from "react-onsenui";
import "../style/Chat.css";
import "../style/ChatHome.css";
import "../style/Home.css";
import profilePic from "../icons/profilePic.png";
import * as firebase from "firebase";
import _ from "lodash";
import { store } from "../redux/reducers";
import MediaQuery from "react-responsive";
import axios from "axios/index";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesFolder = importAll(
  require.context("../img", false, /\.(png|jpg|svg)$/)
);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageReceived: [],
      email: store.getState().getLogin.email,
      id: this.props.match ? this.props.match.params.id : null
    };
    let app = firebase.database().ref("messages");
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
    this.disconnect = this.disconnect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
  }

  componentWillMount() {
    let that = this;
    let app = firebase.database().ref("messages");
    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });
    if (this.state.id) {
      axios
        .get("http://localhost:8000/api/users")
        .then(function(response) {
          let respon = response.data["hydra:member"].find(e => {
            return e.id == that.state.id;
          });
          axios
            .get("http://localhost:8000" + respon.position)
            .then(function(e) {
              that.setState({
                position: e.data.name,
                name: respon.name,
                age: respon.age,
                email: respon.email,
                description: respon.description,
                image: respon.image
              });
            })
            .catch(error => console.log(error));
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:8000/api/users")
        .then(function(response) {
          let respon = response.data["hydra:member"].find(e => {
            return e.email == that.state.email;
          });
          axios
            .get("http://localhost:8000" + respon.position)
            .then(function(e) {
              that.setState({
                position: e.data.name,
                name: respon.name,
                age: respon.age,
                email: respon.email,
                description: respon.description,
                image: respon.image
              });
            })
            .catch(error => console.log(error));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messageReceived: messages
    });
  }

  disconnect() {
    this.props.navigator.popPage();
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  onKeyup(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      e.preventDefault();
      let dbCon = firebase.database().ref("/messages");
      dbCon.push({
        message: e.target.value,
        email: this.state.email,
        image: this.state.image
      });
      this.setState({
        message: ""
      });
    }
  }

  render() {
    let messageNodes = this.state.messageReceived.map(message => {
      if (this.state.id !== null) {
        console.log(message.email);
        if (message.email === this.state.email) {
          return (
            <div className="ChatPageDesktop_conv_read_send">
              <p className="ChatPageDesktop_conv_read_send_message">
                {message.message}
              </p>
              <img
                src={imagesFolder[this.state.image]}
                alt="profilePic"
                className="ChatPageDesktop_conv_read_send_pic"
              />
            </div>
          );
        } else {
          return (
            <div className="ChatPageDesktop_conv_read_received">
              <img
                src={imagesFolder[message.image]}
                alt="profilePic"
                className="ChatPageDesktop_conv_read_received_pic"
              />
              <p className="ChatPageDesktop_conv_read_received_message">
                {message.message}
              </p>
            </div>
          );
        }
      } else {
        if (message.email === this.state.email) {
          return (
            <div className="ChatPageDesktop_conv_read_send">
              <p className="ChatPageDesktop_conv_read_send_message">
                {message.message}
              </p>
              <img
                src={imagesFolder[this.state.image]}
                alt="profilePic"
                className="ChatPageDesktop_conv_read_send_pic"
              />
            </div>
          );
        } else {
          return (
            <div className="ChatPageDesktop_conv_read_received">
              <img
                src={imagesFolder[message.image]}
                alt="profilePic"
                className="ChatPageDesktop_conv_read_received_pic"
              />
              <p className="ChatPageDesktop_conv_read_received_message">
                {message.message}
              </p>
            </div>
          );
        }
      }
    });

    return (
      <Page key="ChatPage" className="Chat">
        <MediaQuery query="(max-width: 420px)">
          <svg
            style={{ position: "fixed", zIndex: 50 }}
            onClick={this.disconnect}
            className="Chat_arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>
          {messageNodes}
          <form>
            <textarea
              className="Chat_input"
              placeholder="Type a message"
              cols="100"
              onChange={this.onChange}
              onKeyUp={this.onKeyup.bind(this)}
              value={this.state.message}
            />
          </form>
        </MediaQuery>

        <MediaQuery query="(min-width: 421px)">
          <div className="ChatPageDesktop">
            <div className="HomePageDesktop_sideBar">
              <img
                className="HomePageDesktop_sideBar_profilePic"
                src={imagesFolder[this.state.image]}
                alt="profilePic"
              />
              <div className="HomePageDesktop_sideBar_nav">
                <div className="HomePageDesktop_sideBar_items">
                  <svg
                    className="HomePageDesktop_sideBar_items_icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    width="35"
                    height="28"
                  >
                    <path
                      fill="rgba(204,204,206,0.46)"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                    />
                  </svg>
                  <a
                    className="HomePageDesktop_sideBar_items_links"
                    href={"/profile/" + this.state.id}
                  >
                    Profil
                  </a>
                </div>
                <div className="HomePageDesktop_sideBar_items">
                  <svg
                    className="HomePageDesktop_sideBar_items_icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="35"
                    height="28"
                  >
                    <path
                      fill="rgba(204,204,206,0.46)"
                      d="M576 56.015v335.97a23.998 23.998 0 0 1-13.267 21.466l-128 64C418.948 485.344 400 473.992 400 455.985v-335.97a23.998 23.998 0 0 1 13.267-21.466l128-64C557.052 26.656 576 38.008 576 56.015zm-206.253 42.07l-144-64c-15.751-7-33.747 4.461-33.747 21.932v335.967a24 24 0 0 0 14.253 21.931l144 64c15.751 7 33.747-4.461 33.747-21.931V120.017a24 24 0 0 0-14.253-21.932zm-228.48-63.536l-128 63.985A23.998 23.998 0 0 0 0 120v335.985c0 18.007 18.948 29.359 34.733 21.466l128-63.985A23.998 23.998 0 0 0 176 392V56.015c0-18.007-18.948-29.359-34.733-21.466z"
                    />
                  </svg>
                  <a
                    className="HomePageDesktop_sideBar_items_links"
                    href={"/home/" + this.state.id}
                  >
                    Carte
                  </a>
                </div>
                <div className="HomePageDesktop_sideBar_items">
                  <svg
                    className="HomePageDesktop_sideBar_items_icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="35"
                    height="28"
                  >
                    <path
                      fill="#F04240"
                      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                    />
                  </svg>
                  <a
                    className="HomePageDesktop_sideBar_items_links"
                    href={"/chat/" + this.state.id}
                  >
                    <span className="HomePageDesktop_sideBar_items_span">
                      Message
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ChatPageDesktop_contact">
              <div className="ChatPageDesktop_contact_container">
                <div className="ChatPageDesktop_contact_card">
                  <div className="ChatPageDesktop_contact_card_notif" />
                  <img
                    src={profilePic}
                    alt="profilePic"
                    className="ChatPageDesktop_contact_card_pic"
                  />
                  <div className="ChatPageDesktop_contact_card_contents">
                    <p className="ChatPageDesktop_contact_card_contents_cardName">
                      Johnny
                    </p>
                    <p className="ChatPageDesktop_contact_card_contents_lastMessage">
                      On est champion !!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ChatPageDesktop_conv">
              <div className="ChatPageDesktop_conv_read">
                <div className="ChatPageDesktop_conv_read_contents">
                  {messageNodes}
                </div>
              </div>
              <div className="ChatPageDesktop_conv_sendingZone">
                <form>
                  <textarea
                    className="ChatPageDesktop_conv_sendingZone_input"
                    placeholder="Nouveau Message"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyup.bind(this)}
                    value={this.state.message}
                  />
                </form>
              </div>
            </div>
          </div>
        </MediaQuery>
      </Page>
    );
  }
}

export default Chat;
