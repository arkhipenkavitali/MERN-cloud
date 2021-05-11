import React from 'react';
import './Input.less'

const Input = ({type, placeholder, value, setValue}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
    )
};

export default Input;