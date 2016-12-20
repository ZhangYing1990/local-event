/**
 * Created by ZhiyuanSun on 16/9/18.
 */
import React, { Component} from 'react';

export default class SliderTextItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {count, item} = this.props;
    let percentage = 100/count + '%';

    let liStyle = this.props.verticalDir ? {height: percentage} : {width: percentage};
    return (
      <a className="nearby-event-content" style={liStyle} href={item.url}>
        <p className="title">{item.title}</p>
        <span className="description">{item.description}</span>
      </a>
    );
  }
}