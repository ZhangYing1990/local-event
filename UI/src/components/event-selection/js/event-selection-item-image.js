/**
 * Created by ZhiyuanSun on 16/9/22.
 */
import React, {Component} from 'react';

export default class EventSelectionItemImage extends Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {
    showImage: false,
    loadingImage: require('')
  };

  render(){
    let lazyImg = this.props.showImage ? this.props.src : this.props.loadingImage;
    let img = this.props.lazyLoading ? lazyImg : this.props.src;
    return (
      <img src={img}/>
    );
  }

  componentDidUpdate(){
    console.log('did update selection-item-image');
  }
}