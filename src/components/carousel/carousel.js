/**
 * Created by ZhiyuanSun on 16/8/18.
 */
import React, { Component } from 'react';

import './styles/carousel.scss';

import SliderItem from './js/slider-item';
import SliderDots from './js/slider-dot';
import SliderArrows from './js/slider-arrow';

export default class Carousel extends Component {


  /// *****************************************
  /// Custom APIs
  /// *****************************************
  // 向前向后多少
  turn(n, offset = 0) {
    let _n = this.state.currentItemIndex + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({
      currentItemIndex: _n,
      currentOffset: offset,
      isSwiping: false
    });
  }

  // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.switchInterval * 1000);
    }
  }

  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  handleTouchStart = (event) =>{
    this.pausePlay();

    const touch = event.touches[0];

    this.startX = touch.pageX;
    this.startY = touch.pageY;
    this.startTime = new Date();
    this.isSwiping = undefined;
    if(this._ulDom && this.props.items && this.props.items.length > 0){
      this.touchItemWidth = this._ulDom.offsetWidth/this.props.items.length;
      this.started = true;
    }
    else {
      return;
    }
  };

  handleTouchMove = (event) =>{
    if (!this.started) {
      this.handleTouchStart(event);
      return;
    }

    const touch = event.touches[0];

    let delta = (this.startX - touch.pageX)/this.touchItemWidth;

    delta = delta > 1 ? 1 : delta;

    this.setState({
      currentOffset: delta,
      isSwiping: true
    });

    this.lastPageX = touch.pageX;

  };

  handleTouchEnd = (event) =>{
    this.endTime = new Date();
    if(!this.started){
      return;
    }

    let delta = this.startX - this.lastPageX;

    let isQuickMove = Math.abs(delta/(this.endTime - this.startTime)) > this.props.swipeSensitivity;

    // 最后一个轮播项
    if((this.state.currentItemIndex === this.props.items.length - 1) && delta > 0) {
      this.turn(0);
    }
    // 第一个轮播项
    else if(this.state.currentItemIndex === 0 && delta < 0){
      this.turn(0);
    }
    else if(2 * Math.abs(delta) > this.touchItemWidth || isQuickMove){
      let turnIndex = delta > 0 ? 1 : -1;
      this.turn(turnIndex);
    }
    else {
      this.turn(0);
    }

    this.startX = 0;
    this.lastPageX = 0;
    this.started = false;

  };


  /// *****************************************
  /// Component APIs
  /// *****************************************
  static defaultProps = {
    animationDuration: 0.2,
    switchInterval: 3,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
    swipeSensitivity: 0.1875
  };

  static autoPlayFlag = null;

  constructor(props) {
    super(props);
    this.state = {
      currentItemIndex: 0,
      currentOffset: 0,
      isSwiping: false
    };
  }

  componentDidMount() {
    this.goPlay();
  }

  render() {

    const {disabled} = this.props;
    const touchEvents = disabled ? {} : {
      onTouchStart: this.handleTouchStart,
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    };

    const count = this.props.items.length;

    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />;
    });

    let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} currentItemIndex={this.state.currentItemIndex} />;

    let currentLeft = -100 * (this.state.currentItemIndex + this.state.currentOffset) + "%";
    let transitionDuration = this.state.isSwiping ? 0 + "s" : this.props.animationDuration + "s";

    return (
      <div
        className="slider"
        onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null}
        onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
        <ul
            {...touchEvents}
            ref={(ulDom) => {this._ulDom = ulDom}}
            style={{
              left: currentLeft,
              transitionDuration: transitionDuration,
              transitionTimingFunction: 'linear',
              width: this.props.items.length * 100 + "%"
            }}>
          {itemNodes}
        </ul>
        {this.props.arrows ? arrowsNode : null}
        {this.props.dots ? dotsNode : null}
      </div>
    );
  }
}

