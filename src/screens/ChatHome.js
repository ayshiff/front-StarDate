import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/ChatHome.css';
import '../style/Home.css';
import '../style/forsize.css';
import MediaQuery from 'react-responsive';
import settings from '../icons/settings.png';
import profilePic from '../icons/profilePic.png';
import Chat from './Chat';

class ChatHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match? this.props.match.params.id : null
        };
        this.pushChat = this.pushChat.bind(this)
    }

    pushChat () {
        this.props.nav.pushPage({component: Chat})
    }

    componentWillMount () {

    }


    render() {
        if(this.state.id !== null) {
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
        }
        return(
            <Page key="ChatPage" className="ChatPage">
                <MediaQuery query="(max-width: 420px)">
                <div onClick={this.pushChat} className="ChatPage_div">
                    <img className="ChatPage_div_image" src={profilePic} alt=""/>
                    <div className="ChatPage_div_container">
                        <h3 className="ChatPage_div_container_title">Chewbaca</h3>
                        <p className="ChatPage_div_container_message">Hello :)</p>
                    </div>
                </div>
                </MediaQuery>
            </Page>
        )
    }
}

export default ChatHome
