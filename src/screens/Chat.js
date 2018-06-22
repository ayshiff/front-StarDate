import React, {Component} from 'react'
import { Page} from 'react-onsenui';
import '../style/Chat.css';
import settings from '../icons/settings.png';

class Chat extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Page className="ChatPage">
                <div className="ChatPage_image"></div>
                <div className="ChatPage_description">
                    <div className="ChatPage_description_header">
                        <h1 className="ChatPage_description_header_Name"> DarkVador, 50</h1>
                        <img src={settings} alt="settings" className="ChatPage_description_header_settings"/>
                    </div>
                    <h3 className="ChatPage_description_place">Terraria</h3>
                    <p className="ChatPage_description_about"> A propos</p>
                    <p className="ChatPage_description_description"> ezfezfezfzefzefzfefsdfssdfsdfsdfsdfsdgfdsgdfgdgezfeezefz</p>
                    <p className="ChatPage_description_response"> Reponse</p>

                </div>
            </Page>
        )
    }
}

export default Chat