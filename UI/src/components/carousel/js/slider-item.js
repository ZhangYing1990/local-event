/**
 * Created by ZhiyuanSun on 16/8/18.
 */
import React, { Component} from 'react';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {count, item} = this.props;
    let percentage = 100/count + '%';

    let liStyle = this.props.verticalDir ? {height: percentage} : {width: percentage};
    return (
      <li className="slider-item" style={liStyle}>
        <img src={item.src} alt={item.alt}/>
      </li>
    );
  }
}