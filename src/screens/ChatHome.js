import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/ChatHome.css';
import settings from '../icons/settings.png';
import profilePic from '../icons/profilePic.png';
import Chat from './Chat';

class ChatHome extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.pushChat = this.pushChat.bind(this)
    }

    pushChat () {
        this.props.nav.pushPage({component: Chat})
    }


    render() {
        return(
            <Page key="ChatPage" className="ChatPage">
                <div onClick={this.pushChat} className="ChatPage_div">
                    <img className="ChatPage_div_image" src={profilePic} alt=""/>
                    <div className="ChatPage_div_container">
                        <h3 className="ChatPage_div_container_title">Chewbaca</h3>
                        <p className="ChatPage_div_container_message">Hello :)</p>
                    </div>
                </div>
            </Page>
        )
    }
}

export default ChatHome