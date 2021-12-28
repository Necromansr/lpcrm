import './dropdown.css';

import React, { Component } from 'react';


import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



let timer = null;


class DropdownSmall extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            open: false,
            onChange: false,
            sort: '',
            select: false,

        }


    }

    componentDidMount() {
        let temp = this.props.options.map(e => { return { ...e, select: false } });
        temp[0].select = true;
        this.setState({
            arr: temp
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {
            this.setState({
                select: false
            })
        }

        if ((this.props.refresh !== prevProps.refresh)) {
            let arr = this.state.arr;
            arr[0].select = true;
            arr.slice(1).forEach(x => x.select = false)
            this.setState({
                arr: [...arr],
                open: false,
                onChange: false,
                search: '',
                select: false,
                sort: '',
            })
        }
    }

    open = (e) => {
        if (!this.props.wrapper && this.state.select) {
            document.querySelectorAll('.simplebar-content-wrapper').forEach(x => x.scrollTo({
                top: 0,
                behavior: "smooth"
            }))
        }

        if (!this.props.wrapper) {
            this.setState({
                open: true,
            })
        }



    }


    close = (e) => {

        this.setState({
            open: false
        })

    }



    onChange = (index) => {
        let arr = this.state.arr;
        if (index === 0) {
            arr[index].select = !arr[index].select;
            arr.slice(1).forEach(x => x.select = false)
            this.setState({ arr: [...arr], select: false, open: false })
            return;
        }
        else {
            arr[0].select = false;
            arr[index].select = !arr[index].select;
        }
        this.props.onWrapper(true);
        this.setState({ arr: [...arr], select: true })
    }

    onClick = e => {
        if (this.state.sort === '' || this.state.sort === 'down') {
            this.setState({ sort: 'up' })
        } else if (this.state.sort === 'up') {
            this.setState({ sort: 'down' })
        }
        this.props.onWrapper(false);
        this.setState({ open: false, select: false })
    }

    render() {
        return (
            <div className="small-buttons sort-menu" onMouseEnter={this.open} onMouseLeave={this.close} style={(this.state.select && this.props.wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
                <div className="border-white" style={{ height: 16, background: '#d4d4d4', ...this.props.style }}>
                    <div className="btn-wrap width23" style={this.state.open || (this.state.select && this.props.wrapper) ? { width: 53 } : this.props.width ? { width: this.props.width } : { width: 23 }}>
                        <div className={(this.state.open || this.state.sort !== "") || (this.state.arr.filter(x => x.select === true && x?.text !== 'Все').length !== 0) ? "btn-small hide-arrow" : "btn-small"}>
                            {this.state.arr.length > 0 &&
                                (this.state.arr.filter(x => x.select === true).length > 1 ?
                                    <span className="list-item padding-left">Фильтр</span>
                                    : this.state.arr.map((x, index) => {
                                        if (x?.text === 'Все' && x.select === true) {
                                            return (
                                                <span className="list-item padding-left"></span>
                                            )
                                        } else if (x?.text === 'П/п' && x.select === true) {
                                            return (
                                                <span className="list-item padding-left">П/п</span>
                                            )
                                        } else if (x?.text && x.select === true) {
                                            return (
                                                <span className={"list-item " + x.class}>{x.text}</span>
                                            )
                                        } else if (x.select === true) {
                                            return (
                                                <span className="list-item"><span data-img="" className={`${x.icon} icons speed`}></span></span>
                                            )
                                        }
                                    }))}
                        </div>
                        <div className={this.state.open || (this.state.select && this.props.wrapper) ? "block1 speed toggle " : "block1"}>
                            {(this.state.open || (this.state.select && this.props.wrapper)) && <SimpleBar autoHide={false} style={{ maxHeight: 90 }}>
                                {this.state.arr.length > 0 && this.state.arr.map((x, index) => {
                                    if (x?.text === 'Все') {
                                        return (
                                            <div key={index} className={`list-small all ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span>Все</span></span></div>
                                        )
                                    } else if (x?.text === 'П/п') {
                                        return (
                                            <div key={index} className={`list-small p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} ><span className="list-item padding-left" onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                    document.getElementById("tooltipBtn").innerText = x?.title;
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + 19 + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = '0.1s ease 0.1s 1 normal forwards running delay-btn';
                                                    let blockWidth = posElement.width;
                                                    let screenWidth = document.body.clientWidth;
                                                    let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                                    if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                        document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 19 + 'px';
                                                    }
                                                }, 50)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                    clearTimeout(timer)
                                                }}>П/п</span></div>
                                        )
                                    } else if (x?.text) {
                                        return (
                                            <div key={index} className={`list-small p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className={"list-item padding-left " + x.class}>{x.text}</span></div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} className={`list-small vodafone ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} ><span className="list-item"><span data-img="" className={`${x.icon} icons`} onMouseEnter={e => {
                                                timer = setTimeout(() => {
                                                    document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                    document.getElementById("tooltipBtn").innerText = x?.title;
                                                    let posElement = e.target.getBoundingClientRect();
                                                    document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + 19 + "px";
                                                    document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                                    document.getElementById("tooltipBtn").style.animation = '0.1s ease 0.1s 1 normal forwards running delay-btn';
                                                    let blockWidth = posElement.width;
                                                    let screenWidth = document.body.clientWidth;
                                                    let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                                    if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                        document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 19 + 'px';
                                                    }
                                                }, 50)
                                            }}
                                                onMouseLeave={e => {
                                                    document.getElementById("tooltipBtn").style.animation = '';
                                                    document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                    clearTimeout(timer)
                                                }}></span></span></div>
                                        )
                                    }
                                })}
                            </SimpleBar>}
                        </div></div></div>
                <div className={(((this.state.open || this.state.sort !== "") && (!(this.state.arr.filter(x => x.select === true && x?.text !== 'Все').length > 0) || this.state.open)) || (this.state.select && this.props.wrapper)) ? "sort-btn sort-toggle" : "sort-btn"} style={this.state.sort === 'up' ? { transform: 'scaleX(-1)' } : {}} onClick={this.onClick} onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '11px';
                        document.getElementById("tooltipBtn").innerText = 'Сортировать данные ↑↓';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 18 + "px";
                        document.getElementById("tooltipBtn").style.animation = '0.1s ease 0.1s 1 normal forwards running delay-btn';
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + 'px';
                        }
                    }, 50)
                }}
                    onMouseLeave={e => {
                        clearTimeout(timer);
                        document.getElementById("tooltipBtn").style.animation = '';
                        document.getElementById("tooltipBtn").style.fontSize = '11px';
                    }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                    </svg>
                </div>
                <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
            </div>
        )
    }


}



export default DropdownSmall;