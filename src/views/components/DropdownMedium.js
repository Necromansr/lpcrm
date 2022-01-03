import './dropdown.css';

import React, { Component } from 'react';


import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';




let timer = null;

class DropdownMedium extends Component {


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


    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {
            this.setState({
                select: false
            })
            document.getElementById("tooltipBtn").style.animation = '';

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


    close = (e) => {

        this.setState({
            open: false
        })
        document.getElementById("tooltipBtn").style.animation = '';


    }



    onChange = (index) => {
        let arr = this.state.arr;
        if (index === 0) {
            arr[index].select = !arr[index].select;
            arr.slice(1).forEach(x => x.select = false)
            document.getElementById("tooltipBtn").style.animation = '';
            this.props.onWrapper(false);
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
            <div className="wrap-hide sort-menu" onMouseEnter={this.open} onMouseLeave={this.close} style={(this.state.select && this.props.wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
                <div className="btn-wrap-medium" style={{ width: this.props.width ? this.props.width : {} }}>
                    <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-medium hide-arrow" : "btn-medium"} style={{ width: this.props.width ? this.props.width : {} }}>
                        {this.state.arr.length > 0 &&
                            (this.state.arr.filter(x => x.select === true).length > 1 ?
                                <div className="list-medium p-p"><span className="list-item padding-left">Фильтр</span></div>
                                : this.state.arr.map((x, index) => {
                                    if (x?.text === 'Все' && x.select === true) {
                                        return (
                                            <div key={index} className="list-medium all"><span className="list-item"><span></span></span></div>
                                        )
                                    } else if (x?.text === 'П/п' && x.select === true) {
                                        return (
                                            <div key={index} className="list-medium p-p"><span className="list-item padding-left">П/п</span></div>
                                        )
                                    } else if (x?.text && x.select === true) {
                                        return (
                                            <div key={index} className="list-medium p-p"><span className="list-item padding-left flags speed">{x.text}</span></div>
                                        )
                                    }
                                    else if (x.select === true) {
                                        return (
                                            <div key={index} className="list-medium vodafone"><span className="list-item"><span data-img="" className={`${x.icon} icons speed`}></span></span></div>
                                        )
                                    }
                                }))}
                    </div>
                    <div className={this.state.open || (this.state.select && this.props.wrapper) ? "block1 speed toggle" : "block1"}>
                        {(this.state.open || (this.state.select && this.props.wrapper)) && <SimpleBar autoHide={false} style={{ maxHeight: 90 }}>
                            {this.state.arr.length > 0 && this.state.arr.map((x, index) => {
                                if (x?.text === 'Все') {
                                    return (
                                        <div key={index} className={`list-medium all ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span>Все</span></span></div>
                                    )
                                } else if (x?.text === 'П/п') {
                                    return (
                                        <div key={index} className={`list-medium p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} ><span className="list-item padding-left" onMouseEnter={e => {
                                            timer = setTimeout(() => {
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                document.getElementById("tooltipBtn").innerText = x?.title;
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + 19 + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                                document.getElementById("tooltipBtn").style.opacity = 1;
                                                document.getElementById("tooltipBtn").style.visibility = 'visible'
                                                let blockWidth = posElement.width;
                                                let screenWidth = document.body.clientWidth;
                                                let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                                if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                    document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 25 + 'px';
                                                }
                                            }, 250)
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                clearTimeout(timer)
                                            }}>П/п</span></div>
                                    )
                                } else if (x?.text) {
                                    return (
                                        <div key={index} className={`list-medium p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} ><span className="list-item padding-left flags">{x.text}</span></div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className={`list-medium vodafone ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} onMouseEnter={e => {
                                            e.target.querySelector('.icons').style.opacity = 0.5;
                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                            document.getElementById("tooltipBtn").innerText = x?.title;
                                            timer = setTimeout(() => {
                                                let posElement = e.target.getBoundingClientRect();
                                                document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + "px";
                                                document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                                document.getElementById("tooltipBtn").style.opacity = 1;
                                                document.getElementById("tooltipBtn").style.visibility = 'visible'
                                                let blockWidth = posElement.width;
                                                let screenWidth = document.body.clientWidth;
                                                let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                                if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                    document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 25 + 'px';
                                                }
                                            }, 200);

                                        }}
                                            onMouseLeave={e => {
                                                e.target.querySelector('.icons').style.opacity = 1;
                                                document.getElementById("tooltipBtn").style.opacity = 0;
                                                document.getElementById("tooltipBtn").style.visibility = 'hidden'
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                clearTimeout(timer)
                                            }}><span className="list-item" style={{ pointerEvents: 'none' }}><span data-img="" className={`${x.icon} icons`} style={{ pointerEvents: 'none' }} ></span></span></div>
                                    )
                                }
                            })}

                        </SimpleBar>}
                    </div></div>
                <div className={(this.state.open || this.state.sort !== "") || (this.state.select && this.props.wrapper) ? "sort-btn sort-toggle" : "sort-btn"} style={this.state.sort === 'up' ? { transform: 'scaleX(-1)' } : {}} onClick={this.onClick} onMouseEnter={e => {
                    timer = setTimeout(() => {

                        document.getElementById("tooltipBtn").style.fontSize = '11px';
                        document.getElementById("tooltipBtn").innerText = 'Сортировать данные ↑↓';
                        let posElement = e.target.getBoundingClientRect();
                        document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                        document.getElementById("tooltipBtn").style.top = posElement.y + 18 + "px";
                        document.getElementById("tooltipBtn").style.opacity = 1;
                        document.getElementById("tooltipBtn").style.visibility = 'visible'
                        let blockWidth = posElement.width;
                        let screenWidth = document.body.clientWidth;
                        let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                        if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                            document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + 'px';
                        }
                    }, 250)
                }}
                    onMouseLeave={e => {
                        clearTimeout(timer)
                        document.getElementById("tooltipBtn").style.opacity = 0;
                        document.getElementById("tooltipBtn").style.visibility = 'hidden'
                        document.getElementById("tooltipBtn").style.fontSize = '11px';
                    }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.0608L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                    </svg>
                </div>
                <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
            </div>
        )
    }


}



export default DropdownMedium;