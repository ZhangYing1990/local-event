/**
 * Created by ZhiyuanSun on 16/9/22.
 */
import React, {Component} from 'react';
import EventSelectionItem from './js/event-selection-item';

import './styles/index.less';

export default class EventSelection extends Component{

  static defaultProps = {
    showImage: false
  };

  constructor(props){
    super(props);
    this.state = {
      viewport: {
        top: 0,
        height: window.innerHeight
      }
    }
  }

  componentDidMount(){
    if(this.props.lazyLoading){
      window.addEventListener('scroll', this.updateViewport.bind(this), false);
      window.addEventListener('resize', this.updateViewport.bind(this), false);
    }
  }

  componentWillUnmount(){
    if(this.props.lazyLoading){
      window.removeEventListener('scroll', this.updateViewport);
      window.removeEventListener('resize', this.updateViewport);
    }
  }

  updateViewport(){
    this.setState({
      viewport:{
        top: window.pageYOffset,
        height: window.innerHeight
      }
    });
  }

  render(){
    let liNodes = this.props.items.map((item, index) =>{
      return <EventSelectionItem key={"selection-item-"+index} {...this.props} item={item} viewport={this.state.viewport}></EventSelectionItem>
    });
    return (
      <ul className="event-selection">
        {liNodes}
      </ul>
    );
  }
}
//http://w33ble.github.io/understanding-react/demos/lazy-load.html