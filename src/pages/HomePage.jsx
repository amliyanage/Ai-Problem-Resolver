import '../assets/css/HomePage.css'
import {ChatIcon, HistoryIcon, MoreIcon, PlusIcon} from "../util/Icons.jsx";

const HomePage = () => {

    return (
        <>
            <div id={"HomePage"} className={"w-100 p-5"}>

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

            </div>
        </>
    );
}

export default HomePage;