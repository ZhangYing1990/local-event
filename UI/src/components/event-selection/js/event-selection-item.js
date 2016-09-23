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
    console.log('component will mount');
  }

  componentWillUpdate(){
    console.log('component will update');
  }

  componentDidMount(){
    console.log('component did mount');
  }


  render(){
    console.log('component render');
    let {item, lazyLoading} = this.props;
    return (
      <li>
        <a href={item.url}>
          <EventSelectionItemImage img={item.img} lazyLoading={lazyLoading}></EventSelectionItemImage>
          <p>{item.description}</p>
        </a>
      </li>
    );
  }
}