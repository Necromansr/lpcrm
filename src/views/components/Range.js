
import './range.css';
import React, { Component } from 'react';
let arr = ["0 сек", "30 сек", "45 сек", "1 мин", "2 мин", "3 мин", "4 мин", "5 мин", "6 мин", "7 мин", "8 мин", "9 мин", "10 мин", "11 мин", "12 мин", "13 мин", "14 мин", "15 мин", "20 мин", "25 мин", "30 мин", "35 мин", "40 мин", "45 мин", "50 мин", "55 мин", "1 час", "2 час", "3 час", "4 час", "5 час", "6 час", "7 час", "8 час", "9 час", "10 час", "12 час", "14 час", "16 час", "18 час", "20 час", "22 час", "1 дн", "2 дн", "3 дн", "4 дн", "5 дн", "7 дн", "10 дн", "15 дн", "20 дн", "25 дн", "30+ дн"];

let timer = null;

class Range extends Component {


    constructor(props) {
        super(props);

        this.state = {
            arr: [],
            open: false,
            onChange: false,
            select: false,
            sort: '',
            text: 'Все',
            max: 52,
            min: 0,
            title: '',
            self: null
        }


        this.inputKeyUp = this.inputKeyUp.bind(this)
        this.inputKeyDown = this.inputKeyDown.bind(this)


    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.state.open !== nextState.open || this.state.text !== nextState.text || this.props.wrapper !== nextProps.wrapper || this.state.max !== nextState.max || this.state.min !== nextState.min || this.state.title !== nextState.title) {
            return true;
        } else if (!nextProps.wrapper && this.state.select) {
            this.setState({
                select: false
            })
            return true;
        } else if ((this.props.refresh !== nextProps.refresh)) {
            this.setState({
                arr: [],
                open: false,
                onChange: false,
                select: false,
                text: 'Все',
                max: 52,
                min: 0,
                title: '',
                self: null
            })
        }

        return false;
    }
    open = (e) => {


        this.setState({
            open: true
        })
        timer = setTimeout(() => {
            this.props.setRange(false)
        }, 300);

    }


    close = (e) => {

        this.setState({
            open: false
        })
        if (!this.props.wrapper)
            this.props.setRange(true)
        
        clearTimeout(timer)
    }

    inputKeyUp(e) {
        this.props.onWrapper(true);
        this.setState({
            select: true
        })


        if (38 === e.keyCode) {

            if (this.state.self.classList.contains('range_min') && this.state.min - 1 >= 0) {
                this.setState({ min: this.state.min - 1 })
                this.state.self.querySelector('.arrowsInc .arrowUp').style.top = '2px';
                this.state.self.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsInc .arrowDown').style.top = '7px';
                if (this.state.min === 0) {
                    this.state.self.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
                    this.state.self.querySelector('.arrowsInc .arrowDown').style.top = '5px';
                } else if (this.state.min === 51) {
                    this.state.self.querySelector('.arrowsInc .arrowUp').style.top = '5px';
                    this.state.self.querySelector('.arrowsInc .arrowDown').style.opacity = 0;

                }
            }
            this.state.self.offsetParent.querySelector('.inputDataMin').innerText = arr[this.state.min]
        }
        if (40 === e.keyCode) {
            if (this.state.self.classList.contains('range_min') && this.state.min + 1 < this.state.max) {
                this.setState({ min: this.state.min + 1 })
                this.state.self.querySelector('.arrowsInc .arrowUp').style.top = '2px';
                this.state.self.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsInc .arrowDown').style.top = '7px';
            } else {
                this.state.self.querySelector('.arrowsInc .arrowUp').style.top = '5px';
                this.state.self.querySelector('.arrowsInc .arrowDown').style.opacity = 0;
            }
            this.state.self.offsetParent.querySelector('.inputDataMin').innerText = arr[this.state.min]
        }



        if (this.state.text !== 'П/п' && (this.state.min !== 0 || this.state.max !== 52)) {
            this.setState({ text: '' })
        }
        if (this.state.min !== 0 || this.state.max !== 52) {
            this.setState({ title: 'Фильтр' })
        } else {
            this.setState({ title: '' })
            if (this.state.text === 'П/п') {
                this.setState({ title: 'П/п' })
            }
            if (this.state.text === '') {
                this.setState({ text: 'Все' })
            }
        }
        this.state.self.offsetParent.querySelector('.minBG').style.width = Math.round(this.state.min / 0.52, 2) + '%'
    }





    inputKeyDown(e) {

        this.props.onWrapper(true);
        this.setState({
            select: true
        })



        if (38 === e.keyCode) {
            if (this.state.self.classList.contains('range_max') && this.state.max - 1 > this.state.min) {
                this.setState({ max: this.state.max - 1 })
                this.state.self.querySelector('.arrowsDec .arrowUp').style.top = '2px';
                this.state.self.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.top = '7px';
            } else {
                this.state.self.querySelector('.arrowsDec .arrowUp').style.opacity = 0;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.top = '5px';
            }

        }
        if (40 === e.keyCode) {


            if (this.state.self.classList.contains('range_max') && this.state.max + 1 <= 52) {
                this.setState({ max: this.state.max + 1 })

                this.state.self.querySelector('.arrowsDec .arrowUp').style.top = '2px';
                this.state.self.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.top = '7px';

                if (this.state.max === 52) {
                    this.state.self.querySelector('.arrowsDec .arrowUp').style.top = '5px';

                    this.state.self.querySelector('.arrowsDec .arrowDown').style.opacity = 0;

                }

            } else {
                this.state.self.querySelector('.arrowsDec .arrowUp').style.opacity = 0;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
                this.state.self.querySelector('.arrowsDec .arrowDown').style.top = '5px';
            }

        }


        if (this.state.text !== 'П/п' && (this.state.min !== 0 || this.state.max !== 52)) {
            this.setState({ text: '' })
        }
        if (this.state.min !== 0 || this.state.max !== 52) {
            this.setState({ title: 'Фильтр' })
        } else {
            this.setState({ title: '' })
            if (this.state.text === 'П/п') {
                this.setState({ title: 'П/п' })
            }
            if (this.state.text === '') {
                this.setState({ text: 'Все' })
            }
        }
        this.state.self.offsetParent.querySelector('.maxBG').style.width = 100 - Math.round(this.state.max / 0.52, 2) + '%'
    }



    incMouseEnter = e => {

        // console.log(e.target.querySelector('.tooltipBtn2'));
        // e.target.querySelector('.tooltipBtn2').transition = '0.3s';
        // e.target.querySelector('.tooltipBtn2').opacity = '1';
        // timer = setTimeout(() => {

        //     document.getElementById("tooltipBtn").style.fontSize = '12px';

        //     document.getElementById("tooltipBtn").innerText = 'Искать значения от:';

        //     let posElement = e.target.getBoundingClientRect();
        //     let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
        //     document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + "px";
        //     document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
        //     document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
        // }, 150)

        this.setState({ self: e.target })
        document.addEventListener('keydown', this.inputKeyUp, false)
        e.target.querySelector('.arrowsInc').style.opacity = 1;
        e.target.offsetParent.querySelector('.min').classList.add('inputThumbColor');
    }

    incMouseLeave = e => {
        // clearTimeout(timer);
        // document.getElementById("tooltipBtn").style.animation = '';
        // document.getElementById("tooltipBtn").style.fontSize = '12px';
        document.removeEventListener('keydown', this.inputKeyUp)
        e.target.querySelector('.arrowsInc').style.opacity = 0;
        e.target.offsetParent.querySelector('.min').classList.remove('inputThumbColor');
    }

    decMouseEnter = e => {
        // e.target.querySelector('.tooltipBtn2').transition = '0.3s';
        // e.target.querySelector('.tooltipBtn2').opacity = '1';
        // timer = setTimeout(() => {

        //     document.getElementById("tooltipBtn").style.fontSize = '12px';

        //     document.getElementById("tooltipBtn").innerText = ' Искать значения до:';

        //     let posElement = e.target.getBoundingClientRect();
        //     let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;

        //     document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + "px";
        //     document.getElementById("tooltipBtn").style.top = posElement.y - 5 + "px";
        //     document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';
        // }, 150)

        this.setState({ self: e.target })
        document.addEventListener('keydown', this.inputKeyDown, false)

        e.target.querySelector('.arrowsDec').style.opacity = 1;
        e.target.offsetParent.querySelector('.max').classList.add('inputThumbColor');
    }

    decMouseLeave = e => {
        // clearTimeout(timer);
        // document.getElementById("tooltipBtn").style.animation = '';
        document.removeEventListener('keydown', this.inputKeyDown)

        e.target.querySelector('.arrowsDec').style.opacity = 0;
        e.target.offsetParent.querySelector('.max').classList.remove('inputThumbColor');
    }




    onWheel = e => {


        this.props.onWrapper(true);
        this.setState({
            select: true
        })
        let wDelta = e.deltaY > 0 ? 'down' : 'up';
        if (e.target.classList.contains('range_min') && wDelta === 'down' && this.state.min + 1 < this.state.max) {
            this.setState({ min: this.state.min + 1 }, () => {
                e.target.offsetParent.querySelector('.inputDataMin').innerText = arr[this.state.min]
                e.target.offsetParent.querySelector('.minBG').style.width = Math.round(this.state.min / 0.52, 2) + '%'

            })
            e.target.querySelector('.arrowsInc .arrowUp').style.top = '2px';
            e.target.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
            e.target.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
            e.target.querySelector('.arrowsInc .arrowDown').style.top = '7px';
            if (this.state.min === 0) {
                e.target.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
                e.target.querySelector('.arrowsInc .arrowDown').style.top = '5px';
            } else if (this.state.min === 51) {
                e.target.querySelector('.arrowsInc .arrowUp').style.top = '5px';
                e.target.querySelector('.arrowsInc .arrowDown').style.opacity = 0;

            }
        }
        if (e.target.classList.contains('range_min') && wDelta === 'up' && this.state.min - 1 >= 0) {
            this.setState({ min: this.state.min - 1 }, () => {
                e.target.offsetParent.querySelector('.minBG').style.width = Math.round(this.state.min / 0.52, 2) + '%'
            })
            e.target.querySelector('.arrowsInc .arrowUp').style.top = '2px';
            e.target.querySelector('.arrowsInc .arrowUp').style.opacity = 0.8;
            e.target.querySelector('.arrowsInc .arrowDown').style.opacity = 0.8;
            e.target.querySelector('.arrowsInc .arrowDown').style.top = '7px';
            if (this.state.min === 0) {
                e.target.querySelector('.arrowsInc .arrowUp').style.opacity = 0;
                e.target.querySelector('.arrowsInc .arrowDown').style.top = '5px';
            }
        }
        if (e.target.classList.contains('range_max') && wDelta === 'down' && this.state.max + 1 <= 52) {
            this.setState({ max: this.state.max + 1 }, () => {
                e.target.offsetParent.querySelector('.maxBG').style.width = 100 - Math.round(this.state.max / 0.52, 2) + '%'
            })
            e.target.querySelector('.arrowsDec .arrowUp').style.top = '2px';
            e.target.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
            e.target.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
            e.target.querySelector('.arrowsDec .arrowDown').style.top = '7px';

            if (this.state.max === 52) {
                e.target.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
                e.target.querySelector('.arrowsDec .arrowUp').style.top = '5px';
            } else if (this.state.max !== 52) {
                e.target.querySelector('.arrowsDec .arrowUp').style.opacity = 0;
                e.target.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
                e.target.querySelector('.arrowsDec .arrowDown').style.top = '5px';
            }
        }
        if (e.target.classList.contains('range_max') && wDelta === 'up' && this.state.min < this.state.max - 1) {
            this.setState({ max: this.state.max - 1 }, () => {
                e.target.offsetParent.querySelector('.maxBG').style.width = 100 - Math.round(this.state.max / 0.52, 2) + '%'
            })
            e.target.querySelector('.arrowsDec .arrowUp').style.top = '2px';
            e.target.querySelector('.arrowsDec .arrowUp').style.opacity = 0.8;
            e.target.querySelector('.arrowsDec .arrowDown').style.opacity = 0.8;
            e.target.querySelector('.arrowsDec .arrowDown').style.top = '7px';
            if (this.state.max === 52) {
                e.target.querySelector('.arrowsDec .arrowDown').style.opacity = 0;
                e.target.querySelector('.arrowsDec .arrowUp').style.top = '5px';
            }
        }

        if (this.state.text !== 'П/п' && (this.state.min !== 0 || this.state.max !== 52)) {
            this.setState({ text: '' })
        }
        if (this.state.min !== 0 || this.state.max !== 52) {
            this.setState({ title: 'Фильтр' })
        } else {
            this.setState({ title: '' })
            if (this.state.text === 'П/п') {
                this.setState({ title: 'П/п' })
            }
            if (this.state.text === '') {
                this.setState({ text: 'Все' })
            }
        }
    }

    onClickItem = e => {
        this.setState({ text: e.target.innerHTML })
        if (e.target.innerHTML === 'П/п') {
            if ((this.state.min === 0 && this.state.max === 52)) {
                this.props.onWrapper(true);
                this.setState({
                    select: true,
                    title: 'П/п'
                })
            } else {
                this.props.onWrapper(true);
                this.setState({
                    select: true,
                    title: 'Фильтр'
                })
            }

        } else {
            this.props.onWrapper(false);
            this.setState({
                select: false,
                open: false,
                title: '',
                max: 52,
                min: 0
            })

        }
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
            <div className="wrap-hide sort-menu" onMouseEnter={this.open} onMouseLeave={this.close}>
                <div className="btn-wrap-medium">
                    <div className={(this.state.open || this.state.sort !== "") || this.props.wrapper ? "btn-medium hide-arrow" : "btn-medium"}>{this.state.title}</div>
                    <div className={this.state.open || (this.state.select && this.props.wrapper) ? "block1 toggle" : "block1"}>
                        <div className="rangeslider">
                            <div className="rangesInput">
                                <input className="min" name="range_1" type="range" min="0" readOnly max="52" value={this.state.min} />
                                <span className="minBG"></span>
                                <input className="max" name="range_1" type="range" min="0" readOnly max="52" value={this.state.max} />
                                <span className="maxBG"></span>
                            </div>
                            <div className="rangesBtnBlock">
                                <div className={this.state.text === "Все" ? "rangesList all tooltipRangesInput select-btn" : "rangesList all tooltipRangesInput"} onClick={this.onClickItem}>Все</div>
                                <div className={this.state.text === "П/п" ? "rangesList p-p tooltipRangesInput select-btn" : "rangesList p-p tooltipRangesInput"} onClick={this.onClickItem}>П/п<div className='wraps' style={{ left: this.props.width ? this.props.width : 53 }}><div className='tooltips'>{'Пустое поле'}</div></div></div>
                            </div>
                            <div className="range_min inc" onWheel={this.onWheel} onMouseEnter={this.incMouseEnter} onMouseLeave={this.incMouseLeave}  >
                                <div className="arrowsInc"><span className="arrowUp" style={{ pointerEvents: 'none' }}></span><span className="arrowDown"></span></div>
                                <div className="inputDataMin tooltipRangesInput" style={{ pointerEvents: 'none' }}>{arr[this.state.min]}</div>
                                <span className='tooltipBtn2'>Искать значения от:</span>
                            </div>
                            <div className="range_max dec" onWheel={this.onWheel} onMouseEnter={this.decMouseEnter} onMouseLeave={this.decMouseLeave} >
                                <div className="arrowsDec"><span className="arrowUp" style={{ pointerEvents: 'none' }}></span><span className="arrowDown"></span></div>
                                <div className="inputDataMax tooltipRangesInput" style={{ pointerEvents: 'none' }}>{arr[this.state.max]}</div>
                                <span className='tooltipBtn2'>Искать значения до:</span>

                            </div>
                        </div>
                    </div>
                    <div className={(this.state.open || this.state.sort !== "") || (this.state.select && this.props.wrapper) ? "sort-btn sort-toggle" : "sort-btn"} style={this.state.sort === 'up' ? { transform: 'scaleX(-1)' } : {}} onClick={this.onClick}
                    //     onMouseEnter={e => {
                    //     timer = setTimeout(() => {

                    //         document.getElementById("tooltipBtn").style.fontSize = '11px';
                    //         document.getElementById("tooltipBtn").innerText = 'Сортировать данные ↑↓';
                    //         let posElement = e.target.getBoundingClientRect();
                    //         document.getElementById("tooltipBtn").style.left = posElement.x + "px";
                    //         document.getElementById("tooltipBtn").style.top = posElement.y + 18 + "px";
                    //         document.getElementById("tooltipBtn").style.animation = 'delay-btn 0.25s forwards';

                    //         let blockWidth = posElement.width;
                    //         let screenWidth = document.body.clientWidth;
                    //         let widthTooltip = document.getElementById("tooltipBtn").offsetWidth;
                    //         if (screenWidth < posElement.x + widthTooltip + blockWidth) {
                    //             document.getElementById("tooltipBtn").style.left = posElement.x - widthTooltip + 'px';
                    //         }
                    //     }, 150)
                    // }}
                    //     onMouseLeave={e => {
                    //         clearTimeout(timer)
                    //         document.getElementById("tooltipBtn").style.animation = '';

                    //     }}
                    >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.0608L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                        </svg>
                        <div className='wraps' style={{ transform: 'rotate(-180deg)', top: -25, right: 0 }}><div className='tooltips'>{'Сортировать данные ↑↓'}</div></div>
                    </div>
                    <div className={this.state.sort === "" ? "border-sort" : "border-sort border-sort-visible"} style={this.state.sort === 'down' ? { visibility: 'visible', opacity: 1, top: 'inherit', bottom: -1 } : this.state.sort === 'up' ? { visibility: 'visible', opacity: 1, top: -1, bottom: 'inherit' } : {}}></div>
                </div>
            </div>
        )
    }


}



export default Range;