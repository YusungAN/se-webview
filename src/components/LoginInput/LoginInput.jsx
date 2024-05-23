import React from 'react';

const LoginInput = ({value, placeHolder, offset, type, onChange}) => {

    const style = {
        width: `calc(80% - ${offset}px)`,
        maxWidth: '350px',
        height: '40px',
        color: '#c5c5c5',
        paddingLeft: '30px',
        lineHeight: '50px',
        border: 'none',
        borderRadius: '20px',
        marginBottom: '10px'
    }

    return (
        <>
            <input value={value} placeholder={placeHolder} style={style} type={type} onChange={onChange} />
        </>
    );
}


export default LoginInput;