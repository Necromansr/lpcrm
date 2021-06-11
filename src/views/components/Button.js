import './button.css';


export const LoginButton =  ({title, onClick}) => (
    <input className={"submit"} onClick={onClick} type="button" value={title} />
) 

export const IconButton = ({source, alt, count = ''}) => (
    <button className="btn-header"><img src={source} alt={alt}/>{ count !=='' && <span className="bell-circle-pos">{count}</span>}</button>
)