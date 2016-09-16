/**
 * Created by ZhiyuanSun on 16/9/16.
 */
import React, {Component} from 'react';
import IconGridItem from './js/icon-grid-item';
import './styles/icon-grid.less';


export default class IconGrid extends Component{
  render(){
    const count = this.props.items.length;
    let itemNodes = this.props.items.map((item, index) =>{
      return <IconGridItem {...item} count={count} key={'icon-grid-item' + index}></IconGridItem>;
    });
    return (
      <div className="icon-grid">
        <ul className="icon-grid-container">
          {itemNodes}
        </ul>
      </div>
    );
  }
}