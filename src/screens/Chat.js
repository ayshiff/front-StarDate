import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/Chat.css';
import profilePic from '../icons/profilePic.png';

class Chat extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Page key="ChatPage" className="ChatPage">

            </Page>
        )
    }
}

export default Chat