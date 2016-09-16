/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';

export default class IconGridItem extends Component{
  render(){
    const liStyle={
      width: 200/this.props.count + "%"
    };

    return (
      <li style={liStyle} className="icon-grid-item">
        <a href={this.props.linkTo}>
          <img src={this.props.imgSrc} className="icon-grid-item-img"/>
          <br />
          {this.props.text}
        </a>
      </li>
    );
  }
}