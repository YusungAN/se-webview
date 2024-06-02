import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ChatList = () => {

    const [chatList, setChatList] = useState([]);

    const getList = async () => {
        try {            
            const res = await axios.get(`https://se-chat.fly.dev/chat_rooms?username=${localStorage['username']}`);
            setChatList(res.data.roomlist);
            // setChatList([
            //     {
            //         "room_id": 0,
            //         "other_user": "asdf",
            //         "last_message": "네네",
            //         "last_message_date": "2024-06-01 11:00"
            //     }
            // ]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getList();
    }, []);

    const Wrapper = {
        width: '100vw',
        height: 'calc(90vh - 50px)',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)'
    }

    return (
        <>
            <div style={Wrapper}>
                {
                chatList.length > 0 ? 
                chatList.map((data, idx) => (
                    <Link to={`${data.room_id}`} key={idx}>
                        <div key={idx} style={{color: 'black', width: '100%', display: 'flex', alignItems: 'center', height: '130px', borderBottom: '1px solid black', paddingLeft: '10px'}}>
                            <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#d9d9d9', marginLeft: '50px'}}></div>
                            <div>
                                <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '20px'}}>{`${data.other_user}`}</div>
                                <div style={{fontSize: '0.8rem', marginLeft: '20px'}}>{data.last_message}</div>
                            </div>
                        </div>
                    </Link>
                    
                )) : <div>로딩중..</div>}
            </div>
              
            <NavBar chosenIdx={1} />
        </>
    );
}

export default ChatList;