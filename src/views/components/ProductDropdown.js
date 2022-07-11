
import './dropdown.css';

import React, { Component, useEffect, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import ScrollBar from './ScrollBar';
import { connect } from "react-redux";
import debouce from "lodash.debounce";

const mapStateToProps = state => {
    return { zoom: state.zoom };
};
let timer = null;
const VirtualizedList = (props) => {
    const { numItems, itemHeight, windowHeight } = props;
    const [scrollTop, setScrollTop] = useState(0);
    const [fetching, setFetching] = useState(true);
    const [open, setOpen] = useState(true);
    const [folders, setFolders] = useState([]);
    // const items = [];

    useEffect(() => {


        if (props.folder !== 0 && scrollTop === 0) {
            setFolders(props.folder)
        }





        if ((folders.length <= startIndex + 252) && fetching && scrollTop !== 0) {
            setFetching(false);
            fetch('http://192.168.0.197:3005/folders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": { name: props.value },
                    "start": folders.at(-1)?.id,
                    "end": 500
                })
            }).catch(x => console.log(x)).then(x => x.json()).then(x => {
                let temp = [...folders, ...x.folder];
                props.setFolder(temp);
                setFolders(temp)
                setFetching(true);

            });
        }

    }, [scrollTop, props.folder])
    const innerHeight = numItems * itemHeight;
    const offset = 0;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - offset);
    const endIndex = Math.min(
        numItems - 1,
        Math.floor((scrollTop + windowHeight) / itemHeight) + offset
    );
    // for (let i = startIndex; i <= endIndex; i++) {
    //     items.push(
    //         renderItem({
    //             index: i,
    //             style: {
    //                 position: "absolute",
    //                 // top: `${i * itemHeight}px`,
    //                 transform: `translate3d(0px, ${i * itemHeight}px, 0px)`,
    //                 willChange: "transform, scroll-position",
    //                 // width: '100%'
    //             }
    //         })
    //     );
    // }
    const onScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };





    return (
        <ScrollBar onScroll={onScroll} height={90}>
            <div style={open ? { position: "relative", height: `${innerHeight}px` } : { position: "relative", height: `${innerHeight}px`, pointerEvents: 'none' }}>
                {
                    folders.slice(startIndex, endIndex + 1).map((x, i) => {

                        let style = {
                            position: "absolute",
                            transform: `translate3d(0px, ${(i + startIndex) * itemHeight}px, 0px)`,
                            willChange: "transform, scroll-position",
                            width: '100%'
                        }

                        if (x?.name === 'Все') {
                            return (
                                <div style={{ ...style, ...{ width: props.width, paddingLeft: 16 } }} className={`list-large ${x.select && 'select-btn'}`} onClick={e => props.onClickProduct(x.name)} onMouseEnter={props.openDropdown}>{x.name}</div>
                            );
                        } else if (x?.name === 'Пустое поле') {
                            return (
                                <div style={{ ...style, ...{ width: props.width, paddingLeft: 16 } }} className={`list-large ${x.select && 'select-btn'}`} onClick={e => props.onClickProduct(x.name)} onMouseEnter={props.openDropdown}>{x.name}</div>
                            );
                        } else if (x?.name && x?.name !== 'Все' && x?.name !== 'Пустое поле') {
                            return (
                                <div style={{ ...style, ...{ width: props.width, paddingLeft: 16, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }} onClick={e => props.onClickProduct(props.title)}
                                    className={x?.goods?.filter(y => y.select === true).length === 0 ? "list-large dropProductMenu"
                                        : x?.goods?.filter(y => y.select === true).length === x?.goods?.length
                                            ? "list-large dropProductMenu select-btn" : "list-large dropProductMenu select-btn select-btn-white"} onMouseEnter={props.openDropdown} dangerouslySetInnerHTML={{ __html: props.light(x?.name, props.value) }}>
                                </div>
                            );
                        }

                    })
                }
            </div>
        </ScrollBar>
    );
};



class ProductDropdown extends Component {

    constructor(props) {
        super(props);
        this.refInput = React.createRef();
        this.refScroll = React.createRef();
        this.refBlock = React.createRef();

        this.state = {
            open: false,
            openDropdown: false,
            onChange: false,
            folder: [],
            title: '',
            selectItem: 0,
            value: '',
            select: false,
            sort: '',
            top: 0,
            fetching: true,
            size: 20,
            watch: true

        }

        this.handle = this.handle.bind(this);

    }


    componentDidMount() {
        this.setState({ select: false })
        if(!this.state.select) {
            document.addEventListener("click", this.handle, true);
        }

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



    componentDidUpdate(prevProps, prevState) {




        if (this.props.folder !== prevProps.folder) {
            this.setState({ folder: this.props.folder })
        }


        if ((this.props.refresh !== prevProps.refresh)) {

            this.setState({
                open: false,
                openDropdown: false,
                onChange: false,
                title: '',
                selectItem: 0,
                value: '',
                select: false,
                sort: '',
            })
            fetch('http://192.168.0.197:3005/folders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": { name: '' },
                    "end": 20
                })
            }).catch(x => console.log(x)).then(x => x.json()).then(x => {
                let temp = x.folder.map(y => { return { ...y, select: false, goods: y.goods.map(z => { return { ...z, select: false } }) } });
                temp.splice(0, 0, { id: 900000000000000, name: 'Пустое поле', select: false })
                temp.splice(0, 0, { id: 0, name: 'Все', select: this.state.folder.filter(x => x.goods?.filter(x => x.select === true).length > 0).length > 0 ? false : true })
                this.setState({ folder: temp })
            });
        }

        if (!this.props.wrapper && this.state.select) {
            let temp = this.state.folder.filter(x => x.name !== "Все" && x.name !== 'Пустое поле').filter(x => (x.goods?.filter(x => x.select === true).length !== 0) === true)
            if (temp.length > 0)
                this.props.search[this.props.keys] = this.state.folder.filter(x => x.name !== "Все" && x.name !== 'Пустое поле').map(x => x.goods?.filter(x => x.select === true)).flat().map(x => x?.id);
            if (temp.length > 1 || (temp.length === 1 && this.state.folder.filter(x => x.select === true)[0]?.name === 'Пустое поле')) {
                this.setState({ value: 'Фильтр' })
            } else if (temp.length === 1) {
                this.setState({ value: temp[0].name })
            } else if (temp.length === 0 && this.state.folder.filter(x => x.select === true)[0]?.name === 'Пустое поле') {
                this.setState({ value: 'Пустое поле' })
            } else if (temp.length !== 0) {
                temp = this.state.folder;
                temp[0].select = true;
                this.setState({ value: '', folder: [...temp] })
            } else if (temp.length === 0) {
                this.setState({ value: '' })
            }
            this.setState({
                select: false
            })
        }

    }



    open = (e) => {

        if (!this.props.wrapper && !this.state.open) {
            fetch('http://192.168.0.197:3005/folders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "query": { name: '', orders: [["id", "DESC"]] },
                    "end": 20
                })
            }).catch(x => console.log(x)).then(x => x.json()).then(x => {
                let temp = x.folder.map(y => { return { ...y, select: false, goods: y.goods.map(z => { return { ...z, select: false } }) } });
                temp.splice(0, 0, ...this.state.folder.filter(x => x.goods?.filter(x => x.select === true).length > 0))
                temp.splice(0, 0, { id: 900000000000000, name: 'Пустое поле', select: false })
                temp.splice(0, 0, { id: 0, name: 'Все', select: this.state.folder.filter(x => x.goods?.filter(x => x.select === true).length > 0).length > 0 ? false : true })
                this.setState({ folder: temp })
            });
        }

        this.refInput.current.focus()
        if (!this.props.wrapper) {
            this.setState({
                open: true,
                value: ''
            })


        }

        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 300);
    }



    debouncedResults = debouce(text => { fetch('http://192.168.0.197:3005/folders', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": { name: this.state.value },
            "end": 20
          })


    }).catch(x => console.log(x)).then(x => x.json()).then(x => {
        let temp = x.folder.map(y => { return { ...y, select: false, goods: y.goods.map(z => { return { ...z, select: false } }) } });

        if (this.state.value.length === 0) {
            temp.splice(0, 0, { id: 900000000000000, name: 'Пустое поле', select: false })
            temp.splice(0, 0, { id: 0, name: 'Все', select: this.state.folder.filter(x => x.goods?.filter(x => x.select === true).length > 0).length > 0 ? false : true })
        }
        this.setState({ folder: [...this.state.folder.filter(x => x.name.toUpperCase().includes(this.state.value.toUpperCase())), ...temp] });
    })

    fetch('http://192.168.0.197:3005/foldersCount', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": { name: this.state.value },
        })
      }).catch(x => console.log(x)).then(x => x.json()).then(x => {
        console.log(x);
        this.props.setCountFolder(x)
      });

}, 400);

    close = (e) => {
        [...document.querySelectorAll('.halfOpacity')].map(x => x.classList.remove('halfOpacity'));
        this.setState({
            open: false,
            openDropdown: false,
        })

        if (!this.state.select) {

            let temp = this.state.folder.slice(2).filter(x => (x.goods?.filter(x => x.select === true).length !== 0) === true)

            if (temp.length > 1 || (temp.length === 1 && this.state.folder.filter(x => x.select === true)[0]?.name === 'Пустое поле')) {
                this.setState({ value: 'Фильтр' })
            } else if (temp.length === 1) {
                this.setState({ value: temp[0].name })
            } else if (temp.length === 0 && this.state.folder.filter(x => x.select === true)[0]?.name === 'Пустое поле') {
                this.setState({ value: 'Пустое поле' })
            } else if (temp.length !== 0) {
                temp = this.state.folder;
                temp[0].select = true;
                this.setState({ value: '', folder: [...temp] })
            }
        }

        this.refInput.current.blur()
        if (!this.props.wrapper)
            this.props.setRange(true)
        clearTimeout(timer)

    }

    light = (text, value, flags) => {
        if (text) {
            if (value !== '') {
                let re = new RegExp(value, "gui");
                let text_pr = text.replace(re, x => '<span class="findUnderline">' + x + '</span>');

                return (flags ? '<span class=flags>' + flags + '</span>' : '') + text_pr;
            } else {
                return (flags ? '<span class=flags>' + flags + '</span>' : '') + text;
            }
        }
    }

    openDropdown = (e) => {
        [...document.querySelectorAll('.halfOpacity')].map(x => x.classList.remove('halfOpacity'));

        e.target.classList.add('halfOpacity');
        if (e.target.innerText !== 'Все' && e.target.innerText !== 'Пустое поле') {
            this.setState({
                openDropdown: true

            })


            this.setState({ title: e.target.innerText })
            let posElement = e.target.getBoundingClientRect();
            let width = document.querySelector('.dropdownProduct').getBoundingClientRect().width
            document.querySelector('.dropdownProduct').style.top = posElement.y - 112 - (110 * this.props.zoom) + 'px';
            document.querySelector('.dropdownProduct').style.right = -width + (width * this.props.zoom) + 2 + 'px';
        } else {
            this.setState({
                openDropdown: false

            })
        }

    }


    closeDropdown = (e) => {

        this.setState({
            openDropdown: false
        })



    }

    onChange = (e) => {
        if (e.target.value.match(/(^)[а-яёa-z]/g))
            this.setState({ value: e.target.value[0].toUpperCase() + e.target.value.slice(1), select: true })
        else
            this.setState({ value: e.target.value, select: true })
        this.debouncedResults()


        this.props.onWrapper(true);

    }



    changeProduct = (title, index) => {
        let temp = this.state.folder;
        temp[0].select = false;
        temp.filter(x => x.name === title)[0].goods[index].select = !temp.filter(x => x.name === title)[0].goods[index].select
        this.setState({ select: true, folder: [...temp] });
        this.props.onWrapper(true);
    }



    Search = data => {
        let d = Object.filter(data, ([name, text]) => text !== '');
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
            this.props.setArr(x);
        })
    }

    onClickProduct = (title) => {
        let temp = this.state.folder;
        if (title === 'Все') {



            temp[0].select = true;
            temp.slice(1,)?.forEach(x => x?.goods?.forEach(y => y.select = false));
            document.getElementById("tooltipBtn").style.animation = '';

            this.props.onWrapper(false);
            this.props.search[this.props.keys] = '';
            this.Search(this.props.search)
            this.setState({ openDropdown: false, select: false, open: false, folder: [...temp] })
            return;
        }
        else if (title === 'Пустое поле') {
            if (temp[1].select === true) {
                temp[0].select = true;
                temp[1].select = false;
            } else {
                temp[0].select = false;
                temp[1].select = true;
            }

        } else {
            if (this.state.folder.filter(x => x.name === title)[0].goods.filter(x => x.select === true).length > 0) {
                this.state.folder.filter(x => x.name === title)[0].goods.map(x => x.select = false);
                temp[0].select = false;
            } else {
                this.state.folder.filter(x => x.name === title)[0].goods.map(x => x.select = true);
                temp[0].select = false;
            }
        }

        this.setState({ select: true, folder: [...temp] });
        this.props.onWrapper(true);
    }

    onClick = e => {
        if (this.state.sort === '' || this.state.sort === 'down') {
            this.setState({ sort: 'up' })
        } else if (this.state.sort === 'up') {
            this.setState({ sort: 'down' })
        }
        this.setState({ open: false, select: false })

    }


    render() {
        return (
            <div ref={this.refBlock} className="sort-menu product-box" onMouseEnter={this.open} onMouseLeave={this.close}>
                <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-wrap-large hide-arrow" : "btn-wrap-large"}>
                    <input ref={this.refInput} type="text" autoComplete={"new-password"} className="input-btn-large product-input find" onChange={this.onChange} value={this.state.value} />
                    <div className={this.state.open || (this.props.wrapper && this.state.select) ? "block1 toggle" : "block1"} >
                        {(this.state.open || (this.state.select && this.props.wrapper)) && <VirtualizedList
                            setFolder={items => this.setState({ folder: items })}
                            folder={this.state.folder}
                            numItems={this.props.countFolder}
                            itemHeight={18}
                            windowHeight={90}
                            width={this.props.width}
                            value={this.state.value}
                            title={this.state.title}
                            onClickProduct={this.onClickProduct}
                            openDropdown={this.openDropdown}
                            light={this.light}
                        />}



                    </div>

                    <div className="dropdownProduct" onWheel={this.onWheel} onMouseLeave={this.closeDropdown} style={this.state.openDropdown ? { animation: '0.3s ease 0.3s 1 normal forwards running delay-btn' } : { animation: '' }} onMouseEnter={e => {
                        clearTimeout(timer);
                        let temp = this.state.folder.filter(x => x.name === this.state.title)[0];
                        if (!temp.goods[0].image) {
                            fetch('http://192.168.0.197:3005/foldersImages', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ "id": temp.id })
                            }).then(x => x.json()).then(x => {
                                let obj = x.folder[0].goods;
                                temp.goods = temp.goods.map((x, index) => { return { ...x, ...{ image: obj[index].image } } })
                                this.setState({ folder: this.state.folder })
                            })
                        }
                    }}>
                        <div id="tooltipBtn2" className="speed"></div>

                        <div style={{ width: 300, boxShadow: '4px 4px 9px rgba(0, 0, 0, 0.15)', maxHeight: 150, backgroundColor: 'white' }} className="dropdownProductRight">
                            {(this.state.openDropdown && this.state.watch || (this.state.select && this.props.wrapper)) && <ScrollBar height={150}>

                                {/* {this.state.items.filter(x => x.title === this.state.title).map(x => */}

                                <table>
                                    <thead>

                                        <tr>
                                            <th colSpan="3" className="productTooltipText" dangerouslySetInnerHTML={{ __html: this.light(this.state.title, this.state.value, '🇺🇦') }}></th>
                                        </tr>
                                        <tr className="dropdownProductHeader" >
                                            <th style={{ fontSize: 14, position: 'relative' }}><span>ID<div className='wraps' style={{ top: 28 }}><div className='tooltips' style={{ padding: '2px 5px' }}>Идентификатор/код товара</div></div></span>
                                                <div className="countProduct"
                                                    onMouseEnter={e => {
                                                        timer = setTimeout(() => {

                                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                            document.getElementById("tooltipBtn").innerHTML = `Товаров в фильтре:<br>- найдено ${this.state.folder.filter(x => x.name === this.state.title)[0]?.goods.length}<br>- выбрано ${this.state.folder.filter(x => x.name === this.state.title)[0]?.goods.filter(x => x.select === true).length}`;
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
                                                        clearTimeout(timer)
                                                        document.getElementById("tooltipBtn").style.animation = '';

                                                    }}
                                                > ({this.state.folder.filter(x => x.name === this.state.title)[0]?.goods.length}/{this.state.folder.filter(x => x.name === this.state.title)[0]?.goods.filter(x => x.select === true).length})</div>
                                            </th>
                                            <th style={{ fontSize: 14, position: 'relative' }}><span>Атрибут <div className='wraps' style={{ top: 28, left: -14 }}><div className='tooltips'>Уникальный признак товара</div></div> </span></th>
                                            <th style={{ fontSize: 14, position: 'relative' }}><span>Цена <div className='wraps' style={{ top: 28, right: 0 }}><div className='tooltips'>Цена продажи по умолчанию</div></div></span> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.folder.filter(x => x.name === this.state.title)[0]?.goods.map((x, index) => <tr style={{ fontSize: 10 }} onClick={e => this.changeProduct(this.state.title, index)}>
                                            <td className={x.select ? 'select-btn-product idProduct targetSelectBtn' : 'idProduct targetSelectBtn'}><span
                                                onMouseEnter={e => {
                                                    if (e.target.scrollWidth > e.target.offsetWidth)
                                                        timer = setTimeout(() => {

                                                            document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                            document.getElementById("tooltipBtn").innerHTML = x.identifier;
                                                            let posElement = e.target.getBoundingClientRect();
                                                            document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                                                            document.getElementById("tooltipBtn").style.top = posElement.y + 20 + "px";
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

                                                }}
                                            >{x.identifier}</span></td>
                                            <td className="attrProduct" onMouseEnter={e => {
                                                timer = setTimeout(() => {



                                                    document.getElementById("tooltipBtn2").style.fontSize = '11px';

                                                    document.getElementById("tooltipBtn2").innerHTML = `
                                                                    ${x.goodAttributes.map(y => y.name).join(', ')}
                                                                    <br><div class="img-product"><img src=${x.image} alt=""></div>
                                                        `;
                                                    document.getElementById("tooltipBtn2").style.top = document.querySelector('.dropdownProduct').clientHeight + "px";
                                                    document.getElementById("tooltipBtn2").style.animation = 'delay-btn 0.25s forwards';


                                                }, 150)

                                            }}
                                                onMouseLeave={e => {
                                                    clearTimeout(timer);
                                                    document.getElementById("tooltipBtn2").style.animation = '';


                                                }}
                                            ><span>{x.goodAttributes.map(y => y.name).join(', ')}</span></td>
                                            <td className="priceProduct">{x.price}</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                                {/* )} */}
                            </ScrollBar>}

                        </div>
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
                                document.getElementById("tooltipBtn").innerHTML = `Групп товаров в фильтре:<br>- найдено ${this.props.countFolder.toLocaleString('ru-RU', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}<br>- выбрано ${this.state.folder.filter(x => x.name.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) && x.name !== 'Все').filter(x => x.goods?.filter(y => y.select === true).length > 0).length}`;
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

                        }}
                    >
                        ({this.props.countFolder.toLocaleString('ru-RU', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}/
                        <span>{this.state.folder.filter(x => x.name.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) && x.name !== 'Все').filter(x => x.goods?.filter(y => y.select === true).length > 0).length}</span>)
                    </div>}
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps)(ProductDropdown);
