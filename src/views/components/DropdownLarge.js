import './dropdown.css';

import React, { Component } from 'react';
import Scroll from './scroll';



let timer = null;



let colors = [
    { text: 'Все', color: '', select: true },
    { text: 'Успешно не выполненоggggggggggggggggggggggggggggggggggggggggggggggggggggggg qgggggg', color: 'color-C94F62-before', select: false },
    { text: 'Новый', color: 'color-515151-before', select: false },
    { text: 'Принят', color: 'color-91d100-before', select: false },
    { text: 'Отказ', color: 'color-fd7777-before', select: false },
    { text: 'Отправлен', color: 'color-e2d317-before', select: false },
    { text: 'Завершён', color: 'color-00CC00-before', select: false },
    { text: 'Успешно выполнено', color: 'color-9C02A7-before', select: false },
]



class DropdownLarge extends Component {

    constructor(props) {
        super(props);
        this.refInput = React.createRef();
        this.state = {
            arr: [],
            open: false,
            onChange: false,
            search: '',
            select: false,
            sort: '',
            show: false
        }
    }


    open = (e) => {
        this.refInput.current.focus()
        if (!this.props.wrapper) {
            this.setState({
                open: true,
            })
        }
        this.setState({ search: '' })
        this.refInput.current.value = '';
        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 300);
    }



    componentDidMount() {
        let temp = this.props.data.map(e => { return { ...e, select: false } });
        temp[0].select = true;
        this.setState({
            arr: temp
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {

            if (this.state.arr.filter(x => x.select === true).length > 1) {
                this.refInput.current.value = 'Фильтр';

            } else if (this.state.arr.filter(x => x.select === true).length === 1 && this.state.arr.filter(x => x.select === true)[0].name !== "Все") {
                this.refInput.current.value = this.state.arr.filter(x => x.select === true)[0].name;
            } else {
                let temp = this.state.arr;
                temp[0].select = true;
                this.refInput.current.value = '';
                this.setState({ arr: [...temp] })
            }
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
            this.refInput.current.value = '';
        }
    }

    Search = data => {
        let d = Object.filter(data, ([name, text]) => text !== '');
        fetch('http://vanl0073259.online-vm.com:3004/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "query": Object.keys(d).length > 0 ? d : ''
            })
        }).then(x => x.json()).then(x => {
            this.props.setArr(x);
        })
    } 

    onChange = (text) => {
        let arr = this.state.arr;
        let { search, keys } = this.props;
        if (text === 'Все') {
            arr.filter(x => x.name === text)[0].select = !arr.filter(x => x.name === text)[0].select;
            arr.slice(1).forEach(x => x.select = false)
            this.props.onWrapper(false);
            this.setState({ arr: [...arr], select: false, open: false })
            search[keys] = '';
            this.Search(search)
            return;
        }
        else {
            if (arr[0].name === 'Все')
                arr[0].select = false;
            arr.filter(x => x.name === text)[0].select = !arr.filter(x => x.name === text)[0].select;
        }
        this.props.search[this.props.keys] = arr.filter(x => x.select === true).map(x => x.id);
        this.props.onWrapper(true);
        this.refInput.current.focus()
        this.setState({ arr: [...arr], select: true })
    }

    close = (e) => {

        this.setState({
            open: false
        })
        if (!this.state.select) {

            this.refInput.current.blur()
            if (this.state.arr.filter(x => x.select === true).length > 1) {
                this.refInput.current.value = 'Фильтр';
            } else if (this.state.arr.filter(x => x.select === true).length === 1 && this.state.arr.filter(x => x.select === true)[0].name !== "Все") {
                this.refInput.current.value = this.state.arr.filter(x => x.select === true)[0].name;
            } else {
                let temp = this.state.arr;
                temp[0].select = true;
                this.setState({ search: '', arr: [...temp] })
            }
            this.setState({
                select: false
            })
        }

        if (!this.props.wrapper)
            this.props.setRange(true)

        clearTimeout(timer)

    }

    changeValue = (name, e) => {
        if (e.target.value.match(/(^)[а-яёa-z]/g))
            this.refInput.current.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);

        this.setState({ [name]: e.target.value })
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
                <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-wrap-large hide-arrow" : "btn-wrap-large"}>
                    <input ref={this.refInput} style={(this.state.open || this.state.sort !== "") || this.props.wrapper ? { paddingRight: 18 } : {}} autoComplete={"new-password"} type="text" className="input-btn-large inputStatus find" onChange={e => this.changeValue('search', e)} />
                    <div className={this.state.open || (this.state.select && this.props.wrapper) ? "block1 speed toggle" : "block1"}>
                        {(this.state.open || (this.state.select && this.props.wrapper)) && <Scroll width={this.props.width + 26} >
                            {this.state.arr.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase())).map((x, index) => (
                                <div onClick={e => this.onChange(x.name)} key={index} className={x.select ? "list-large select-btn" : "list-large"}
                                    onMouseEnter={e => document.querySelector('.wrapper').style.width = (this.props.width ? this.props.width + 26 : 53) + 300 + 'px'} onMouseLeave={e => document.querySelector('.wrapper').style.width = 'calc(100% - 17px)'}
                                ><span className="list-item"><span  style={{ maxWidth: this.props.width, position: 'relative'}}
                                    onMouseEnter={e => {
                                        if (e.target.scrollWidth >= this.props.width) {
                                            this.setState({ show: true })
                                        }
                                    }}
                                        onMouseLeave={e => this.setState({ show: false })}>{x.name} <span className={'status-before'} style={{backgroundColor: x.color}}></span></span>
                                        <div className={(this.state.show ? 'wraps' : 'hidden') } style={{ left: this.props.width ? this.props.width + 11 : 53 }}>

                                            <div className='tooltips'>{x.name}</div>
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </Scroll>}
                    </div>
                    <div className={(this.state.open || this.state.sort !== "") || (this.state.select && this.props.wrapper) ? "sort-btn sort-toggle" : "sort-btn"} onClick={this.onClick}>
                        <svg style={this.state.sort === 'up' ? { transform: 'scaleY(-1)' } : {}} width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                        </svg>
                        <div className='wraps' style={{ transform: 'rotate(-180deg)', top: -35, right: 0 }}><div className='tooltips'>{'Сортировать данные ↑↓'}</div></div>
                    </div>
                    <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
                    {(this.state.open || (this.state.select && this.props.wrapper)) && <div className="countFindFunction"

                        onMouseEnter={e => {
                            timer = setTimeout(() => {

                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                document.getElementById("tooltipBtn").innerHTML = `Статусов в фильтре:<br>- найдено ${this.state.arr.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()) && x.name !== 'Все').length - 1}<br>- выбрано ${this.state.arr.filter(x => x.select === true && x.name !== 'Все').length}`;
                                let posElement = e.target.getBoundingClientRect();
                                document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                document.getElementById("tooltipBtn").style.top = posElement.y + 24 + "px";
                                document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
                                let blockWidth = posElement.width;
                                let screenWidth = document.body.clientWidth;
                                let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                                if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                                    document.getElementById("tooltipBtn").style.left = posElement.x - (widthTooltip) + 'px';
                                }
                            }, 150)
                        }}
                        onMouseLeave={e => {
                            clearTimeout(timer);
                            document.getElementById("tooltipBtn").style.animation = '';

                        }}>
                        ({this.state.arr.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()) && x.name !== 'Все').length}/<span>{this.state.arr.filter(x => x.select === true && x.name !== 'Все').length}</span>)</div>}
                </div>
            </div>
        )
    }

}


export default DropdownLarge;