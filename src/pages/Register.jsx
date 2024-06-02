import React, { useState } from 'react';
import LoginInput from '../components/LoginInput/LoginInput';
import LoginBtn from '../components/LoginBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [email, setEmail] = useState('');
    const [authNumer, setAuthNumber] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    const onChangePwCheck = (e) => {
        setPwCheck(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeAuthNumber = (e) => {
        setAuthNumber(e.target.value);
    };

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };


    const Wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '400px',
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto'
    };

    const TitleText = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '50px',
        marginBottom: '10px',
        width: '100%',
        paddingLeft: '20%'
    };

    const AuthWrapper = {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const AuthBtn = {
        backgroundColor: '#bebebe',
        height: '40px',
        width: '90px',
        borderRadius: '20px',
        marginLeft: '10px',
        marginTop: '-10px',
        
    }

    const sendVerificationMail = () => {
        try {
            console.log('sadf');
            axios.post('http://3.37.242.189:8000/auth/send-verification-email/', {data: {email: email}})
                .then((res) => {
                    console.log(res);
                    alert('메일이 전송되었습니다.')
                })
                .catch((error) => {
                    console.log(error);
                    alert('이메일을 다시 확인해주세요.');
                });
            
        } catch (err) {
            console.log(err);
            alert('메일 주소를 다시 확인해주세요.');
        }

    }

    const sendProfile = () => {
        try {
            axios.post('http://3.37.242.189:8000/auth/signup/', 
                {data:{username: id, password1: pw, password2: pwCheck, email: email, verification_code: authNumer}})
                .then((res) => {
                    console.log(res);
                    alert('회원가입이 완료되었습니다.');
                }).catch((err) => {
                    console.log(err);
                    alert('입력하신 내용을 다시 확인해주세요.');
                });

            
        } catch (err) {
            console.log(err);
            alert('입력하신 정보를 다시 확인해주세요.');
        }
        
    }


    return (
        <>
            <div style={Wrapper}>
                <div style={TitleText}>
                    <div>아이디 입력</div>
                </div>
                <LoginInput value={id} placeHolder={'알파벳, 숫자, 3글자 이상'} offset={0} type="text" onChange={onChangeId}/>

                <div style={TitleText}>
                    <div>비밀번호 입력</div>
                </div>
                <LoginInput value={pw} placeHolder={'알파펫, 숫자, 8글자 이상'} offset={0} type="password" onChange={onChangePw} />
                <LoginInput value={pwCheck} placeHolder={'비밀번호 확인'} offset={0} type="password" onChange={onChangePwCheck} />

                <div style={TitleText}>
                    <div>이메일 입력</div>
                </div>
                <LoginInput value={email} placeHolder={''} offset={0} type="text" onChange={onChangeEmail}/>
                
                <div style={AuthWrapper}>
                    <LoginInput value={authNumer} placeHolder={'인증번호 입력'} offset={100} type="text" onChange={onChangeAuthNumber}/>
                    <button style={AuthBtn} onClick={sendVerificationMail}>전송</button>
                </div>

                <div style={TitleText}>
                    <div>닉네임 입력</div>
                </div>
                <LoginInput value={nickname} placeHolder={'알파벳, 숫자, 3글자 이상'} offset={0} type="text" onChange={onChangeNickname}/>
                <LoginBtn value={"회원가입"} bgColor={'#f4adff'} marginTop={"50px"} onClick={sendProfile}/>
            </div>
        </>
    );
};

export default Register;