import './dropdown.css';

import React, { Component } from 'react';

import { arrowDown, arrowUp } from '../../until/images'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';





class DropdownSmall extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            open: false,
            onChange: false
        }


    }

    componentDidMount(){
        let temp = this.props.options.map(e => {return {...e, select : false}});
        temp[0].select = true;
        this.setState({
            arr: temp
        })
    }


    open = (e) => {

        document.querySelectorAll('.simplebar-content-wrapper').forEach(x => x.scrollTo({
            top: 0,
            behavior: "smooth"
        }))
        this.setState({
            open: true
        })

    }


    close = (e) => {

        this.setState({
            open: false
        })

    }



    onChange = (index) => {
        let arr = this.state.arr;
        if(index === 0)
        {
            arr[index].select = !arr[index].select;
            arr.slice(1).forEach(x=> x.select = false)
        }
        else{
            arr[0].select = false;
            arr[index].select = !arr[index].select;
        }
        this.setState({arr: [...arr]})
    }


    render() {
        return (
            <div className="small-buttons sort-menu" onMouseEnter={this.open} onMouseLeave={this.close}>
                <div className="border-white" style={{ height: 16, background: '#d4d4d4' }}>
                    <div className="btn-wrap width23" style={this.state.open ? { width: 53 } : { width: 23 }}>
                        <div className="btn-small">
                        {this.state.arr.length > 0 && 
                        (this.state.arr.filter(x=> x.select === true).length > 1 ? 
                        <div className="list-medium p-p"><span className="list-item padding-left">Фильтр</span></div>
                        : this.state.arr.map(x => {
                                    if (x?.text === 'Все' && x.select === true) {
                                        return (
                                            <div className="list-small all"><span className="list-item"><span></span></span></div>
                                        )
                                    } else if (x?.text === 'П/п' && x.select === true) {
                                        return (
                                            <div className="list-small p-p"><span className="list-item padding-left">П/п</span></div>
                                        )
                                    } else if(x.select === true) {
                                        return (
                                            <div className="list-small vodafone"><span className="list-item"><span data-img="" className={`${x.icon} icons`}></span></span></div>
                                        )
                                    }
                            }))}
                        </div>
                        <div className={this.state.open ? "block1 toggle" : "block1"}>
                            <SimpleBar style={{ maxHeight: 85 }}>
                                {this.state.arr.length > 0 && this.state.arr.map((x, index) => {
                                    if (x?.text === 'Все') {
                                        return (
                                            <div className={`list-small all ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span>Все</span></span></div>
                                        )
                                    } else if (x?.text === 'П/п') {
                                        return (
                                            <div className={`list-small p-p ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item padding-left">П/п</span></div>
                                        )
                                    } else {
                                        return (
                                            <div className={`list-small vodafone ${x.select && 'select-btn'}`} onClick={x => this.onChange(index)}><span className="list-item"><span data-img="" className={`${x.icon} icons`}></span></span></div>
                                        )
                                    }
                                })}
                            </SimpleBar>
                        </div></div></div>
                <div className="sort-btn">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z" fill="black"></path>
                    </svg>
                </div>
                <div className="border-sort"></div>
            </div>
        )
    }


}



export default DropdownSmall;