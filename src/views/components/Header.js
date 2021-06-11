import './header.css';
import {settings, search, accept, plus, bell, logo}  from '../../until/images';
import {IconButton} from '../components/Button';

let arr = [
    {
        source: settings,
        alt: "settings"
    },
    {
        source: search,
        alt: "search"
    },
    {
        source: accept,
        alt: "accept"
    },
    {
        source: plus,
        alt: "plus"
    },
    {
        source: bell,
        alt: "bell",
        count: 10
    }
]

export const Header =  ({count}) => (
    <header className="header-crm">
        <div className="logo-pages-wrap">
            <div className="logo-position"><img className="logo-lp-crm" src={logo} alt="" /></div>
            <div className="block-pages"><span className="pages-dropdown">Отобразить с 1 по 50</span><span className="pages-total">/456</span>
                <div className="block-pages-num"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>...159</span></div>
            </div>
        </div>
        <div className="block-btn">
            {arr.map((x, index)=> <IconButton key={index} source={x.source} alt={x.alt} count={x?.count} />)}
            {/* <IconButton source={settings} alt={"setting"} />
            <IconButton source={search} alt={"search"} />
            <IconButton source={accept} alt={"accept"} />
            <IconButton source={plus} alt={"plus"} />
            <IconButton source={bell} alt={"bell"} count={count} /> */}
        </div>
    </header>
);


