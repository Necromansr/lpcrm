import './dropdown.css';

import React, { Component } from 'react';

// import Scroll from './scroll';
import ScrollBar from './ScrollBar';



let timer = null;

class DropdownMedium extends Component {


    constructor(props) {
        super(props);
        this.refBlock = React.createRef();

        this.state = {
            arr: [],
            open: false,
            onChange: false,
            sort: '',
            select: false,

        }
        this.handle = this.handle.bind(this);


    }




    handle(e) {
        if (this.refBlock.current && !this.refBlock.current.contains(e.target) && this.state.select) {
            this.props.onWrapper(false);
            this.props.query();
        }   
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handle);
    }

    componentDidMount() {
        if(!this.state.select) {
            document.addEventListener("click", this.handle, true);
        }

        let temp = this.props.options.map(e => { return { ...e, select: false } });
        temp[0].select = true;
        this.setState({
            arr: temp
        })
    }


    open = (e) => {

        if (!this.props.wrapper) {
            this.setState({
                open: true,
            })
        }

        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 300);

    }


    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {
            document.querySelector('.refresh').lastChild.style.strokeOpacity = 1;
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

        if ((this.props.resetSort !== prevProps.resetSort)) {
            this.setState({
                sort: '',
            })
        }
    }


    close = (e) => {
        document.getElementById("tooltipBtn").style.animation = '';
        document.getElementById("tooltipBtn").style.fontSize = '11px';
        this.setState({
            open: false
        })
        if (!this.props.wrapper)
            this.props.setRange(true)

        clearTimeout(timer)
    }


    Search = data => {
        let d = Object.filter(data, ([name, text]) => text !== '' && text.length !== 0);
        this.props.updateLoading(false);
        fetch('http://192.168.0.197:3005/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "query": Object.keys(d).length > 0 ? d : '',
                "start": 0,
                "end": (Math.floor(document.body.clientHeight * 1.5 / (18 + 18))) * 3
            })
        }).then(x => x.json()).then(x => {
            this.props.updateLoading(true);
            this.props.setArr(x.orders.map(x => { return { ...x, select: false } }));
        })
    }

    onChange = (index) => {
        let arr = this.state.arr;
        let { search, keys } = this.props;

        if (index === 0) {
            arr[index].select = !arr[index].select;
            arr.slice(1).forEach(x => x.select = false)
            document.getElementById("tooltipBtn").style.animation = '';
            this.props.onWrapper(false);
            this.setState({ arr: [...arr], select: false, open: false })
            search[keys] = '';
            this.Search(search)
            return;
        }
        else {
            arr[0].select = false;
            arr[index].select = !arr[index].select;
        }

        let arrays = arr.filter(x => x.select === true).map(x => x.icon?.split(' ') && x.icon.split(' ')[0] !== 'icon-Exclude-2' ? x.icon.split(' ')[0] : x.title ? x.title : x.text);
        this.props.search[this.props.keys] = arrays;

        this.props.onWrapper(true);
        this.setState({ arr: [...arr], select: true })
    }

    onClick = e => {
        this.props.setResetSort(!this.props.resetSort);

        this.props.updateLoading(false);

        if (this.state.sort === '' || this.state.sort === 'down') {
            setTimeout(() => {

                this.setState({ sort: 'up' })
            }, 0);
            this.props.search['orders'] = [[this.props.keys, "ASC"]]


        } else if (this.state.sort === 'up') {
            setTimeout(() => {

                this.setState({ sort: 'down' })
            }, 0);
            this.props.search['orders'] = [[this.props.keys, "DESC"]]


        }
       
        fetch('http://192.168.0.197:3005/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "query": Object.filter(this.props.search, ([name, text]) => text !== ''  && text.length !== 0),
                "end": Math.ceil((document.body.clientHeight / (18))) * 3
            })
        }).then(x => x.json()).then(x => {
            let arrays = x.orders.map(x => { return { ...x, select: false } })
            setTimeout(() => {
                this.props.updateLoading(true);

            }, 500);
            this.props.setArr(arrays, 'wrapper');
        });
        this.props.onWrapper(false);
        this.setState({ open: false, select: false })

    }



    render() {
        return (
            <div ref={this.refBlock} className="wrap-hide sort-menu" onMouseEnter={this.open} onMouseLeave={this.close} style={(this.state.select && this.props.wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
                {this.props.showColumn && <>    <div className="btn-wrap-medium">
                    <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-medium hide-arrow" : "btn-medium"} >
                        {this.state.arr.length > 0 &&
                            (this.state.arr.filter(x => x.select === true).length > 1 ?
                                <div className="list-medium p-p"><span className="list-item padding-left">????????????</span></div>
                                : this.state.arr.map((x, index) => {
                                    if (x?.text === '??????' && x.select === true) {
                                        return (
                                            <div key={index} className="list-medium all"><span className="list-item"><span></span></span></div>
                                        )
                                    } else if (x?.text === '??/??' && x.select === true) {
                                        return (
                                            <div key={index} className="list-medium p-p"><span className="list-item padding-left">??/??</span></div>
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
                        {(this.state.open || (this.state.select && this.props.wrapper)) && <ScrollBar height={90} width={this.props.width - 2}>
                            {this.state.arr.length > 0 && this.state.arr.map((x, index) => {
                                if (x?.text === '??????') {
                                    return (
                                        <div key={index} className={`list-medium all ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span>??????</span></span></div>
                                    )
                                } else if (x?.text === '??/??') {
                                    return (
                                        <div key={index} className={`list-medium p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} onMouseEnter={e => {
                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                            document.getElementById("tooltipBtn").innerText = x?.title;
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.1s forwards';
                                            let blockWidth = posElement.width;
                                            let screenWidth = document.body.clientWidth;
                                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 25 + 'px';
                                            }
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                clearTimeout(timer)
                                            }}><span className="list-item padding-left" style={{ pointerEvents: 'none' }}>??/?? </span></div>
                                    )
                                } else if (x?.text) {
                                    return (
                                        <div key={index} className={`list-medium p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} onMouseEnter={e => {
                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                            document.getElementById("tooltipBtn").innerText = x?.title;
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.1s forwards';
                                            let blockWidth = posElement.width;
                                            let screenWidth = document.body.clientWidth;
                                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 25 + 'px';
                                            }
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                clearTimeout(timer)
                                            }}><span className="list-item padding-left flags" style={{ pointerEvents: 'none' }}><span>{x.text}</span></span></div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className={`list-medium vodafone ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} onMouseEnter={e => {
                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                            document.getElementById("tooltipBtn").innerText = x?.title;
                                            let posElement = e.target.getBoundingClientRect();
                                            document.getElementById("tooltipBtn").style.left = posElement.x + e.target.offsetWidth + "px";
                                            document.getElementById("tooltipBtn").style.top = posElement.y - 3 + "px";
                                            document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.1s forwards';
                                            let blockWidth = posElement.width;
                                            let screenWidth = document.body.clientWidth;
                                            let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                            if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                                document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip - 25 + 'px';
                                            }
                                        }}
                                            onMouseLeave={e => {
                                                document.getElementById("tooltipBtn").style.animation = '';
                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                clearTimeout(timer)
                                            }}><span className="list-item" style={{ pointerEvents: 'none' }}><span data-img="" className={`${x.icon} icons`} style={{ pointerEvents: 'none' }} ></span></span></div>
                                    )
                                }
                            })}

                        </ScrollBar>}
                    </div></div>
                    <div className={(this.state.open || this.state.sort !== "") || (this.state.select && this.props.wrapper) ? "sort-btn sort-toggle" : "sort-btn"} onClick={this.onClick}>
                        {(this.state.sort !== "" || this.state.open || (this.state.select && this.props.wrapper)) && <>    <svg style={this.state.sort === 'up' ? { transform: 'scaleY(-1)' } : {}} width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.0608L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                        </svg>
                            <div className='wraps' style={{ transform: 'rotate(-180deg)', top: -35, right: 0 }}><div className='tooltips'>{'?????????????????????? ???????????? ??????'}</div></div></>}
                    </div>
                    {(this.state.sort !== "" || this.state.open || (this.state.select && this.props.wrapper)) && <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: 0 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>}
                </>}
            </div>
        )
    }


}



export default DropdownMedium;