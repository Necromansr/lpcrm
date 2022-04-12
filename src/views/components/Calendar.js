import './dropdown.css';

import React, { Component } from 'react';
import { DateRangePicker } from 'react-date-ranges';
import 'react-date-ranges/dist/styles.css';
import 'react-date-ranges/dist/theme/default.css';
import { addDays, format } from 'date-fns';
// import { ru } from 'date-fns/locale';

import ru from './ru'

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
            <div onMouseEnter={this.open} onMouseLeave={this.close}>
                <input type="text" style={{ border: 'none', background: '#d4d4d4', padding: 0, height: 16, width: this.props.width, color: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', border: " 1px solid white", fontWeight: 300, cursor: 'default', outline: 'none' }} readOnly value={this.state.stats[0].startDate !== null ? format(this.state.stats[0].startDate, 'dd.MM.yyyy') + '-' + format(this.state.stats[0].endDate, 'dd.MM.yyyy') : ''} />
                <div className={this.state.open || (this.props.wrapper && this.state.select) ? "datarangepicker toggle-range" : "datarangepicker"}>
                    {(this.state.open || (this.props.wrapper && this.state.select)) && <DateRangePicker
                        onChange={item => {
                            this.setState({
                                stats: [item.selection]
                            })
                            this.props.search[this.props.keys] = format(item.selection.startDate, 'dd.MM.yyyy') + '-' + format(item.selection.endDate, 'dd.MM.yyyy')
                        }}
                        months={1}
                        locale={ru}
                        weekStartsOn={1}
                        minDate={addDays(new Date(), -1927)}
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