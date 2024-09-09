import React from 'react'; // Import React if needed
import '../assets/css/HomePage.css'
import { ChatIcon, HistoryIcon, MoreIcon, PlusIcon, SendIcon } from "../util/Icons.jsx";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const HomePage = () => {
    const [sendMessage, setSendMessage] = useState([]);
    const [receivedMessage, setReceivedMessage] = useState([]);
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);

    const generateMessage = async (msg) => {
        const GEMINI_API_KEY = "AIzaSyAb8vSABhdR47nFAxS-TmMd0gPZsyAhtVA";
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        try {
            const result = await model.generateContent(msg);
            const resultText = result.response.text();
            setReceivedMessage(prevMessages => [...prevMessages, resultText]);
        } catch (error) {
            console.error("Error generating content:", error);
        }
    }

    const handleSendMessage = () => {
        setSendMessage(prevMessages => [...prevMessages, message]);
        generateMessage(message);
        setHistory(prevHistory => [...prevHistory, message]);
        setMessage("");
    }

    const handleNewChat = () => {
        setSendMessage([]);
        setReceivedMessage([]);
        setMessage("");
    }

    const handleHistoryClick = (msg) => {
        setSendMessage(prevMessages => [...prevMessages, msg]);
        setMessage(msg);
        generateMessage(msg);
    }

    const truncateTitle = (title) => {
        return title.length > 10 ? title.slice(0, 10) + "..." : title;
    }

    return (
        <>
            <div id={"HomePage"} className={"w-100 p-5 d-flex justify-content-between gap-5"}>
                <div className="sidebar h-100 p-5 d-none d-lg-block">
                    <h1 className={"mb-4"}>Chats</h1>
                    <button
                        className={"border-0 w-100 d-flex justify-content-center align-items-center gap-2 p-2"}
                        onClick={handleNewChat}
                    >
                        <PlusIcon />
                        New Chat
                    </button>
                    <h2 className={"mt-5 d-flex align-items-center gap-3"}>
                        History <HistoryIcon />
                    </h2>
                    <div className="historyList mt-4 d-flex flex-column gap-3">
                        {history.map((chat, index) => (
                            <div
                                key={index}
                                className={"d-flex justify-content-between align-items-center historyCard"}
                                onClick={() => handleHistoryClick(chat)}
                            >
                                <ChatIcon />
                                <h4 className={"m-0"}>{truncateTitle(chat)}</h4>
                                <MoreIcon />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="chatArea h-100">
                    <div className="chat d-flex flex-column">
                        {sendMessage.length > 0 && receivedMessage.length > 0 && (
                            sendMessage.map((msg, index) => (
                                <React.Fragment key={index}>
                                    <div>
                                        <p className={"sendMsg float-end"}>{msg}</p>
                                    </div>
                                    <div>
                                        <p className={"receiveMsg float-start"}>{receivedMessage[index]}</p>
                                    </div>
                                </React.Fragment>
                            ))
                        )}
                    </div>

                    <div className="searchBar w-100 bg-white d-flex p-3 rounded-4 bottom-0 align-items-center mt-4">
                        <input
                            type="text"
                            placeholder={"Search"}
                            className={"w-100 bg-white border-0 me-2"}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <div onClick={handleSendMessage}>
                            <SendIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
