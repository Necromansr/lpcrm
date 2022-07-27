import { useEffect, useState } from "react";
// import "./styles.css";

export default function MaxaScroll({ updateHover, children, infiniteScroll, setHideArrow, podlozhka }) {
  let [heightScroll, setHeightScroll] = useState(0);
  let [widthScroll, setWidthScroll] = useState(0);
  let [top, setTop] = useState(true);
  let [left, setLeft] = useState(true);
  useEffect(() => {
    let TrackHeight = document.querySelector(".track-vertical").clientHeight;
    let TrackWidth = document.querySelector(".track-horizontal").clientWidth;

    setWidthScroll(
      TrackWidth * (TrackWidth / document.querySelector(".contentScroll").scrollWidth)
    );
    setHeightScroll(
      TrackHeight * (TrackHeight / document.querySelector(".contentScroll").scrollHeight)
    );
  }, []);

  useEffect(() => {
    if (
      document.querySelector(".contentScroll").scrollHeight >
      document.querySelector(".contentScroll").clientHeight
    ) {
      setTop(true);
    } else {
      setTop(false);
    }

    if (
      document.querySelector(".contentScroll").scrollWidth >
      document.querySelector(".contentScroll").clientWidth
    ) {
      setLeft(true);
    } else {
      setLeft(false);
    }
    window.addEventListener('resize', function () {

      if (
        document.querySelector(".contentScroll").scrollHeight >
        document.querySelector(".contentScroll").clientHeight
      ) {
        setTop(true);
      } else {
        setTop(false);
      }

      if (
        document.querySelector(".contentScroll").scrollWidth >
        document.querySelector(".contentScroll").clientWidth
      ) {
        setLeft(true);
      } else {
        setLeft(false);
      }
    })

  }, []);

  let scroll = (event) => {
    let track = document.querySelector(".track-vertical");
    let bar = document.querySelector(".bar");
    const scrollbarRects = track.getBoundingClientRect();
    let content = document.querySelector(".contentScroll");
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
    let track = document.querySelector(".track-horizontal");
    let bar = document.querySelector(".track-horizontal .bar");
    const scrollbarRects = track.getBoundingClientRect();
    let content = document.querySelector(".contentScroll");
    const scrollbarLeft = scrollbarRects.left + window.pageXOffset;
    const thumbRects = bar.getBoundingClientRect();
    const thumbLeft = thumbRects.left + window.pageXOffset;
    const shiftX = event.pageX - thumbLeft;
    const max = track.offsetWidth - bar.offsetWidth + 1;

    document.onmousemove = (event) => {
      let left = event.pageX - shiftX - scrollbarLeft;

      left = left < 0 ? 0 : left > max ? max : left;

      content.scrollLeft =
        (left * (content.scrollWidth - content.clientWidth)) /
        (track.clientWidth - bar.clientWidth);
      updateHover(event);
    };

    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
    };
  };
  function showScrollbar() {
    if (!podlozhka) {
      if (document.querySelector('.scrollbox')) {
        document.querySelector('.track-vertical').style.opacity = 1;
        document.querySelector('.track-horizontal').style.opacity = 1;
        if (setHideArrow) setHideArrow(true);

      }

    }
  }
  function hideScrollbar() {
    if (!podlozhka) {
      if (document.querySelector('.scrollbox')) {
        document.querySelector('.track-vertical').style.opacity = 0;
        document.querySelector('.track-horizontal').style.opacity = 0;
        if (setHideArrow) setHideArrow(false);
      }

    }

  }
  return (
    <div className="scrollbox"
      onMouseEnter={showScrollbar}
      onMouseLeave={hideScrollbar}
      style={!top ? { height: 'max-content' } : { height: '100%' }}
    >
      <div
        className="contentScroll"
        onScroll={(e) => {
          let TrackHeight = document.querySelector(".track-vertical")
            .clientHeight;
          let top = Math.floor(
            (TrackHeight -
              document.querySelector(".track-vertical .bar").clientHeight) *
            (e.target.scrollTop /
              (e.target.scrollHeight - e.target.clientHeight))
          );
          let TrackWidth = document.querySelector(".track-horizontal")
            .clientWidth;

          let left = Math.floor(
            (TrackWidth -
              document.querySelector(".track-horizontal .bar").clientWidth) *
            (e.target.scrollLeft /
              (e.target.scrollWidth - e.target.clientWidth))
          );
          document.querySelector(
            ".track-horizontal .bar"
          ).style.transform = `translate3d(${left}px, 0px, 0px)`;
          document.querySelector(
            ".track-vertical .bar"
          ).style.transform = `translate3d(0px, ${top}px, 0px)`;
          if (infiniteScroll) infiniteScroll(e);
        }}
      >
        {children}

      </div>
      <div style={!top ? { display: "none" } : {}} className="track-vertical">
        <div
          className="bar"
          style={{
            height: Math.max(60, heightScroll)
          }}
        //   onMouseDown={scroll}
        ></div>
      </div>
      <div
        style={!left ? { display: "none" } : {}}
        className="track-horizontal"
      >
        <div
          className="bar"
          style={{
            width: Math.max(60, widthScroll)
          }}
          onMouseDown={scrollLeft}
        ></div>
      </div>

    </div>
  );
}
