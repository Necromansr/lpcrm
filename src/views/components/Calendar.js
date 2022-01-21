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
        // console.log(ru);
        super(props);
        this.state = {
            stats: [{
                startDate: null,
                endDate: null,
                key: 'selection'
            }],
            open: false,
            select: false
        }
    }



    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {
            this.setState({
                open: false,
                select: false
            })
        }


        if (JSON.stringify(this.state.stats) !== JSON.stringify(prevState.stats) && this.state.stats[0].startDate !== null) {
            this.props.onWrapper(true);
            this.setState({
                select: true
            })
        }
        if ((this.props.refresh !== prevProps.refresh)) {
            this.props.onWrapper(false);

            this.setState({
                stats: [{
                    startDate: null,
                    endDate: null,
                    key: 'selection'
                }],
                open: false,
                select: false
            })
        }
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
                <input type="text" style={{ border: 'none', background: '#d4d4d4', padding: 0, height: 16, width: this.props.width, color: 'rgba(0, 0, 0, 0.5)', paddingLeft: 1, border: " 1px solid white", fontWeight: 300, cursor: 'default', outline: 'none' }} readOnly value={this.state.stats[0].startDate !== null ? format(this.state.stats[0].startDate, 'dd.MM.yyyy') + '-' + format(this.state.stats[0].endDate, 'dd.MM.yyyy') : ''} />
                <div className={this.state.open || (this.props.wrapper && this.state.select) ? "datarangepicker toggle-range" : "datarangepicker"}>
                    {(this.state.open || (this.props.wrapper && this.state.select)) && <DateRangePicker
                        onChange={item => this.setState({ stats: [item.selection] })}
                        months={1}
                        locale={ru}
                        weekStartsOn={1}
                        minDate={addDays(new Date(), -900)}
                        maxDate={addDays(new Date(), 0)}
                        direction="vertical"
                        scroll={{ enabled: true }}
                        ranges={this.state.stats}
                    />}
                </div>
            </div>
        )
    }

}


export default Calendar;