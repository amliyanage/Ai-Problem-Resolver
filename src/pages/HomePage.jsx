import '../assets/css/HomePage.css'
import {ChatIcon, HistoryIcon, MoreIcon, PlusIcon, SendIcon} from "../util/Icons.jsx";
import {useState} from "react";

const HomePage = () => {

    const [sendMessage, setSendMessage] = useState(["hii", "hello", "how are you"])
    const [receivedMessage, setReceivedMessage] = useState(["hii", "hello", "how are you"])

    return (
        <>
            <div id={"HomePage"} className={"w-100 p-5 d-flex justify-content-between gap-5"}>

                <div className="sidebar  h-100 p-5 d-none d-lg-block">
                    <h1 className={"mb-4"}>Chats</h1>
                    <button className={"border-0 w-100 d-flex justify-content-center align-items-center gap-2 p-2"}>
                        <PlusIcon/>
                        New Chat
                    </button>
                    <h2 className={"mt-5 d-flex align-items-center gap-3"}>History <HistoryIcon/> </h2>
                    <div className="historyList mt-4 d-flex flex-column gap-3">
                        {
                            Array.from({length: 10}, () => {
                                return (
                                    <div className={"d-flex justify-content-between align-items-center historyCard"}>
                                        <ChatIcon/>
                                        <h4 className={"m-0"}>Hello World</h4>
                                        <MoreIcon/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="chatArea h-100">

                    <div className="chat d-flex flex-column">
                        {
                            receivedMessage && (
                                receivedMessage.map((message,index) => {
                                    return(
                                        <>
                                            <div>
                                                <p className={"sendMsg float-end"}>{sendMessage[index]}</p>
                                            </div>
                                            <div>
                                                <p className={"receiveMsg float-start"}>{receivedMessage[index]}</p>
                                            </div>
                                        </>
                                    )
                                })
                            )
                        }
                    </div>

                    <div className="searchBar w-100 bg-white d-flex p-3 rounded-4 bottom-0 align-items-center mt-4">
                        <input type="text" placeholder={"Search"} className={"w-100 bg-white border-0 me-2" }/>
                        <SendIcon/>
                    </div>

                </div>

            </div>
        </>
    );
}

export default HomePage;