import './dropdown.css';

import React, { Component } from 'react';

import Scroll from './scroll';


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

       
        if ((this.props.resetSort !== prevProps.resetSort)) {
            this.setState({
                sort: '',
            })
        }

    }

    open = (e) => {

        if (!this.props.wrapper) {
            this.setState({
                open: true,
            })
        }

        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 600);

    }


    close = (e) => {

        this.setState({
            open: false
        })
        if (!this.props.wrapper)
            this.props.setRange(true)

        clearTimeout(timer)
    }


    Search = data => {
        let d = Object.filter(data, ([name, text]) => text !== '');

        fetch('http://192.168.0.197:3004/search', {
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
            this.props.setArr(x);
        })
    }

    onChange = (index) => {
        let arr = this.state.arr;
        let { search, keys } = this.props;

        if (index === 0) {
            arr[index].select = !arr[index].select;
            arr.slice(1).forEach(x => x.select = false)
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


        this.props.search[this.props.keys] = arr.filter(x => x.select === true).map(x => x.icon?.split(' ') ? x.icon.split(' ')[0] : x.title ? x.title: x.text);
        console.log(this.props.search);
        this.props.onWrapper(true);
        this.setState({ arr: [...arr], select: true })
    }

    onClick = e => {
        this.props.setResetSort(!this.props.resetSort);


        if (this.state.sort === '' || this.state.sort === 'down') {
            setTimeout(() => {

                this.setState({ sort: 'up' })
            }, 0);

            this.props.search['orders'] = [[this.props.keys, "ASC"]]

            fetch('http://192.168.0.197:3005/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": Object.filter(this.props.search, ([name, text]) => text !== ''),
                    "end": Math.ceil((document.body.clientHeight / (18))) * 3
                })
            }).then(x => x.json()).then(x => {
                let arrays = x.map(x => { return { ...x, select: false } })
                console.log(arrays.length);
                this.props.setArr(arrays, 'wrapper');
            });

        } else if (this.state.sort === 'up') {
            setTimeout(() => {

                this.setState({ sort: 'down' })
            }, 0);
            this.props.search['orders'] = [[this.props.keys, "DESC"]]

            fetch('http://192.168.0.197:3005/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": Object.filter(this.props.search, ([name, text]) => text !== ''),
                    "end": Math.ceil((document.body.clientHeight / (18))) * 3
                })
            }).then(x => x.json()).then(x => {
                let arrays = x.map(x => { return { ...x, select: false } })
                console.log(arrays.length);
                this.props.setArr(arrays, 'wrapper');
            });
        }
        this.props.onWrapper(false);
        this.setState({ open: false, select: false })
    }

    render() {
        return (
            <div className="small-buttons sort-menu" onMouseEnter={this.open} onMouseLeave={this.close} style={(this.state.select && this.props.wrapper) ? { zIndex: 999, visibility: 'visible' } : {}}>
                     {this.props.showColumn && <>  <div className="border-white" style={{ height: 16, background: '#d4d4d4', ...this.props.style }}>
                    <div className="btn-wrap width23" style={this.state.open || (this.state.select && this.props.wrapper) ? { width: 53 } : this.props.width ? { width: this.props.width } : { width: 23 }}>
                        <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper || (this.state.arr.filter(x => x.select === true && x?.text !== 'Все').length !== 0) ? "btn-small hide-arrow" : "btn-small"}>
                            {this.state.arr.length > 0 &&
                                (this.state.arr.filter(x => x.select === true).length > 1 ?
                                    <span className="list-item padding-left">Фильтр</span>
                                    : this.state.arr.map((x, index) => {
                                        if (x?.text === 'Все' && x.select === true) {
                                            return (
                                                <span key={index} className="list-item padding-left"></span>
                                            )
                                        } else if (x?.text === 'П/п' && x.select === true) {
                                            return (
                                                <span key={index}  className="list-item padding-left">П/п</span>
                                            )
                                        } else if (x?.text && x.select === true) {
                                            return (
                                                <span key={index}  className={"list-item padding-left " + x.class}>{x.text}</span>
                                            )
                                        } else if (x.select === true) {
                                            return (
                                                <span key={index}  className="list-item"><span data-img="" className={`${x.icon} icons speed`}></span></span>
                                            )
                                        }
                                    }))}
                        </div>
                        <div className={this.state.open || (this.state.select && this.props.wrapper) ? "block1 speed toggle " : "block1"}>
                            {(this.state.open || (this.state.select && this.props.wrapper)) && <Scroll width={this.props.scrollWidth}>
                                {this.state.arr.length > 0 && this.state.arr.map((x, index) => {
                                    if (x?.text === 'Все') {
                                        return (
                                            <div key={index} className={`list-small all ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span>Все</span></span></div>
                                        )
                                    } else if (x?.text === 'П/п') {
                                        return (
                                            <div key={index} className={`list-small p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)} onMouseEnter={e => document.querySelector('.wrapper').style.width = (this.props.scrollWidth ? this.props.scrollWidth : 53) + 300 + 'px'} onMouseLeave={e => document.querySelector('.wrapper').style.width = 'calc(100% - 17px)'}><span className="list-item padding-left" ><span>П/п</span> <div className='wraps' style={{ left: this.props.scrollWidth ? this.props.scrollWidth : 53 }}><div className='tooltips'>{"Пустое поле"}</div></div></span></div>
                                        )
                                    } else if (x?.text) {
                                        return (
                                            <div key={index} className={`list-small p-p ${x.select && 'select-btn'} ${!parseInt(x?.text) ? 'country' : 'number'}`} onClick={x => this.onChange(index)} onClick={x => this.onChange(index)} onMouseEnter={e => document.querySelector('.wrapper').style.width = (this.props.scrollWidth ? this.props.scrollWidth : 53) + 300 + 'px'} onMouseLeave={e => document.querySelector('.wrapper').style.width = 'calc(100% - 17px)'}><span className={"list-item padding-left " + x.class}><span>{x.text}</span>{!parseInt(x?.text) && <div className='wraps' style={{ left: this.props.scrollWidth ? this.props.scrollWidth : 53 }}><div className='tooltips'>{x?.title}</div></div>}</span></div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} onMouseEnter={e => document.querySelector('.wrapper').style.width = (this.props.scrollWidth ? this.props.scrollWidth : 53) + 300 + 'px'} onMouseLeave={e => document.querySelector('.wrapper').style.width = 'calc(100% - 17px)'} className={`list-small vodafone ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item" style={{ pointerEvents: 'none' }}><span data-img="" className={`${x.icon} icons`} style={{ pointerEvents: 'none' }}></span><div className='wraps' style={{ left: this.props.scrollWidth ? this.props.scrollWidth : 53 }}><div className='tooltips'>{x?.title}</div></div></span></div>
                                        )
                                    }
                                })}
                            </Scroll>}
                        </div>
                    </div>
                </div>
                <div className={(((this.state.open || this.state.sort !== "") && (!(this.state.arr.filter(x => x.select === true && x?.text !== 'Все').length > 0) || this.state.open)) || (this.state.select && this.props.wrapper)) ? "sort-btn sort-toggle" : "sort-btn"} onClick={this.onClick}>
                    {(this.state.sort !== "" || this.state.open || (this.state.select && this.props.wrapper)) && <> <svg style={this.state.sort === 'up' ? { transform: 'scaleY(-1)' } : {}} width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.0608L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                    </svg>
                        <div className='wraps' style={{ transform: 'rotate(-180deg)', top: -35, right: 0 }}><div className='tooltips'>{'Сортировать данные ↑↓'}</div></div> </>}
                </div>
                {(this.state.sort !== "" || this.state.open || (this.state.select && this.props.wrapper)) && <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: 0 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>}
                </>}
                 </div>
        )
    }


}



export default DropdownSmall;