import './header.css';
import React, { Component } from 'react';
import { settings, search, accept, sumka, plus, bell, logo, phone, infoyellow, calenyellow, autocell, changestatus, copy, createttt, del, exportdata, importdata, pechat, redactor, sendsms } from '../../until/images';
import { IconButton } from '../components/Button';
import { connect } from "react-redux";
import { countChange, refresh, changeZoom } from "../../store/actions/index";

import * as hints from '../../until/hints'


let timer = null;

const mapStateToProps = state => {
    return { top: state.top, count: state.count, refresh: state.refresh, zoom: state.zoom, list: state.idList };
};
const mapDispatchToProps = dispatch => {
    return {
        changeCount: counts => dispatch(countChange(counts)),
        changeRefresh: refreshs => dispatch(refresh(refreshs)),
        changeZoom: zooms => dispatch(changeZoom(zooms)),
    };
}
let arr = [
    {
        source: settings,
        alt: "settings"
    },
    {
        source: accept,
        alt: "accept"
    },
    {
        source: plus,
        alt: "plus"
    },
]


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            rotate: 0,
            showNotification: false,
            showModal: false,
            showImport: false
        }
    }


    componentDidMount() {
        this.props.changeCount(0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.top !== this.props.top) {
            this.setState({
                start: this.props.top / (18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom)
            })
        }

    }

    notificationBtn = () => {
        this.setState({ showNotification: !this.state.showNotification })
        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.toggle('notification-toggle')
        const module = document.querySelector('.modul-block');
        module.classList.remove('modul-toggle')
        const imports = document.querySelector('.import-block');
        imports.classList.remove('import-toggle')
    }

    moduleBtn = () => {
        this.setState({ showModal: !this.state.showModal })

        const module = document.querySelector('.modul-block');
        module.classList.toggle('modul-toggle')

        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.remove('notification-toggle')
        const imports = document.querySelector('.import-block');
        imports.classList.remove('import-toggle')
    }

    importBtn = () => {
        const imports = document.querySelector('.import-block');
        this.setState({ showImport: !this.state.showImport })
        imports.classList.toggle('import-toggle')

        const notificationBlock = document.querySelector('.notifications');
        notificationBlock.classList.remove('notification-toggle')
        const module = document.querySelector('.modul-block');
        module.classList.remove('modul-toggle')
    }

    noteBtn = () => {
        const btnNot = document.querySelector('.btn-not');

        const btnTech = document.querySelector('.btn-tech');

        const blockNote = document.querySelector('.block-not');
        const techNote = document.querySelector('.tech-note');
        btnNot.classList.add('btn-style');
        blockNote.style.display = 'block';
        techNote.style.display = 'none';
        btnTech.classList.remove('btn-style');
    }

    techBtn = () => {
        const btnNot = document.querySelector('.btn-not');
        const btnTech = document.querySelector('.btn-tech');

        const blockNote = document.querySelector('.block-not');
        const techNote = document.querySelector('.tech-note');
        blockNote.style.display = 'none';
        techNote.style.display = 'block';
        btnTech.classList.add('btn-style');
        btnNot.classList.remove('btn-style');
    }


    render() {
        return (
            <header className="header-crm">
                <div className="logo-pages-wrap">
                    <div className="logo-position">

                        <svg id="" className="header-logo__svg-logo" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                            <path className="logo-yellow" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                            <path className="logo-red" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/>
                            <path className="logo-blue" d="M500.2,32C303.3,32,134.9,153.6,65.8,325.7c61.7-112.7,181.4-189.1,318.9-189.1C585.4,136.6,748,299.3,748,500
    S585.4,863.4,384.7,863.4c-137.5,0-257.2-76.4-318.9-189.1C134.9,846.4,303.3,968,500.2,968c258.4,0,468-209.5,468-468
    S758.6,32,500.2,32z"/></svg>

                        <svg width="26" height="10" viewBox="0 0 26 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.1154 9.17578H0.884567C0.394896 9.17578 0 8.78093 0 8.29119V7.99102C0 7.50128 0.394896 7.10643 0.884567 7.10643H25.1154C25.605 7.10643 26 7.50128 26 7.99102V8.29119C25.9842 8.78093 25.605 9.17578 25.1154 9.17578Z" fill="#FFEE00" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64032 0.487394C8.64032 2.46207 8.64032 4.43663 8.64032 6.41131H8.7193H10.5674V4.67359H13.9003V6.41131H15.7484C15.7958 6.2533 15.8274 6.0954 15.8274 5.92157V5.4635C15.8274 4.70525 15.2745 4.07334 14.548 3.96273C14.4848 3.947 14.4058 3.947 14.3268 3.947C14.4058 3.947 14.469 3.947 14.548 3.93117C15.2745 3.82056 15.8274 3.18865 15.8274 2.4304V1.97233C15.8274 1.13503 15.1482 0.455833 14.3268 0.455833C12.4155 0.487393 10.5201 0.487394 8.64032 0.487394ZM10.5516 3.33093V1.81433H13.1422C13.5529 1.81433 13.9003 2.14606 13.9003 2.57258C13.9003 2.98336 13.5686 3.33093 13.1422 3.33093H10.5516Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3244 4.45247L21.119 4.02595L20.4872 2.62007L20.2818 2.14617L19.5237 0.487396H18.5601H17.9914H16.6331V6.41131H18.5601V2.14617L20.4872 6.41131H21.3244H22.1616L24.0728 2.14617V6.41131H25.9999V0.487396H24.6415H24.0728H23.1093L22.3511 2.14617L22.1616 2.62007L21.514 4.02595L21.3244 4.45247Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9271 0.488011H1.69017C0.884581 0.488011 0.205359 1.0567 0.0473998 1.81495C0.0158081 1.92556 0.0158081 2.052 0.0158081 2.16251V4.70587C0.0158081 4.83221 0.0316039 4.94282 0.0473998 5.05343C0.205359 5.81168 0.884581 6.38036 1.69017 6.38036C3.15918 6.38036 4.61241 6.38036 6.08142 6.38036C7.01338 6.38036 7.77157 5.62212 7.77157 4.69003V4.08979H5.84448V4.31091C5.84448 4.7217 5.51276 5.05343 5.10207 5.05343H2.66951C2.25882 5.05343 1.9271 4.7217 1.9271 4.31091C1.9271 3.75806 1.9271 3.09459 1.9271 2.54163C1.9271 2.13095 2.25882 1.79922 2.66951 1.79922H5.10207C5.51276 1.79922 5.84448 2.13095 5.84448 2.54163V2.76286H7.77157V2.16251C7.77157 1.23053 7.01338 0.472282 6.08142 0.472282C4.70718 0.488011 3.31715 0.488011 1.9271 0.488011Z" fill="white" />
                            <path d="M1.21625 8.63887V7.67522H1.42159V8.48086H1.89546V8.63887H1.21625ZM4.24904 8.63887H4.0279L3.94893 8.41764H3.55403L3.47505 8.63887H3.2697L3.64881 7.65939H3.85415L4.24904 8.63887ZM3.90154 8.24391L3.75938 7.88062L3.63301 8.24391H3.90154ZM5.70227 8.63887V7.65939H5.89182L6.30251 8.30713V7.65939H6.47626V8.63887H6.27092L5.87602 7.99113V8.63887H5.70227ZM8.02425 7.65939H8.38756C8.46654 7.65939 8.52973 7.65939 8.57711 7.67522C8.6403 7.69095 8.68768 7.72262 8.71927 7.77001C8.76666 7.8174 8.78246 7.86479 8.81405 7.92801C8.82984 7.99113 8.84564 8.07018 8.84564 8.16496C8.84564 8.24391 8.82984 8.30713 8.81405 8.37025C8.78246 8.43347 8.75087 8.49669 8.70348 8.54408C8.67189 8.57564 8.6245 8.6072 8.56132 8.62303C8.51393 8.63887 8.46654 8.63887 8.38756 8.63887H8.02425V7.65939ZM8.22961 7.8174V8.46503H8.37177C8.41916 8.46503 8.46654 8.46503 8.49813 8.4493C8.52973 8.43347 8.56132 8.43347 8.57711 8.40191C8.59291 8.38608 8.6087 8.35452 8.6245 8.30713C8.6403 8.25974 8.6403 8.19652 8.6403 8.1333C8.6403 8.07018 8.6403 7.99113 8.6245 7.95957C8.6087 7.91218 8.59291 7.89635 8.57711 7.86479C8.54552 7.84896 8.52973 7.83323 8.48234 7.8174C8.45075 7.8174 8.40336 7.80156 8.32438 7.80156H8.22961V7.8174ZM10.3463 8.63887V7.65939H10.5515V8.63887H10.3463ZM12.068 8.63887V7.65939H12.2575L12.6683 8.30713V7.65939H12.8577V8.63887H12.6525L12.2575 7.99113V8.63887H12.068ZM14.848 8.27547V8.11757H15.2746V8.51242C15.2272 8.55981 15.1798 8.59148 15.1008 8.62303C15.0218 8.65459 14.9428 8.67042 14.8639 8.67042C14.7691 8.67042 14.6743 8.65459 14.5954 8.6072C14.5163 8.55981 14.4689 8.49669 14.4216 8.41764C14.39 8.33869 14.3584 8.24391 14.3584 8.16496C14.3584 8.07018 14.3742 7.9754 14.4216 7.89634C14.4689 7.8174 14.5321 7.75417 14.6111 7.70678C14.6743 7.67523 14.7533 7.65939 14.848 7.65939C14.9745 7.65939 15.0692 7.69095 15.1324 7.73834C15.1956 7.78573 15.243 7.86479 15.2587 7.94374L15.0692 7.9754C15.0534 7.92801 15.0218 7.89635 14.9902 7.86479C14.9587 7.83312 14.9113 7.8174 14.848 7.8174C14.7691 7.8174 14.6901 7.84895 14.6428 7.89634C14.5954 7.94374 14.5637 8.03852 14.5637 8.1333C14.5637 8.24391 14.5954 8.33869 14.6428 8.40191C14.6901 8.46503 14.7691 8.48086 14.848 8.48086C14.8954 8.48086 14.9271 8.46503 14.9745 8.4493C15.0218 8.43347 15.0534 8.41764 15.085 8.38608V8.27547H14.848ZM17.1701 8.63887V7.65939H17.486C17.6123 7.65939 17.6914 7.65939 17.7229 7.67522C17.7703 7.69095 17.8334 7.72262 17.8651 7.77001C17.8967 7.8174 17.9282 7.88062 17.9282 7.95957C17.9282 8.02279 17.9125 8.07018 17.8967 8.11757C17.8808 8.16496 17.8493 8.19652 17.8177 8.21235C17.7862 8.22808 17.7545 8.25974 17.7229 8.25974C17.6755 8.27547 17.6123 8.27547 17.5175 8.27547H17.3754V8.63887H17.1701ZM17.3596 7.8174V8.10174H17.4701C17.5492 8.10174 17.5966 8.10174 17.6281 8.08591C17.6597 8.07018 17.6755 8.05435 17.6914 8.03852C17.7071 8.02279 17.7071 7.99113 17.7071 7.95957C17.7071 7.92801 17.6914 7.89635 17.6755 7.86479C17.6597 7.83312 17.6281 7.83323 17.5966 7.8174C17.5649 7.8174 17.5334 7.8174 17.4544 7.8174H17.3596ZM20.2029 8.63887H19.9817L19.9028 8.41764H19.5078L19.4289 8.63887H19.2235L19.6026 7.65939H19.808L20.2029 8.63887ZM19.8396 8.24391L19.6974 7.88062L19.5711 8.24391H19.8396ZM22.0984 8.27547V8.11757H22.5249V8.51242C22.4775 8.55981 22.4301 8.59148 22.3511 8.62303C22.2721 8.65459 22.1932 8.67042 22.1142 8.67042C22.0194 8.67042 21.9246 8.65459 21.8456 8.6072C21.7666 8.55981 21.7193 8.49669 21.6719 8.41764C21.6403 8.33869 21.6087 8.24391 21.6087 8.16496C21.6087 8.07018 21.6245 7.9754 21.6719 7.89634C21.7193 7.8174 21.7825 7.75417 21.8614 7.70678C21.9246 7.67523 22.0036 7.65939 22.0984 7.65939C22.2247 7.65939 22.3195 7.69095 22.3827 7.73834C22.4458 7.78573 22.4932 7.86479 22.5091 7.94374L22.3195 7.9754C22.3037 7.92801 22.2721 7.89635 22.2405 7.86479C22.209 7.83312 22.1616 7.8174 22.0984 7.8174C22.0194 7.8174 21.9404 7.84895 21.893 7.89634C21.8456 7.94374 21.814 8.03852 21.814 8.1333C21.814 8.24391 21.8456 8.33869 21.893 8.40191C21.9404 8.46503 22.0194 8.48086 22.0984 8.48086C22.1458 8.48086 22.1773 8.46503 22.2247 8.4493C22.2721 8.43347 22.3037 8.41764 22.3353 8.38608V8.27547H22.0984ZM24.0413 8.63887V7.65939H24.7679V7.8174H24.2466V8.03852H24.7363V8.19652H24.2466V8.46503H24.7837V8.62303H24.0413V8.63887Z" fill="black" />
                        </svg>

                    </div>

                    <div className="block-pages" style={{ pointerEvents: 'none' }}>
                        <div className="current-pages" style={this.props.count > 0 ? { top: 0, userSelect: 'none' } : { userSelect: 'none' }}>
                            <span>Отображено</span>
                            <span>{Math.floor(this.state.start) === 0 ? 1 : Math.floor(this.state.start) + 1}-{Math.floor(this.state.start + (Math.floor(window.innerHeight * 1.5 / (18 + 18 * this.props.zoom < 18 ? 18 : 18 + 18 * this.props.zoom)) * 0.59) - 1)}</span>
                        </div>
                        <div className="order-select" style={this.props.count > 0 ? { height: 12, userSelect: 'none' } : { userSelect: 'none' }}>
                            <span>Выделено</span>
                            <span>{this.props.count}</span>
                        </div>
                    </div>
                </div>
                <div className="block-btn" >
                    <button className="zoomBtn zoomMinus" onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.zoomMinus;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} onClick={e => {
                            if (this.props.zoom - 0.05 > -0.20)

                                this.props.changeZoom(Math.round((this.props.zoom - 0.05) * 100) / 100)
                        }}>-
                    </button>
                    <button className="zoomBtn zoomPlus" onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.zoomPlus;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth + posElement.width + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} onClick={e => {
                            if (this.props.zoom + 0.05 < 0.25)
                                this.props.changeZoom(Math.round((this.props.zoom + 0.05) * 100) / 100)
                        }}>+
                    </button>
                    <svg width="16" className='refresh btn-header' height="15" onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.refresh;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.getElementById("tooltipBtn").offsetWidth - posElement.width - 5) / 2 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} onClick={e => {
                            this.props.changeRefresh(true);
                            this.setState({ rotate: this.state.rotate + 360 }, () => {
                                e.target.style.transition = '0.4s';
                                e.target.style.transform = 'rotate(' + this.state.rotate + 'deg)'
                                e.target.lastChild.style.strokeOpacity = 0.5;
                            })

                        }
                        } style={{ marginRight: 5 }} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ pointerEvents: 'none' }} d="M14.4163 9.48857C13.6094 12.0955 11.0644 14 8.04995 14C4.38639 14 1.41631 11.1875 1.41631 7.71809C1.41631 4.24872 4.38639 1.43612 8.04995 1.43612C10.4773 1.43612 12.6011 2.67076 13.7568 4.51321M13.8416 1L13.7837 4.55667L10.0916 4.49239" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <IconButton source={settings} alt={"settings"} onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.settings;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.getElementById("tooltipBtn").offsetWidth - posElement.width - 5) / 2 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} onClick={this.moduleBtn} />
                    <IconButton source={accept} alt={"accept"} onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.submit;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.getElementById("tooltipBtn").offsetWidth - posElement.width - 5) / 2 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} onClick={this.importBtn} />
                    <IconButton source={plus} alt={"plus"} onClick={e => this.props.setModal(true)} onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.addOrder;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.getElementById("tooltipBtn").offsetWidth - posElement.width - 5) / 2 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} />

                    <IconButton source={bell} alt={"bell"} onMouseEnter={e => {
                        timer = setTimeout(() => {


                            document.getElementById("tooltipBtn").style.fontSize = '12px';

                            document.getElementById("tooltipBtn").innerText = hints.notification;

                            let posElement = e.target.getBoundingClientRect();

                            document.getElementById("tooltipBtn").style.left = posElement.x - (document.getElementById("tooltipBtn").offsetWidth - posElement.width - 5) / 2 + "px";
                            document.getElementById("tooltipBtn").style.top = posElement.y + 30 + "px";
                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                        }, 250);

                    }}
                        onMouseLeave={e => {
                            document.getElementById("tooltipBtn").style.animation = '';
                            clearTimeout(timer);
                        }} count={20} onClick={this.notificationBtn} />
                </div>
                <div className="notifications">
                    {this.state.showNotification && <> <div className="noti-header"><span onClick={this.noteBtn} className="btn-not btn-style">Уведомления</span><span onClick={this.techBtn} className="btn-tech">Техническое</span></div>
                        <div className="block-not">
                            <div className="call">
                                <div><span className="call-header"><img src={phone} alt="" />Пропущеный звонок</span></div>
                                <div><span>Анатолий</span></div>
                                <div><span>+3809696966</span></div>
                            </div>
                            <div className="reminder">
                                <div><span className="reminder-not"><img src={calenyellow} alt="" />Напоминание</span></div>
                                <div>Перезвонить клиенту <br /> <span className="call-name">Анатолий</span> <span className="call-num">+3809696966</span></div>
                                <div>17:40 05.01.2021</div>
                            </div>
                            <div className="new-order">
                                <div ><span className="new"><img src={sumka} alt="" />Новый заказ</span></div>
                                <div><span className="id">id 264353</span></div>
                            </div>
                        </div>
                        <div className="tech-note">
                            <div className="tech">
                                <div><span className="tech-header"><img src={infoyellow} alt="" />Обновление деклараций Нова Пошта</span></div>
                                <div><span>204000161913885  Номер не найдено</span></div>
                                <div><span>204000161913885  Нова Пошта ожидает поступления от отправителя</span></div>
                                <div className="btn-last-posit"><span className="btn-last">Показать последние</span></div>
                            </div>
                            <div className="tech">
                                <div><span className="tech-header"><img src={infoyellow} alt="" />Обновление деклараций Укрпочта</span></div>
                                <div><span>0503325159555  Shipment not found</span></div>
                                <div><span>0503325159555  Shipment not found</span></div>
                            </div>
                        </div> </>}
                </div>

                <div className="modul-block">
                    {this.state.showModal && <div className="modul-wrap">
                        <div className="modul-header btn-style">Дополнения и расширения</div>
                        <div className="modul-header-1">Дополнительно:</div>
                        <ul className="modul-ul">
                            <li className="modul-list changeComm" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.changeComm;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={redactor} alt="" />Редактировать коментарий</li>
                            <li className="modul-list sendSMS" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.sendSMS;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={sendsms} alt="" />Отправить SMS</li>
                            <li className="modul-list changeStatus" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.changeStatus;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={changestatus} alt="" />Сменить статус</li>
                            <li className="modul-list copy"
                                onMouseEnter={e => {
                                    timer = setTimeout(() => {


                                        document.getElementById("tooltipBtn").style.fontSize = '12px';

                                        document.getElementById("tooltipBtn").innerText = hints.copy;

                                        let posElement = e.target.getBoundingClientRect();

                                        document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                        document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                        document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                    }, 250);

                                }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={copy} alt="" />Копировать</li>
                            <li className="modul-list delet" onClick={e => {
                                fetch('http://192.168.0.197:3005/order', {
                                    method: 'DELETE',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(this.props.list)
                                });
                                this.props.changeRefresh(true);
                                this.moduleBtn()
                            }} onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.delet;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={del} alt="" />Удалить</li>
                        </ul>
                        <div className="modul-header-2">Расширения модулей:</div>
                        <ul className="modul-ul">
                            <li className="modul-list none">Новая почта</li>
                            <li className="modul-list createTtn" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.createTtn;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={createttt} alt="" />Создать ТТН</li>
                            <li className="modul-list none">Nextel</li>
                            <li className="modul-list avtoobzvon" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.avtoobzvon;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={autocell} alt="" />Автообзвон</li>
                        </ul>
                    </div>}
                </div>

                <div className="import-block">
                    {this.state.showImport && <div className="import-wrap">
                        <div className="import-header btn-style">Импорт и экспорт данных</div>
                        <ul className="import-ul">
                            <li className="import-list pechat"><img src={pechat} alt="" />Печать таблицы</li>
                            <li className="import-list exportExcel"><img src={exportdata} alt="" />Экспорт данных в Excel</li>
                            <li className="import-list importExcel" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.importExcel;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={importdata} alt="" />Импорт заказов из Excel</li>
                            <li className="import-list exportDrop" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.exportDrop;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={exportdata} alt="" />Экспорт заказов для Dropshipping</li>
                            <li className="import-list importDrop" onMouseEnter={e => {
                                timer = setTimeout(() => {


                                    document.getElementById("tooltipBtn").style.fontSize = '12px';

                                    document.getElementById("tooltipBtn").innerText = hints.importDrop;

                                    let posElement = e.target.getBoundingClientRect();

                                    document.getElementById("tooltipBtn").style.left = posElement.x - document.getElementById("tooltipBtn").offsetWidth - 20 + "px";
                                    document.getElementById("tooltipBtn").style.top = posElement.y + "px";
                                    document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.5s forwards';


                                }, 250);

                            }}
                                onMouseLeave={e => {
                                    document.getElementById("tooltipBtn").style.animation = '';
                                    clearTimeout(timer);
                                }}><img src={importdata} alt="" />Импорт заказов от Dropshipping</li>
                        </ul>
                    </div>}
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);