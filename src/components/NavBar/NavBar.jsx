import React, {useEffect} from 'react';
import HomeIcon from '../../assets/home.svg?react'
import ChatIcon from '../../assets/chat.svg?react';
import MyIcon from '../../assets/person.svg?react';
import { Link } from 'react-router-dom';


const NavBar = ({chosenIdx}) => {

    useEffect(() => {
        console.log(chosenIdx == 2);
    }, []);

    const NavBar = {
        width: '100vw',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '20px 20px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 'calc(100vh - 50px)'
    }


    return (
        <>
            <div style={NavBar}>
                <Link to={'/main'}>
                    <HomeIcon key={chosenIdx} width={20} height={20} fill={chosenIdx == 0 ? 'blue' : '#858585'} />
                </Link>
                <Link to={'/chat'}>
                    <ChatIcon width={20} height={20} fill={chosenIdx == 1 ? 'blue' : '#858585'} />
                </Link>
                <Link to={'/mypage'}>
                    <MyIcon width={20} height={20} fill={chosenIdx == 2 ? 'blue' : '#858585'} />
                </Link>
            </div>
        </>
    );
};

export default NavBar;