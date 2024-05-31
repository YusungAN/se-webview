import React, { useState } from 'react';
import LoginInput from '../components/LoginInput/LoginInput';
import LoginBtn from '../components/LoginBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    const loginSubmit = async () => { 
        console.log(id, pw);
        try {
            axios.post('http://3.37.242.189:8000/auth/login/', {data: {username: id, password: pw}}, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                    alert('로그인되었습니다.');
                    localStorage['user_id'] = res.data.userid;
                    window.location.href = '/main'; 
                })
                .catch((error) => {
                    console.log(error);
                    alert('입력하신 정보를 확인하세요.');
                });
        } catch (err) {
            console.log(err);
            alert('아이디나 비밀번호를 확인하세요.');
        }
    }

    return (
        <>
            <div style={Wrapper}>
                <div style={Logo}>아맞다</div>
                <LoginInput value={id} placeHolder={'아이디를 입력해주세요'} offset={0} type="text" onChange={onChangeId}/>
                <LoginInput value={pw} placeHolder={'비밀번호를 입력해주세요'} offset={0} type="password" onChange={onChangePw} />
                <LoginBtn value={"로그인"} bgColor={'#f4adff'} marginTop={"50px"} onClick={loginSubmit} />
                <div style={MiniTxt}>아직 회원이 아니시라면?</div>
                <Link to={'/register'} style={Linkstyle}>
                    <LoginBtn value={"회원가입"} bgColor={'#bebebe'} marginTop={"0"} />
                </Link>
            </div>
        </>
    );
};

export default Login;