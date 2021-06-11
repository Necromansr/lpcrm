import './input.css';


export const LoginInput =  ({title, type, value, onChange, refs}) => (
    <div className={'input'}>
        <label>{title}</label>
        <input type={type} ref={refs} defaultValue={value} onChange={onChange} />
    </div>
) 