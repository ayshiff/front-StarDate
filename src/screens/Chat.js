import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/Chat.css';
import '../style/Home.css';
import profilePic from '../icons/profilePic.png';
import * as firebase from 'firebase'
import _ from 'lodash';
import {store} from '../redux/reducers';

class Chat extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: "",
            messageReceived: [],
            emailUser: store.getState().getLogin.email
        };
        let app = firebase.database().ref('messages');
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
        this.disconnect = this.disconnect.bind(this)
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
    }

    componentWillMount() {
        let app = firebase.database().ref('messages');
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
    }

    getData(values){
        console.log('getData')
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

    disconnect () {
        this.props.navigator.popPage();
    }

    onChange(e){
        this.setState({
            message: e.target.value
        });
    }
    onKeyup(e){
        if(e.keyCode === 13 && e.target.value !== ''){
            e.preventDefault();
            let dbCon = firebase.database().ref('/messages');
            dbCon.push({
                message: e.target.value,
                email: store.getState().getLogin.email
            });
            this.setState({
                message: ''
            });
        }
    }

    render() {
        let messageNodes = this.state.messageReceived.map((message) => {
            if(message.email === this.state.emailUser){
                return (
                    <div key={message.email} className="Chat_message_user">
                        <div className="card-content">
                            <p>{message.email}</p>
                            <p>{message.message}</p>
                        </div>
                    </div>
                )
            } else {
                return(
                    <div key={message.email} className="Chat_message">
                        <div className="card-content">
                            <p>{message.email}</p>
                            <p>{message.message}</p>
                        </div>
                    </div>
                )
            }

        })

        return(

            <Page key="ChatPage" className="Chat">
                <svg onClick={this.disconnect} className="Chat_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                {messageNodes}
                <form>
                    <textarea
                        className="Chat_input"
                    placeholder="Type a message"
                    cols="100"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyup.bind(this)}
                    value={this.state.message}>
                    </textarea>
                </form>
            </Page>
        )
    }
}

export default Chat
