/**
 * Created by ZhiyuanSun on 16/9/22.
 */
import React, {Component} from 'react';
import EventSelectionItemImage from './event-selection-item-image';

export default class EventSelectionItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      showImage: false
    }
  }

  static defaultProps = {
    showImage: false,
    loadingImage: require('')
  };

  render(){
    return (
      <li>
        <a>
          <EventSelectionItemImage />
          <p></p>
        </a>
      </li>
    );
  }
}