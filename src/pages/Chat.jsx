import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import { socket } from '../initSocket';
import axios from 'axios';

const Chat = () => {
    const params = useParams();
    const [msgList, setMsgList] = useState([]);
    const [msg, setMsg] = useState("");
    const [getMsg, setGetMsg] = useState("") // 여기에 답아서 이 state가 바뀔때마마 추가해봐

    const handleMsg = (e) => {
        setMsg(e.target.value);
    }

    const getBeforeChat = async () => {
        try {
            const {data: data} = await axios.get(`https://se-chat.fly.dev/chat/${params.roomid}`);
            console.log(data);
            setMsgList(data.messages); // 여기에 답아서 이 state가 바뀔때마마 추가해봐
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBeforeChat();

        socket.on('receive_message', (data) => {
            console.log(msgList);
            setGetMsg({content: data.message, sender: data.sender_name, data: data.time});
        });

        socket.on('error', (data) => {
            console.log(data);
        });

    }, []);

    useEffect(() => {
        if (getMsg == undefined || getMsg == "") return;
        console.log(getMsg);
        let temp = JSON.parse(JSON.stringify(msgList));
        temp.push({content: getMsg.content, sender: getMsg.sender, data: getMsg.data});
        console.log(temp);
        setMsgList(temp);
    }, [getMsg]);

    const sendMsg = () => {
        socket.emit("send_message", { roomid: params.roomid, user: localStorage['username'], chat: msg, time: dateformat(new Date())});
        setMsg('');
    }

    const dateformat = (date) => {
        // 현재 시간을 '오전/오후 시:분' 형식으로 반환
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let flag = hour >= 12 ? '오후' : '오전';
        hour = hour % 12;
        hour = hour ? hour : 12;  // '0' hour should be '12'
        minute = minute < 10 ? '0' + minute : minute;
        return flag + ' ' + hour + ':' + minute;
    }
    return (
        <>
        <div>
            <div style={{width: '100vw', height: 'calc(90vh - 50px)', overflowY: 'auto'}}>
                {
                    msgList.length > 0 ? msgList.map((data, idx) => {
                        return (data.sender == localStorage['username'] ? <div style={{width: 'calc(100vw - 10px)', display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                        <div>{data.sender}</div>
                        <div style={{marginTop: '10px', maxWidth: '40vw', padding: '10px', borderRadius: '20px 0 20px 20px', backgroundColor: '#73e6ff', fontSize: '1.1rem', textAlign: 'right'}}>{data.content}</div>
                        <div>{data.data}</div>
                    </div> : <div style={{marginLeft: '10px'}}>
                    <div>{data.sender}</div>
                    <div style={{marginTop: '10px', maxWidth: '40vw', padding: '10px', borderRadius: '0 20px 20px 20px', backgroundColor: 'white', fontSize: '1.1rem'}}>{data.content}</div>
                    <div>{data.data}</div>
                </div>)
                    })
                 : <></>
                }
                </div>

        </div>
        <input style={{width: 'calc(100vw - 90px)', height: "30px", border: 'none'}}value={msg} onChange={handleMsg} />
        <button stlye={{width: '90px', height: '30px'}} onClick={sendMsg}>전송</button>
        <NavBar chosenIdx={1} />
        </>
    );
}

export default Chat;