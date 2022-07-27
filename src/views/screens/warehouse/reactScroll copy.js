// const { Component } = React;
// const { render } = ReactDOM;

import { Component } from 'react';
// const {render} = ReactDOM;
// const root = document.body;
class ScrollBox extends Component {
	state = {
		shouldScroll: false,
	};

	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
		this.showScrollbar = this.showScrollbar.bind(this);
		this.hideScrollbar = this.hideScrollbar.bind(this);
	}

	//   componentDidMount() {
	//     const { content, thumb } = this;
	//     const { viewportHeight, ratio } = this;
	//     console.log(this.viewportHeight, this.contentHeight)
	//     const thumbHeight = viewportHeight * ratio;
	//     // console.log(content)
	//     thumb.style.height = `${thumbHeight}px`;

	//   }

	resize() {
		const { content, thumb, thumbHorizont, scrollbar, scrollbarHorizont } = this;
		const { viewportHeight, ratio, ratioWidth, viewportWidth } = this;
		// console.log(this.viewportHeight, this.contentHeight)
		const thumbHeight =  Math.max(30,viewportHeight * ratio * this.props.percent); // 0.93 tut - 7%
		// const thumbHeight = viewportHeight * ratio * this.props.percent; // 0.93 tut - 7%
		const thumbWidth = viewportWidth * ratioWidth * 2;
		// const scrollTop = content.scrollTop * this.props.percent;
		// const thumbTop = scrollTop * ratio;
		// thumb.style.transform = `translateY(${thumbTop}px)`;
		// console.log(ratioWidth)
		// console.log(this.props.percent)
		if(thumb?.style){
			thumb.style.height = `${thumbHeight}px`;
			thumbHorizont.style.width = `${thumbWidth}px`;
		
			if (content.offsetHeight > content.children[0].offsetHeight) {
				scrollbar.style.display = 'none';
			}
			if (content.offsetWidth > content.children[0].offsetWidth) {
				scrollbarHorizont.style.display = 'none';
			}
			// if(content.offsetHeight < 614) {
			// 	this.props.setPercentScroll(0.81);
			// }
			// if(content.offsetHeight < 460) {
			// 	this.props.setPercentScroll(0.79);
			// }
		}

	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}
	componentDidUpdate() {
		const { content, thumb, thumbHorizont, scrollbar, scrollbarHorizont, contentHeight } = this;
		const { viewportHeight, ratio, ratioWidth, viewportWidth } = this;
		// console.log(this.viewportHeight, this.contentHeight)
		// const thumbHeight = viewportHeight * ratio * this.props.percent; // 0.93 - 7%
		const thumbHeight =  Math.max(30,viewportHeight * ratio * this.props.percent); // 0.93 - 7%
		const thumbWidth = viewportWidth * ratioWidth * 2;
		// console.log(ratioWidth)
		// const scrollTop = content.scrollTop * this.props.percent;
		// const thumbTop = scrollTop * ratio;
		// thumb.style.transform = `translateY(${thumbTop}px)`;
		if(content.offsetHeight < 614) {
			this.props.setPercentScroll(0.81);
		}
		if(content.offsetHeight < 460) {
			this.props.setPercentScroll(0.79);
		}
		// console.log(this.props.percent)
		thumb.style.height = `${thumbHeight}px`;
		thumbHorizont.style.width = `${thumbWidth}px`;
		if(content?.offsetHeight){
		if (content.offsetHeight > content.children[0].offsetHeight) {
			scrollbar.style.display = 'none';
		}
		if (content.offsetWidth > content.children[0].offsetWidth) {
			scrollbarHorizont.style.display = 'none';
		}}

		// console.log(viewportHeight, ratio, contentHeight,thumbHeight);
	}

	get viewportHeight() {
		return (this.content?.offsetHeight);
	}
	get contentHeight() {
		return this.content?.scrollHeight;
	}
	get ratio() {
		return (this.viewportHeight / this.contentHeight);
		// return Math.max((this.viewportHeight / this.contentHeight), 30 / this.props.percent / this.viewportHeight);

	}

	get viewportWidth() {
		return this.content?.offsetWidth * 0.5;
	}
	get contentWidth() {
		return this.content?.scrollWidth;
	}
	get ratioWidth() {
		return this.viewportWidth / this.contentWidth;
	}

	handleScroll = (event) => {
		const { content, thumb, thumbHorizont } = this;
		const { viewportHeight, ratio, contentHeight, ratioWidth, viewportWidth } = this;
		const thumbHeight = Math.max(30,viewportHeight * ratio * this.props.percent);
		// ThumbSize = TrackLength * ViewportSize / (Maximum – Minimum + ViewportSize)
		// (scrollbar.height * scrollTop / content.height()
		const scrollTop = content.scrollTop * this.props.percent; // 7% tut
		const scrollLeft = content.scrollLeft;
		// const scrollBarArea = viewportHeight - thumbHeight;
		const thumbWidth = viewportWidth * ratioWidth * 2;
		// const thumbTop = scrollTop * ratio;
		// const thumbTop = (scrollTop - thumbHeight) * ratio;

		// const thumbTop  = viewportHeight * scrollTop /contentHeight;
		const thumbTop = Math.min(scrollTop * ratio,viewportHeight * this.props.percent - thumbHeight);
		const thumbLeft = scrollLeft * ratioWidth;
		this.props.scroll(event);
		// console.log(scrollTop, thumbHeight, contentHeight, viewportHeight)
		console.table('thumb',thumbHeight ,viewportHeight * ratio * this.props.percent )
		console.table('scrolltop',content.scrollTop , scrollTop)
		console.table('content',contentHeight,viewportHeight)
		console.table('ratio',ratio)
		// console.log(scrollTop, (viewportHeight * ratio * this.props.percent), 30)
		thumb.style.transform = `translateY(${thumbTop}px)`;
		thumb.style.height = `${thumbHeight}px`;
		
		thumbHorizont.style.transform = `translateX(${thumbLeft}px)`;
		thumbHorizont.style.width = `${thumbWidth}px`;
		// console.log('pidor')
	};

	scroll = (event) => {
		const { scrollbar, content, thumb, ratio } = this;
		const clientY = event.clientY;
		const scrollbarRects = scrollbar.getBoundingClientRect();
		const scrollbarTop = scrollbarRects.top + window.pageYOffset;
		const thumbRects = thumb.getBoundingClientRect();
		const thumbTop = thumbRects.top + window.pageYOffset;
		const shiftY = event.pageY - thumbTop;
		const max = scrollbar.offsetHeight - thumb.offsetHeight + 1;

		document.onmousemove = (event) => {
			let top = event.pageY - shiftY - scrollbarTop;

			top = top < 0 ? 0 : top > max ? max : top;

			content.scrollTop = top / ratio;
		};

		document.onmouseup = () => {
			document.onmousemove = document.onmouseup = null;
		};
	};
	scrollLeft = (event) => {
		const { scrollbarHorizont, content, thumbHorizont, ratioWidth } = this;
		const clientY = event.clientY;
		const scrollbarRects = scrollbarHorizont.getBoundingClientRect();
		const scrollbarLeft = scrollbarRects.left + window.pageXOffset;
		const thumbRects = thumbHorizont.getBoundingClientRect();
		const thumbLeft = thumbRects.left + window.pageXOffset;
		const shiftX = event.pageX - thumbLeft;
		const max = scrollbarHorizont.offsetWidth - thumbHorizont.offsetWidth + 1;

		document.onmousemove = (event) => {
			let left = event.pageX - shiftX - scrollbarLeft;

			left = left < 0 ? 0 : left > max ? max : left;

			content.scrollLeft = left / ratioWidth;
		};

		document.onmouseup = () => {
			document.onmousemove = document.onmouseup = null;
		};
	};
	showScrollbar () {
		if (!this.props.podlozhka) {
			document.querySelector('.scrollbar').style.opacity = 1;
			document.querySelector('.scrollbarHorizont').style.opacity = 1;
			this.props.setTreugolka(true);
		}

	}
	hideScrollbar () {
		if(!this.props.podlozhka){
			document.querySelector('.scrollbar').style.opacity = 0;
			document.querySelector('.scrollbarHorizont').style.opacity = 0;
			this.props.setTreugolka(false);
		}

	}
	render() {
		const { shouldScroll, props, content } = this;
		const color = props.color || '#000';
		// const func = props.scroll;
		const children = props.children;

		// window.addEventListener('resize',function(){
		//     this.handleScroll()
		// });

		// console.log(content?.children[0].offsetHeight, content?.offsetHeight)

		return (
			<div className="scrollbox" 	
				onMouseEnter={this.showScrollbar}
				onMouseLeave={this.hideScrollbar}
			>
				<div
					onScroll={this.handleScroll}
					ref={(div) => (this.content = div)}
					className="contentScroll"
				>
					{children}
				</div>
				<div
					className="scrollbar"
					ref={(div) => (this.scrollbar = div)}
					style={{ height: `${this.props.percent * 100}%` }} //tut props percent 7%
				>
					<div
						className="thumb"
						ref={(div) => (this.thumb = div)}
						style={{ backgroundColor: color }}
						// onMouseDown={this.scroll}
						// onSelectStart={event => event.preventDefault()}
					/>
				</div>
				<div
					className="scrollbarHorizont"
					ref={(div) => (this.scrollbarHorizont = div)}
					style={{ width: 'calc(100% * 0.5 - 10px)' }}
					//   style={{top: this.props.top, height: `calc(100% - ${this.props.bottom + this.props.top + 3}px)`}}
				>
					<div
						className="thumbHorizont"
						ref={(div) => (this.thumbHorizont = div)}
						style={{ backgroundColor: color }}
						onMouseDown={this.scrollLeft}
						// onSelectStart={event => event.preventDefault()}
					/>
				</div>
			</div>
		);
	}
}
export default ScrollBox;

