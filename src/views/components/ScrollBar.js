import { useEffect, useRef, useState } from "react";
import "./ScrollBar.css";
import _ from "lodash";

export default function Scroll({ children, draggeble, onScroll, height, style, className, horizontal = false, setT, vertical = false, hideBar = true }) {
    let [heightScroll, setHeightScroll] = useState(0);
    let [widthScroll, setWidthScroll] = useState(0);
    let [top, setTop] = useState(true);
    let [left, setLeft] = useState(true);
    let ref = useRef();
    if (setT)
        setT(ref);
    useEffect(() => {
        let TrackHeight = ref.current.querySelector(".track-vertical").clientHeight;
        let TrackWidth = ref.current.querySelector(".track-horizontal").clientWidth;
        setWidthScroll(
            (TrackWidth / 2) * (TrackWidth / ref.current.querySelector('.scroll').scrollWidth)
        );
        setHeightScroll(
            (TrackHeight / 2) * (TrackHeight / ref.current.querySelector('.scroll').scrollHeight)
        );
    }, [ref.current?.querySelector('.scroll')?.scrollHeight]);

    useEffect(() => {
            
            if (
                (ref.current.querySelector('.scroll').scrollHeight >
                ref.current.querySelector('.scroll').clientHeight && ref.current.querySelector('.scroll').style.overflow !== 'hidden') 
            ) {
                setTop(true);
            } else {
                setTop(false);
            }
    
            if (
                (ref.current.querySelector('.scroll').scrollWidth >
                ref.current.querySelector('.scroll').clientWidth && ref.current.querySelector('.scroll').style.overflow !== 'hidden')
            ) {
                setLeft(true);
            } else {
                setLeft(false);
            }
       
    }, [ref.current?.querySelector('.scroll')?.scrollHeight, vertical]);

    let scroll = (event) => {
        let track = ref.current.querySelector(".track-vertical");
        let bar = ref.current.querySelector(".bar");
        const scrollbarRects = track.getBoundingClientRect();
        let content = ref.current;
        const scrollbarTop = scrollbarRects.top + window.pageYOffset;
        const thumbRects = bar.getBoundingClientRect();
        const thumbTop = thumbRects.top + window.pageYOffset;
        const shiftY = event.pageY - thumbTop;
        const max = track.offsetHeight - bar.offsetHeight + 1;

        document.onmousemove = (event) => {
            let top = event.pageY - shiftY - scrollbarTop;

            top = top < 0 ? 0 : top > max ? max : top;

            content.scrollTop =
                (top * (content.scrollHeight - content.clientHeight)) /
                (track.clientHeight - bar.clientHeight);
        };

        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
        };
    };

    let scrollLeft = (event) => {
        let track = ref.current.querySelector(".track-horizontal");
        let bar = ref.current.querySelector(".track-horizontal .bar");
        const scrollbarRects = track.getBoundingClientRect();
        let content = ref.current;
        const scrollbarLeft = scrollbarRects.left + window.pageXOffset;
        const thumbRects = bar.getBoundingClientRect();
        const thumbLeft = thumbRects.left + window.pageXOffset;
        const shiftX = event.pageY - thumbLeft;
        const max = track.offsetWidth - bar.offsetWidth + 1;

        document.onmousemove = (event) => {
            let left = event.pageX - shiftX - scrollbarLeft;

            left = left < 0 ? 0 : left > max ? max : left;

            content.scrollLeft =
                (left * (content.scrollWidth - content.clientWidth)) /
                (track.clientWidth - bar.clientWidth);
        };

        document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
        };
    };




    return (
        <div className="wrapper-scroll"
            ref={ref}
        >
            <div
                style={{ ...{ height: height, transition: '0.2s' }, ...style }}
                className={"scroll " + className}
                onScroll={(e) => {
                    if (onScroll)
                        onScroll(e);
                    let TrackHeight = ref.current.querySelector(".track-vertical")
                        .clientHeight;
                    let top = Math.floor(
                        (TrackHeight -
                            ref.current.querySelector(".track-vertical .bar").clientHeight) *
                        (e.target.scrollTop /
                            (e.target.scrollHeight - e.target.clientHeight))
                    );
                    let TrackWidth = ref.current.querySelector(".track-horizontal")
                        .clientWidth;

                    let left = Math.floor(
                        (TrackWidth -
                            ref.current.querySelector(".track-horizontal .bar").clientWidth) *
                        (e.target.scrollLeft /
                            (e.target.scrollWidth - e.target.clientWidth))
                    );
                    ref.current.querySelector(
                        ".track-horizontal .bar"
                    ).style.transform = `translate3d(${left}px, 0px, 0px)`;
                    ref.current.querySelector(
                        ".track-vertical .bar"
                    ).style.transform = `translate3d(0px, ${top}px, 0px)`;
                }}
            >
                {children}
            </div>
            <div style={(!top || height === 0 || vertical) && hideBar ? { display: "none" } : {}} className="track-vertical">
                <div
                    className="bar"
                    style={{
                        height: Math.max(20, heightScroll)
                    }}
                    onMouseDown={draggeble && scroll}
                ></div>
            </div> 
            <div
                style={(!left || !horizontal) ? { display: "none" } : {}}
                className="track-horizontal"
            >
                <div
                    className="bar"
                    style={{
                        width: Math.max(20, widthScroll)
                    }}
                    onMouseDown={draggeble && scrollLeft}
                ></div>
            </div>
        </div>
    );
}
