import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Link } from 'react-router-dom';


const Main = () => {

    const Box1 = {
        width: '95vw',
        height: '250px',
        backgroundColor: 'white',
        borderRadius: '20px 20px 20px 0',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        marginLeft: 'calc(2.5vw)'
    }

    const Box2 = {
        width: '95vw',
        height: '250px',
        backgroundColor: '#4378FF',
        borderRadius: '20px 20px 20px 0',
        boxShadow: '1px 1px 3px 3px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        marginLeft: 'calc(2.5vw)'
    }
    
    const SmallText = {
        textAlign: 'right',
        paddingRight: '20px',
        paddingTop: '150px',
        color: 'black'
    }

    const BigText = {
        fontSize: '2.3rem',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: '20px',
        color: 'black'
    }

    return (
        <>
            <Link to={'/find'}>
                <div style={Box1}>
                    <div style={SmallText}>물건을 잃어버렸어요</div>
                    <div style={BigText}>분실물 찾기</div>
                </div>
            </Link>
            <Link to={'upload'}>
                <div style={Box2}>
                    <div style={SmallText}>물건을 주웠어요</div>
                    <div style={BigText}>분실물 등록</div>
                </div>
            </Link>
            <NavBar chosenIdx={0}></NavBar>
        </>
    );
}

export default Main;