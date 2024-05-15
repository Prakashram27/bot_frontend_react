import {
    Widget,
    setQuickButtons, addUserMessage,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./home.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Badge, Row} from "react-bootstrap";
import {handleMessagesAndResponses} from "../../messagesAndResonses/MessagesAndResponses";

//checks if conversation already started by the bot
let conversationStart = false;
const Home = () => {
    //starts conversation with bot
    if (conversationStart === false) {
        // handleMessagesAndResponses('Hi');
        conversationStart = true;
    };

    // handle User-Message typed in via keyboard (provided by react-chat-widget)
    const handleNewUserMessage = (newMessage) => {
        handleMessagesAndResponses(newMessage)
    }

    // triggerd if a button is clicked (provided by react-chat-widget)
    const handleQuickButtonClicked = (value) => {
        handleMessagesAndResponses(value[1]);

        //adds button message as user message to the chat container
        addUserMessage(value[0]);

        //resets conversation with bot
        if (value[1] === '/restart') {
            document.location.reload();
        }

        //creates restart button
        let restartButton = [];
        restartButton [0] = {
                label: 'Neustart',
                value: ['Neustart', '/restart']
            };
        setQuickButtons(restartButton);
    }

    return (
        //code of website (Home-site)
        <div className="container">
        
            <div className="Widget">
                <Widget handleNewUserMessage={handleNewUserMessage}
                        handleQuickButtonClicked={handleQuickButtonClicked}
                        // initPayload={"/get_started"}
                        customData={{"language": "en"}}
                        params={{'storage': 'session'}}
                        title={"Copper Chatbot "}
                        subtitle={""}
                        emojis={'NO'}
                        senderPlaceHolder={"Enter your message here"}
                        showTimeStamp={false}
                />
            </div>
        </div>
    );
};
export default Home;

