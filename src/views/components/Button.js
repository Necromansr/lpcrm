import './button.css';
import React from 'react'

export const LoginButton =  ({title, onClick}) => (
    <input className={"submit"} onClick={onClick} type="button" value={title} />
) 

export const IconButton = ({source, alt, count = '', onClick}) => (
    <button className="btn-header" onClick={onClick}><img src={source} alt={alt}/>{ count !=='' && <span className="bell-circle-pos">{count}</span>}</button>
)