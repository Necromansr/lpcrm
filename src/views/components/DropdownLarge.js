import './dropdown.css';

import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import {arrowDown, arrowUp} from '../../until/images'



class DropdownLarge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: '', 
            value: '',
            source: null,
            color: null
        }
    }


    _onMounseEnter = () => {
        this.setState({visible: true});
    }
    _onMounseLeave = () => {
        this.setState({visible: false});
    }
    _onClickItem = (item) => {
        this.setState({
            value: item.value,
            text: item.text,
            source: item.source,
            color:  item.color
        });
    }

    _onChange = (e)=> {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div className="btn-wrap-large" onMouseEnter={this._onMounseEnter}>
                <div className="selected-list" data-value={this.state.value} style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}><input type='text' value={this.state.text} onChange={this._onChange} className="input-btn-large" /> { this.state.source && <img src={this.state.source} style={{marginRight: 5}} /> } <span style={this.state.color && {borderBottom: "2px solid " + this.state.color,  paddingBottom: 2}}>  </span> <img style={{marginLeft: 25, height: 3}} src={this.state.visible ? arrowUp : arrowDown} /> </div>
               <div className={this.state.visible ? "block1 toggle" : "block1"} >
                    <SimpleBar style={{ maxHeight: "150px"}}>
                        {this.props.data.map(x=> (
                            <div>
                            <span key={x.key} onClick={()=> this._onClickItem(x)} className="list-item">
                             {/* { x.color && <div style={{background: x.color, width: 10, height: 10, borderRadius: 2, marginRight: 5}}></div> }  { x.source && <img src={x.source} style={{marginRight: 5}} /> }  */}
                             <span className="color-515151 color-form"></span>
                             <span className="text-length">{x.text}</span>
                            </span>
                            </div>
                        ))}
                    </SimpleBar>
                </div>
            </div>
        )
    }

}


export default DropdownLarge;