import './button.css';
import React, { Component } from 'react';


export const LoginButton =  ({title, onClick}) => (
    <input className={"submit"} onClick={onClick} type="button" value={title} />
) 

export const IconButton = ({source, alt, count = '', onClick, onMouseEnter, onMouseLeave}) => (
    <button className="btn-header" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ><img src={source} alt={alt}/>{ count !=='' && <span className="bell-circle-pos">{count}</span>}</button>
)