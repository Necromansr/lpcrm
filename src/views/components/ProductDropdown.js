import './dropdown.css';

import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { FixedSizeList as List } from 'react-window';
import { connect } from "react-redux";
import InfiniteLoader from "react-window-infinite-loader";

const mapStateToProps = state => {
    return { zoom: state.zoom };
};
let timer = null;

const folder = [
    { group: "Все", select: true },
    { group: "Пустое поле", select: false },
    // { group: "Елитная одежда для оленей одежда для оленей новогодняя распродажа", select: false },
    // { group: "Тарелки набор из 8 приборов тес тес тест олени олени олени", select: false },
    // { group: "Пироги с разными фруктами и ололооло", select: false },
    // { group: "Товар для людей и еще когото и медведь", select: false },
    // { group: "Елитная одежда для оленей и чтото для когото", select: false },
    // { group: "Товар для людей и еще когото одежда для оленей", select: false },
    // { group: "Елитная одежд1", select: false },
    // { group: "Елитная одежд2", select: false },
    // { group: "Елитная одежд3", select: false }
]




const items = [
    {
        title: "Елитная одежда для оленей одежда для оленей новогодняя распродажа", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Тарелки набор из 8 приборов тес тес тест олени олени олени", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Пироги с разными фруктами и ололооло", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Товар для людей и еще когото и медведь", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Елитная одежда для оленей и чтото для когото", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Товар для людей и еще когото одежда для оленей", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Елитная одежд1", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Елитная одежд2", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    },
    {
        title: "Елитная одежд3", flags: '🇺🇦', arr: [{
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }, {
            id: "3434-0.8",
            group: "Синий; 42 размер; Взрослый; Китай",
            price: "11235.00",
            select: false
        }]
    }
]

class ProductDropdown extends Component {

    constructor(props) {
        super(props);
        this.refInput = React.createRef();
        this.state = {
            open: false,
            openDropdown: false,
            onChange: false,
            folder: folder,
            title: '',
            selectItem: 0,
            value: '',
            items: items,
            select: false,
            sort: '',
            isNextPageLoading: false,
            hasNextPage: true,

        }
    }


    componentDidMount() {
        this.setState({ select: false })

    }

    componentDidUpdate(prevProps, prevState) {
        // if (!this.props.wrapper && this.state.select) {
        //     this.setState({
        //         select: false,
        //         value: ''
        //     })

        // }

        if ((this.props.refresh !== prevProps.refresh)) {
            let temp = this.state.folder;
            temp[0].select = true;
            temp.slice(1).map(x => x.select = false)
            items.map(y => y.arr.map(x => x.select = false));
            this.setState({
                open: false,
                openDropdown: false,
                onChange: false,
                folder: folder,
                title: '',
                selectItem: 0,
                value: '',
                items: items,
                select: false,
                sort: '',
                hasNextPage: true,
            })

        }
        if (!this.props.wrapper && this.state.select) {
            let temp = this.state.items.filter(x => x.arr.filter(x => x.select === true).length !== 0)
            if (temp.length > 1 || (temp.length === 1 && folder.filter(x => x.select === true)[0]?.group === 'Пустое поле')) {
                this.setState({ value: 'Фильтр' })
            } else if (temp.length === 1) {
                this.setState({ value: temp[0].title })
            } else if (temp.length === 0 && folder.filter(x => x.select === true)[0]?.group === 'Пустое поле') {
                this.setState({ value: 'Пустое поле' })
            } else {
                temp = this.state.folder;
                temp[0].select = true;
                this.setState({ value: '', folder: [...temp] })
            }
            this.setState({
                select: false
            })
        }
    }

    onWheel = () => {
        document.querySelector("#tooltipBtn").style.animation = '';
    }

    open = (e) => {
        if (!this.props.wrapper && this.state.select) {
            document.querySelectorAll('.simplebar-content-wrapper').forEach(x => x.scrollTo({
                top: 0,
                behavior: "smooth"
            }))
        }
        this.refInput.current.focus()
        if (!this.props.wrapper) {
            this.setState({
                open: true,
                value: ''
            })
        }

        if (this.state.folder.length === 2) {
            
            fetch('http://vanl0073259.online-vm.com:3005/goods', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ end: 10, query: { group: this.state.value } })
            }).catch(x => console.log(x)).then(x => x.json()).then(x => {
                this.setState({
                    folder: [...this.state.folder, ...x.map(x => { return { ...x, select: false } })]
                })
            });
        }


        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 300);
    }


    close = (e) => {
        [...document.querySelectorAll('.halfOpacity')].map(x => x.classList.remove('halfOpacity'));
        this.setState({
            open: false,
            openDropdown: false,

        })

        if (!this.state.select) {
            let temp = this.state.items.filter(x => x.arr.filter(x => x.select === true).length !== 0)
            if (temp.length > 1 || (temp.length === 1 && folder.filter(x => x.select === true)[0]?.group === 'Пустое поле')) {
                this.setState({ value: 'Фильтр' })
            } else if (temp.length === 1) {
                this.setState({ value: temp[0].title })
            } else if (temp.length === 0 && folder.filter(x => x.select === true)[0]?.group === 'Пустое поле') {
                this.setState({ value: 'Пустое поле' })
            } else {
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
        if (value !== '') {
            let re = new RegExp(value, "gui");
            let text_pr = text.replace(re, x => '<span class="findUnderline">' + x + '</span>');

            return (flags ? '<span class=flags>' + flags + '</span>' : '') + text_pr;
        } else {
            return (flags ? '<span class=flags>' + flags + '</span>' : '') + text;
        }
    }

    openDropdown = (e) => {

        [...document.querySelectorAll('.halfOpacity')].map(x => x.classList.remove('halfOpacity'));

        e.target.classList.add('halfOpacity');
        this.setState({
            openDropdown: true

        })
        this.setState({ title: e.target.innerText })
        let posElement = e.target.getBoundingClientRect();
        let width = document.querySelector('.dropdownProduct').getBoundingClientRect().width
        document.querySelector('.dropdownProduct').style.top = posElement.y - 110 - (110 * this.props.zoom) + 'px';
        document.querySelector('.dropdownProduct').style.right = -width + (width * this.props.zoom) + 2 + 'px';

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

        fetch('http://vanl0073259.online-vm.com:3005/goods', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ end: 10, query: { group: e.target.value } })
        }).catch(x => console.log(x)).then(x => x.json()).then(x => {

            this.setState({
                folder: [...folder, ...x.map(x => { return { ...x, select: false } })]
            })
        });
        this.props.onWrapper(true);

    }



    changeProduct = (title, index) => {
        items.filter(x => x.title === title)[0].arr[index].select = !items.filter(x => x.title === title)[0].arr[index].select
        this.setState({ items: [...items], select: true });
        this.props.onWrapper(true);
    }

    onClickProduct = (title) => {
        let temp = this.state.folder;
        if (title === 'Все') {
            temp[0].select = true;
            temp[1].select = false;
            items.map(y => y.arr.map(x => x.select = false));
            document.getElementById("tooltipBtn").style.animation = '';

            this.props.onWrapper(false);
            this.setState({ openDropdown: false, select: false, open: false })
            return;
        } else if (title === 'Пустое поле') {
            if (temp[1].select === true) {
                temp[0].select = true;
                temp[1].select = false;
            } else {
                temp[0].select = false;
                temp[1].select = true;
            }

        } else {
            if (items.filter(x => x.title === title)[0].arr.filter(x => x.select === true).length > 0) {
                items.filter(x => x.title === title)[0].arr.map(x => x.select = false);
                temp[0].select = false;
            } else {
                items.filter(x => x.title === title)[0].arr.map(x => x.select = true);
                temp[0].select = false;
            }
        }

        this.setState({ items: [...items], select: true, folder: [...temp] });
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


    loadMoreItems = () => {
        // console.log(this.state.folder);
        this.setState({ isNextPageLoading: true }, () => {
            fetch('http://vanl0073259.online-vm.com:3005/goods', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ end: 50, start: this.state.folder.at(-1)?.id , query: { group: this.state.value } })
            }).catch(x => console.log(x)).then(x => x.json()).then(x => {

                this.setState(state => ({
                    hasNextPage: state.folder.length < 50000,
                    isNextPageLoading: false,
                    folder: [...this.state.folder, ...x.map(x => { return { ...x, select: false } })]
                }));

            });


        })
    }

    // // Every row is loaded except for our loading indicator row.
    isItemLoaded = index => !this.state.hasNextPage || index < this.state.folder.length;

    render() {

        const itemCount = this.state.hasNextPage ? this.state.folder.length + 1 : this.state.folder.length;
        //     <SimpleBar autoHide={false} style={{ maxHeight: 90 }} >
        //     {this.state.folder.filter(x => x.group.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase())).map(x => {
        //         if (x.group === 'Все') {
        //             return (
        //                 <div className={`list-large ${x.select && 'select-btn'}`} onClick={e => this.onClickProduct(x.group)}><span className="list-item"><span className="product-item-tooltip">{x.group}</span></span>
        //                 </div>
        //             );
        //         } else if (x.group === 'Пустое поле') {
        //             return (
        //                 <div className={`list-large ${x.select && 'select-btn'}`} onClick={e => this.onClickProduct(x.group)}><span className="list-item"><span className="product-item-tooltip">{x.group}</span></span>
        //                 </div>
        //             );
        //         } else {
        //             return (
        //                 <div
        //                     // onClick={e => this.onClickProduct(this.state.title)}
        //                     className={
        //                         "list-large dropProductMenu"
        //                     }
        //                     // this.state.items.filter(y => y.title === x.group)[0].arr.filter(x => x.select === true).length === 0 ? "list-large dropProductMenu" : this.state.items.filter(y => y.title === x.group)[0].arr.filter(x => x.select === true).length === this.state.items.filter(y => y.title === x.group)[0].arr.length ? "list-large dropProductMenu select-btn" : "list-large dropProductMenu select-btn select-btn-white"}
        //                     onMouseEnter={this.openDropdown} ><span className="list-item"><span style={{ width: this.props.width }} className="product-item-tooltip findFunction" dangerouslySetInnerHTML={{ __html: this.light(x.group, this.state.value) }}></span></span>
        //                 </div>
        //             );
        //         }
        //     })}
        // </SimpleBar>}




        return (
            <div className="sort-menu product-box" onMouseEnter={this.open} onMouseLeave={this.close}>
                <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-wrap-large hide-arrow" : "btn-wrap-large"}>
                    <input ref={this.refInput} type="text" autoComplete={"new-password"} className="input-btn-large product-input find" onChange={this.onChange} value={this.state.value} />
                    <div className={this.state.open || (this.props.wrapper && this.state.select) ? "block1 toggle" : "block1"} >
                        {((this.state.open || (this.state.select && this.props.wrapper))) &&
                            <SimpleBar
                                autoHide={false}
                                style={{ maxHeight: 90, height: 90 }}
                            >
                                {({ scrollableNodeRef, contentNodeRef }) => {
                                    return (
                                        <InfiniteLoader
                                            isItemLoaded={this.isItemLoaded}
                                            itemCount={itemCount}
                                            loadMoreItems={this.loadMoreItems}
                                        >
                                            {({ onItemsRendered, ref }) => (
                                                <List
                                                    height={90}
                                                    itemCount={itemCount}
                                                    itemSize={18}
                                                    ref={ref}
                                                    onItemsRendered={onItemsRendered}
                                                    innerRef={contentNodeRef}
                                                    outerRef={scrollableNodeRef}
                                                >
                                                    {({ index, style }) => {
                                                        let content;
                                                        if (!this.isItemLoaded(index)) {
                                                            content = "Loading...";
                                                        } else {
                                                            content = this.state.folder[index]?.group;
                                                        }
                                                        return (

                                                            <div
                                                                style={style}
                                                                className={'list-large dropProductMenu'}
                                                            // className={obj[index].select ? 'select-btn infinity-list' : 'infinity-list'}
                                                            // onClick={(e) => infinityClick(index, e)} key={index} style={style}

                                                            // dangerouslySetInnerHTML={{
                                                            //     __html: searchLine(
                                                            //         obj[index]?.attribute,
                                                            //         value
                                                            //     ),
                                                            // }}
                                                            >
                                                                <span className="list-item"><span style={{ width: this.props.width }} className="product-item-tooltip findFunction" dangerouslySetInnerHTML={{ __html: this.light(content, this.state.value) }}></span></span>
                                                            </div>
                                                        )
                                                    } }

                                                </List>
                                            )}
                                        </InfiniteLoader>
                                    );
                                }}
                            </SimpleBar>}
                    </div>

                    <div className="dropdownProduct" onWheel={this.onWheel} onMouseLeave={this.closeDropdown} style={this.state.openDropdown || (this.props.wrapper && this.state.select) ? { animation: '0.3s ease 0.3s 1 normal forwards running delay-btn' } : { animation: '' }}>
                        <div id="tooltipBtn2" className="speed"></div>

                        <div style={{ width: 300, boxShadow: '4px 4px 9px rgba(0, 0, 0, 0.15)', maxHeight: 150, backgroundColor: 'white' }}>
                            {(this.state.openDropdown || (this.state.select && this.props.wrapper)) && <SimpleBar autoHide={false} style={{ maxHeight: 150 }}>

                                {this.state.items.filter(x => x.title === this.state.title).map(x =>

                                    <table>
                                        <thead>

                                            <tr>
                                                <th colSpan="3" className="productTooltipText" dangerouslySetInnerHTML={{ __html: this.light(this.state.title, this.state.value, x.flags) }}></th>
                                            </tr>
                                            <tr className="dropdownProductHeader" >
                                                <th style={{ fontSize: 14, position: 'relative' }}><span>ID<div className='wraps' style={{ top: 28 }}><div className='tooltips' style={{ padding: '2px 5px' }}>Идентификатор/код товара</div></div></span>
                                                    <div className="countProduct"
                                                        onMouseEnter={e => {
                                                            timer = setTimeout(() => {

                                                                document.getElementById("tooltipBtn").style.fontSize = '11px';
                                                                document.getElementById("tooltipBtn").innerHTML = `Статусов в фильтре:<br>- найдено ${x.arr.length}<br>- выбрано ${x.arr.filter(x => x.select === true).length}`;
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
                                                    > ({x.arr.length}/{x.arr.filter(x => x.select === true).length})</div>
                                                </th>
                                                <th style={{ fontSize: 14, position: 'relative' }}><span>Атрибут <div className='wraps' style={{ top: 28, left: -14 }}><div className='tooltips'>Уникальный признак товара</div></div> </span></th>
                                                <th style={{ fontSize: 14, position: 'relative' }}><span>Цена <div className='wraps' style={{ top: 28, right: 0 }}><div className='tooltips'>Цена продажи по умолчанию</div></div></span> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {x.arr.map((x, index) => <tr style={{ fontSize: 10 }} onClick={e => this.changeProduct(this.state.title, index)}>
                                                <td className={x.select ? 'select-btn-product idProduct targetSelectBtn' : 'idProduct targetSelectBtn'}><span>{x.id}</span></td>
                                                <td className="attrProduct" onMouseEnter={e => {
                                                    timer = setTimeout(() => {



                                                        document.getElementById("tooltipBtn2").style.fontSize = '11px';

                                                        document.getElementById("tooltipBtn2").innerHTML = `
                                                                    ${x.group}
                                                                    <br><div class="img-product"><img src="https://offer.lp-crm.biz/crm-test/img/priroda.jpg" alt=""></div>
                                                        `;
                                                        document.getElementById("tooltipBtn2").style.top = 150 + "px";
                                                        document.getElementById("tooltipBtn2").style.animation = 'delay-btn 0.25s forwards';


                                                    }, 150)

                                                }}
                                                    onMouseLeave={e => {
                                                        clearTimeout(timer);
                                                        document.getElementById("tooltipBtn2").style.animation = '';


                                                    }}
                                                ><span>{x.group}</span></td>
                                                <td className="priceProduct">{x.price}</td>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                )}
                            </SimpleBar>}

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
                                document.getElementById("tooltipBtn").innerHTML = `Атрибутов в фильтре:<br>- найдено ${items.length}<br>- выбрано ${this.state.items.filter(x => x.arr.filter(y => y.select === true).length > 0).length}`;
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
                    >({this.state.folder.filter(x => x.group.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()) && x.group !== 'Все').length}/<span>{this.state.items.filter(x => x.arr.filter(y => y.select === true).length > 0).length}</span>)</div>}
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps)(ProductDropdown);