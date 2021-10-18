import './dropdown.css';

import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import {arrowDown, arrowUp} from '../../until/images'



class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: 'Select...', 
            value: '',
            source: null,
            color: null
        }
    }


    _onClick = () => {
        this.setState({visible: !this.state.visible});
    }

    _onClickItem = (item) => {
        this.setState({
            value: item.value,
            text: item.text,
            source: item.source,
            color:  item.color
        });
    }

    render() {
        return (
            <div style={{position: 'relative'}} onClick={this._onClick}>
                <div className="selected-list" data-value={this.state.value} style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}> { this.state.source && <img src={this.state.source} style={{marginRight: 5}} /> } <span style={this.state.color && {borderBottom: "2px solid " + this.state.color,  paddingBottom: 2}}> {this.state.text} </span> <img style={{marginLeft: 25}} src={this.state.visible ? arrowUp : arrowDown} /> </div>
                {this.state.visible && <ul style={{position: 'absolute', zIndex: 99999, width: '100px', background: 'white', padding: 0, margin: 0, marginTop: "5px"}} >
                    <SimpleBar style={{ maxHeight: "150px"}}>
                        {this.props.data.map(x=> (
                            <li style={{cursor: 'pointer', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}} key={x.key} onClick={()=> this._onClickItem(x)}>
                             { x.color && <div style={{background: x.color, width: 10, height: 10, borderRadius: 2, marginRight: 5}}></div> }  { x.source && <img src={x.source} style={{marginRight: 5}} /> } {x.text}
                            </li>
                        ))}
                    </SimpleBar>
                </ul>}
            </div>
        )
    }

}


export default Dropdown;