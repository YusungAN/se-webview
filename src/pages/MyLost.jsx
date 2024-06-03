import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyLost = () => {

    const [findList, setFindList] = useState([]);

    const getList = async () => {
        try {            
            const response = await axios.get(`http://3.37.242.189:8000/profile/find_list/?user_id=${localStorage['user_id']}`);
            setFindList(response.data);
            // setFindList([
            //     {
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
        getList();
    }, []);

    const Wrapper = {
        width: '100vw',
        height: 'calc(90vh - 50px)',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto'
    }

    return (
        <>
            <div style={Wrapper}>
                {
                findList.length > 0 ? 
                findList.map((data, idx) => (
                    <Link to={`${data.find_id}`} style={{pointerEvents: data.is_found ? 'none' : 'default'}} onClick={() => localStorage['reward'] = data.reward}>
                        <div key={idx} style={{color: 'black', width: '100%', display: 'flex', alignItems: 'center', height: '130px', borderBottom: '1px solid black', paddingLeft: '30px'}}>
                            <img src={`http://3.37.242.189/${data.photo}`} width={50} height={50} style={{border: '1px solid black'}} />
                            <div>
                                <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '20px'}}>{`${data.manufacturer} ${data.item}`}</div>
                                <div style={{fontSize: '0.8rem', marginLeft: '20px'}}>{data.location} | {data.time}</div>
                            </div>
                            <div style={{position: 'relative', left: '-50%', width: '100%', height: '100%', display: data.is_found ? 'block' : 'none', background: 'rgba(255, 255, 255, 0.7)', color: 'red', fontSize: '1.5rem', fontWeight: 'bold', lineHeight: '130px', textAlign: 'right', boxSizing: 'border-box'}}>
                                찾았어요!
                            </div>
                        </div>
                    </Link>
                    
                )) : <div>로딩중..</div>}
            </div>
              
            <NavBar chosenIdx={2} />
        </>
    );
}

export default MyLost;