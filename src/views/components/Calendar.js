import './dropdown.css';

import React, { Component } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays, format } from 'date-fns';
import { ru } from 'date-fns/locale';

let timer = null;


class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: [{
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }],
            open: false,
            select: false
        }
    }



    shouldComponentUpdate(nextProps, nextState){
        if(JSON.stringify(this.state.stats) !== JSON.stringify(nextState.stats)){
            this.props.onWrapper(true);
            this.setState({
                select: true
            })
            return true;
        } else if(this.state.open !== nextState.open) {
            return true;
        } else if(!nextProps.wrapper && this.state.select){
            this.setState({
                open: false,
                select: false
            })
            return true;
        }

        return false;
    }


    open = (e) => {
        this.setState({
            open: true
        })

    }


    close = (e) => {
        this.setState({
            open: false

        })

    }


    render() {
        return (
        <div onMouseEnter={this.open} onMouseLeave={this.close}>
            <input type="text" readOnly value={format(this.state.stats[0].startDate, 'dd.MM.yyyy') + '-' + format(this.state.stats[0].endDate, 'dd.MM.yyyy')} />
            <div className={this.state.open || (this.props.wrapper && this.state.select) ? "datarangepicker toggle-range" : "datarangepicker" }>
                {(this.state.open || (this.props.wrapper && this.state.select)) && <DateRangePicker
                    onChange={item => this.setState({stats:[item.selection]})}
                    months={1}
                    locale={ru}
                    minDate={addDays(new Date(), -900)}
                    maxDate={addDays(new Date(), 900)}
                    direction="vertical"
                    scroll={{ enabled: true }}
                    ranges={this.state.stats}
                /> }
            </div>
        </div>
        )
    }

}


export default Calendar;