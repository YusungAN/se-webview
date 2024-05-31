import React from 'react';
import HomeIcon from '../../assets/home.svg?react'
import ChatIcon from '../../assets/chat.svg?react';
import MyIcon from '../../assets/person.svg?react';


const NavBar = ({chosenIdx}) => {

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
                <HomeIcon width={20} height={20} fill={chosenIdx == 0 ? 'blue' : 'white'} />
                <ChatIcon width={20} height={20} fill={chosenIdx == 1 ? 'blue' : 'white'} />
                <MyIcon width={20} height={20} fill={chosenIdx == 2 ? 'blue' : 'white'} />
            </div>
        </>
    );
};

export default NavBar;