/**
 * Created by ZhiyuanSun on 16/9/22.
 */
import React, {Component} from 'react';
import EventSelectionItemImage from './event-selection-item-image';

export default class EventSelectionItem extends Component{
  static defaultProps = {
    showImage: false,
    lazyLoading: false
  };

  constructor(props){
    super(props);
    this.state = {
      showImage: false
    }
  }

  componentWillMount(){
  }

  componentWillUpdate(){
  }

  componentDidMount(){
  }


  render(){
    let {item, lazyLoading} = this.props;
    return (
      <li>
        <a href={item.url}>
          <EventSelectionItemImage {...this.props} img={item.img}></EventSelectionItemImage>
          <p>{item.description}</p>
        </a>
      </li>
    );
  }
}