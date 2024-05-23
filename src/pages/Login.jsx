import React, { useState } from 'react';
import LoginInput from '../components/LoginInput/LoginInput';
import LoginBtn from '../components/LoginBtn';
import { Link } from 'react-router-dom';


const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePw = (e) => {
        setPw(e.target.value);
    };


    const Wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    };

    const Logo = {
        fontSize: '2.3rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '200px',
        marginBottom: '150px'
    };

    const MiniTxt = {
        fontSize: '0.7rem',
        marginTop: '100px'
    }

    const Linkstyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <>
            <div style={Wrapper}>
                <div style={Logo}>아맞다</div>
                <LoginInput value={id} placeHolder={'아이디를 입력해주세요'} offset={0} type="text" onChange={onChangeId}/>
                <LoginInput value={pw} placeHolder={'비밀번호를 입력해주세요'} offset={0} type="password" onChange={onChangePw} />
                <LoginBtn value={"로그인"} bgColor={'#f4adff'} marginTop={"50px"} />
                <div style={MiniTxt}>아직 회원이 아니시라면?</div>
                <Link to={'/register'} style={Linkstyle}>
                    <LoginBtn value={"회원가입"} bgColor={'#bebebe'} marginTop={"0"} />
                </Link>
            </div>
        </>
    );
};

export default Login;