import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';

const SearchedList = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [searched, setSearched] = useState([]);
    const [chosenIdx, setChosenIdx] = useState(-1);

    const LostSearch = async () => {
        try {            
            const response = await axios.get(`http://3.37.242.189:8000/profile/find_list/${params.findid}`);
            console.log(response.data);
            setSearched(response.data);
            // setSearched([
            //     {
            //         "reporter_id": "asdf",
            //         "color": "asdf",
            //         "contents": "asdf",
            //         "find_id": 7,
            //         "is_found": null,
            //         "item": "",
            //         "location": "asdf",
            //         "manufacturer": "asdf",
            //         "photo": "img_19975_1.jpg",
            //         "reward": 0,
            //         "time": "Fri, 31 May 2024 11:27:00 GMT"
            //     }
            // ]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        LostSearch();
    }, []);

    const Wrapper = {
        width: '100vw',
        height: 'calc(90vh - 50px)',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        paddingTop: '20px'
    }

    const TimeStringFormat = (time) => {
        const timestamp = new Date(time);
        return `${timestamp.getMonth()+1}월 ${timestamp.getDate()}일 ${timestamp.getHours()}시`
    }

    const initChat = async (username) => {
        try {
            const {data: data} = await axios.post('https://se-chat.fly.dev/create_room', {"username": localStorage['username'], "opponent": username});
            alert('채팅을 시작합니다.');
            navigate(`/chat/${data.room_id}`);
        } catch (err) {
            console.log(err);
            alert('실패');
        }
    }
    return (
        <>
            <div style={Wrapper}>
                {
                searched.length > 0 ? ( chosenIdx == -1 ? 
                searched.map((data, idx) => (
                    <>
                    <div style={{marginLeft: '20px', fontSize: '1.2rem', fontWeight: 'bold'}}>잃어버린 물건과 비슷한 것 같아요</div>
                    <div key={idx} style={{width: '100%', display: 'flex', alignItems: 'center', height: '130px', borderBottom: '1px solid black', paddingLeft: '30px'}} onClick={() => setChosenIdx(idx)}>
                        <img src={data.photo} />
                        <div>
                            <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '20px'}}>{data.manufacturer}</div>
                            <div style={{fontSize: '0.8rem', marginLeft: '20px'}}>{data.location} | {data.time}</div>
                        </div>
                    </div>
                    </>
                )
                ) : <>
                    <div style={{paddingLeft: '20px'}} onClick={() => setChosenIdx(-1)}>x</div>
                    <div style={{overflowY: 'auto', height: 'calc(100% - 150px)'}}>
                        <div style={{width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <div style={{width: '25vw'}}>제조사/브랜드</div>
                            <div style={{width: '50vw', height: '30px', borderRadius: '10px', backgroundColor:'#efefef', textAlign: 'right', paddingRight: '20px'}}>{searched[chosenIdx].manufacturer}</div>
                        </div>
                        <div style={{width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <div style={{width: '25vw'}}>색상</div>
                            <div style={{width: '50vw', height: '30px', borderRadius: '10px', backgroundColor:'#efefef', textAlign: 'right', paddingRight: '20px'}}>{searched[chosenIdx].color}</div>
                        </div>
                        <div style={{width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <div style={{width: '25vw'}}>습득한 위치</div>
                            <div style={{width: '50vw', height: '30px', borderRadius: '10px', backgroundColor:'#efefef', textAlign: 'right', paddingRight: '20px'}}>{searched[chosenIdx].location}</div>
                        </div>
                        <div style={{width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                            <div style={{width: '25vw'}}>습득한 시각</div>
                            <div style={{width: '50vw', height: '30px', borderRadius: '10px', backgroundColor:'#efefef', textAlign: 'right', paddingRight: '20px'}}>{TimeStringFormat(searched[chosenIdx].time)}</div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div style={{width: '25vw', marginLeft: '6.5vw'}}>기타 특징</div>
                            <div style={{width: '86vw', marginLeft: '6.5vw', marginTop: '10px', backgroundColor:'#efefef', borderRadius: '20px', height: '15vh', overflowY: 'auto', padding: '15px', boxSizing: 'border-box'}}>{searched[chosenIdx].contents}</div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div style={{width: '25vw', marginLeft: '6.5vw'}}>사진</div>
                            <img style={{width: '86vw', marginLeft: '6.5vw', marginTop: '10px', backgroundColor:'#efefef', borderRadius: '20px', height: '15vh', overflowY: 'auto', padding: '15px', boxSizing: 'border-box'}} src={searched[chosenIdx].photo} />
                        </div>
                    </div>
                    <button style={{width: '80vw', backgroundColor: '#F4ADFF', textAlign: 'center', height: '40px', fontWeight: 'bold', marginLeft: '10vw'}} onClick={() => initChat(searched[chosenIdx].username)}>채팅 해보기</button>
                    <button style={{width: '80vw', backgroundColor: '#F4ADFF', textAlign: 'center', height: '40px', fontWeight: 'bold', marginLeft: '10vw', marginTop: '20px'}}>물건을 받았어요</button>
                </>
            ): <div style={{margin: '20px'}}>올라온 비슷한 분실물이 없어요</div>}
            </div>
              
            <NavBar chosenIdx={2} />
        </>
    );
}

export default SearchedList;