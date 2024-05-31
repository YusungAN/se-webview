import React from 'react';

const LoginInput = ({value, bgColor, marginTop, onClick}) => {

    const style = {
        width: '80%',
        maxWidth: '350px',
        height: '40px',
        color: 'black',
        backgroundColor: bgColor,
        paddingLeft: '10px',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '20px',
        fontWeight: 'bold',
        marginTop: marginTop
    }

    return (
        <>
            <div style={style} onClick={onClick}>{value}</div>
        </>
    );
}


export default LoginInput;