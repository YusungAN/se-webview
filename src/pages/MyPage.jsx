import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import CoinIcon from '../assets/coin.svg?react';
import { Link } from 'react-router-dom';

const MyPage = () => {

    const Wrapper = {
        width: '100vw',
        height: 'calc(85vh - 50px)',
        backgroundColor: 'white',
        borderRadius: '20px',
        marginTop: '5vh',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)'
    }

    return (
        <>
            <div style={Wrapper}>
                <div style={{display: 'flex', alignItems: 'center', height: '150px', borderBottom: '1px solid black'}}>
                    <div style={{width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#d9d9d9', marginLeft: '50px'}}></div>
                    <div>
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '20px'}}>{localStorage['username']}</div>
                        <div style={{fontSize: '0.8rem', marginLeft: '20px'}}>로그아웃</div>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '150px', borderBottom: '1px solid black', paddingLeft: '70px'}}>
                    <CoinIcon width={50} height={50} />
                    <div >
                        <span style={{fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '20px'}}>0</span>
                        <span style={{fontSize: '1rem', marginLeft: '130px'}}>현재 포인트</span>
                    </div>
                </div>
                <Link to={'/mylost'}>
                    <div style={{color: 'black', height: '50px', lineHeight: '50px', borderBottom: '1px solid black', paddingLeft: '50px'}}>
                        <div>내 분실물</div>
                    </div>
                </Link>
                <Link to={'/myfound'}>
                    <div style={{color: 'black', height: '50px', lineHeight: '50px', borderBottom: '1px solid black', paddingLeft: '50px'}}>
                        <div>내가 찾은 분실물</div>
                    </div>
                </Link>
            </div>
            <NavBar chosenIdx={2} />
        </>
    );
}

export default MyPage;