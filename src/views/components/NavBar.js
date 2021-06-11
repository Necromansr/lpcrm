import './navbar.css';

import { i, chat, calendary, message, userpic } from '../../until/images';
import { IconButton } from '../components/Button';


export const NavBar = ({ count }) => (
    <div style={{height: "95%", position: "relative"}}>
        <aside className="aside-crm">
            <div className="aside-wrap-header">
                <IconButton source={i} alt={"i"} />
                <IconButton source={chat} alt={"chat"} />
                {/* <button className="btn-header"><img src="img/i.svg" alt="i" /></button> */}
                {/* <button className="btn-header"><img src="img/Chat.svg" alt="chat" /></button> */}
            </div>
            <div className="aside-wrap-footer">
                <IconButton source={calendary} alt={"calendary"} count={"1"} />
                <IconButton source={message} alt={"message"} count={"7"} />
                <IconButton source={userpic} alt={"userpic"} />

                {/* <button className="btn-header"><img src="img/calendary.svg" alt="calen" /><span>1</span></button> */}
                {/* <button className="btn-header"><img src="img/message.svg" alt="mess" /><span>7</span></button> */}
                {/* <button className="btn-header"><img src="img/No-userpic.svg" alt="user" /></button> */}
            </div>
        </aside>
        <nav>
            <ul className="nav-crm">
                <li className="nav-list-crm"><span className="btn-crm airplay"></span></li>
                <li className="nav-list-crm"><span className="btn-crm user"></span></li>
                <li className="nav-list-crm"><span className="btn-crm sidebar"></span></li>
                <li className="nav-list-crm"><span className="btn-crm inbox"></span></li>
                <li className="nav-list-crm"><span className="btn-crm frame"></span></li>
                <li className="nav-list-crm"><span className="btn-crm squares"></span></li>
                <li className="nav-list-crm"><span className="btn-crm list"></span></li>
                <li className="nav-list-crm"><span className="btn-crm link"></span></li>
                <li className="nav-list-crm"><span className="btn-crm diag"></span></li>
                <li className="nav-list-crm"><span className="btn-crm rupor"></span></li>
                <li className="nav-list-crm"><span className="btn-crm setting"></span></li>
                <li className="nav-list-crm"><span className="btn-crm trash"></span></li>
                <li className="nav-list-crm"><span className="btn-crm info"></span></li>
                <li className="nav-list-crm"><span className="btn-crm video"></span></li>
            </ul>
        </nav>
    </div>
);


