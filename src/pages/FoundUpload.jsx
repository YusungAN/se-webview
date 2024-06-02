import React, { useState } from 'react';
import LoginInput from '../components/LoginInput/LoginInput';
import LoginBtn from '../components/LoginBtn';
import { useNavigate } from 'react-router-dom';
import CoinIcon from '../assets/coin.svg?react';
import axios from 'axios';


const Found = () => {
    const navigate = useNavigate();
    const [pageIdx, setPageIdx] = useState(0);
    const [option, setOption] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [lostLocation, setLostLocation] = useState('');
    const [lostTime, setLostTime] = useState('');
    const [etc, setEtc] = useState('');
    const [point, setPoint] = useState(0);
    let photoFile = null;

    const onChangeOption = (e) => {
        setOption(e.target.value);
    };

    const onChangeBrand = (e) => {
        setBrand(e.target.value);
    };

    const onChangeColor = (e) => {
        setColor(e.target.value);
    };

    const onLostLocation = (e) => {
        setLostLocation(e.target.value);
    };

    const onLostTime = (e) => {
        setLostTime(e.target.value);
    };

    const onChangeEtc = (e) => {
        setEtc(e.target.value);
    };

    const onChangePhoto = (e) => {
        if (e.currentTarget.files?.[0]) {
            photoFile = e.currentTarget.files[0];
            console.log(photoFile);
        }
    }

    const onChangePoint = (e) => {
        setPoint(e.target.value);
    };


    const Wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '400px',
        height: '100vh',
        overflowX: 'hidden'
    };

    const TitleText = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '80px',
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

    const SelectStyle = {
        width: '85%',
        height: '40px',
        paddingLeft: '10px',
        lineHeight: '40px',
        border: 'none',
        borderRadius: '10px'
    }

    const EtcAreaStyle = {
        width: '85%',
        height: '200px',
        overflowY: 'auto',
        backgroundColor: 'white',
        resize: 'none',
        borderRadius: '20px',
        border: 'none',
        marginTop: '10px',
        padding: '20px',
        boxSizing: 'border-box'
    }

    const PointWrapper = {
        width: '85vw',
        height: '40px',
        borderRadius: '20px',
        backgroundColor: 'white',
    }

    const PointInput = {
        width: '30%',
        border: 'none',
        marginLeft: '20px'
    }

    const submitInfo = () => {
        try {
            let formData = new FormData();
            formData.append('user_id', localStorage['user_id']);
            formData.append('item', option);
            formData.append('manufacturer', brand);
            formData.append('color', color);
            formData.append('location', lostLocation);
            formData.append('time', lostTime);
            formData.append('contents', etc);
            formData.append('photo', photoFile);
            
            axios.post('http://3.37.242.189:8000/report/find/', formData, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                    alert('물건이 정상적으로 등록되었습니다.');
                    navigate('/main');
                })
                .catch((error) => {
                    console.log(error);
                    alert('입력하신 정보를 확인하세요.');
                });
        } catch (err) {
            console.log(err);
            alert('입력하신 정보를 입력하세요.');
        }
    }
    return (
        <>
            <div style={Wrapper}>
                {pageIdx == 0 ? <>
                    <div style={TitleText}>
                    <div>물품 종류를 골라주세요</div>
                </div>
                <select style={SelectStyle} onChange={onChangeOption}>
                    {[{ value: "phone", name: "스마트폰" }, 
                    { value: "tablet", name: "태블릿" }, 
                    { value: "neardevice", name: "주변전자기기" }, 
                    { value: "accessory", name: "악세서리" }, 
                    { value: 'etc', 'name': '기타'}].map((options) => (<option value={option.value}>{options.name}</option>))}
                </select>

                <div style={TitleText}>
                    <div>제조사/브랜드</div>
                </div>
                <LoginInput value={brand} placeHolder={''} offset={0} type="text" onChange={onChangeBrand} />
                <LoginBtn value={"다음"} bgColor={'#f4adff'} marginTop={"50px"} onClick={() => setPageIdx(1)} />
                </> : (pageIdx == 1 ? <>
                <div style={TitleText}>
                    <div>색상</div>
                </div>
                <LoginInput value={color} placeHolder={''} offset={0} type="text" onChange={onChangeColor}/>
                <div style={TitleText}>
                    <div>습득한 위치</div>
                </div>
                <LoginInput value={lostLocation} placeHolder={''} offset={0} type="text" onChange={onLostLocation}/>
                <div style={TitleText}>
                    <div>습득한 시간</div>
                </div>
                <LoginInput value={lostTime} placeHolder={''} offset={0} type="text" onChange={onLostTime}/>
                <LoginBtn value={"다음"} bgColor={'#f4adff'} marginTop={"50px"} onClick={() => setPageIdx(2)} />
                </> : <>
                    <div style={TitleText}>
                        <div>기타 특징</div>
                        <textarea style={EtcAreaStyle} value={etc} onChange={onChangeEtc}></textarea>
                    </div>
                    <div style={TitleText}>
                        <div>사진</div>
                        <input type='file' onChange={onChangePhoto} />
                    </div>
                    <div style={{
                        width: '100%',
                        paddingLeft: '25%'
                    }}>
                        <LoginBtn value={"등록하기"} bgColor={'#f4adff'} marginTop={"50px"} onClick={submitInfo} />
                    </div>
                    
                </>)}
            </div>
        </>
    );
};

export default Found;