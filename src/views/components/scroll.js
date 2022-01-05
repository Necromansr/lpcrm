


import React, { Component } from 'react';
import './scroll.css'



function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { 
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); 

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; 
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}


function debounce(f, ms) {

    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}

class Scroll extends Component {


    constructor(props) {

        super(props);

        this.state = {}
    }

    componentDidMount() {
        document.querySelector('.scroll').style.height = document.querySelector('.wrapper > div').offsetHeight / document.querySelector('.wrapper > div > div').offsetHeight * 100 + "%";
        document.querySelector('.wrapper > div').addEventListener('scroll',e =>  { 
                document.querySelector('.scroll').style.transform = "translate(0, " + Math.min(e.target.offsetHeight - document.querySelector('.scroll').offsetHeight - 10, (e.target.scrollTop / (document.querySelector('.wrapper > div > div').offsetHeight - 100)) * 100) + "px)"

            }

        )

        document.querySelector('.wrapper > div').addEventListener('touchmove', e => {

            document.querySelector('.scroll').style.transform = "translate(0, " + Math.min(e.target.offsetHeight - document.querySelector('.scroll').offsetHeight - 10, (e.target.scrollTop / (document.querySelector('.wrapper > div > div').offsetHeight - 100)) * 100) + "px)"
        }
        )
    }






    render() {
        return (
            <div class="wrapper">
                <div>
                    <div style={{width: 53}}>
                        {this.props.children}
                    </div>
                    <div class="bg-scroll">
                        <div class="scroll">

                        </div>
                    </div>

                </div>

            </div>
        )
    }


}


export default Scroll;