import React from 'react';

export const Input = ({placeholder, handleChange}) => {
    return<input 
            placeholder={placeholder}
            type="text"
            onChange={(e)=>handleChange(e.target.value)}
            ></input>
}
