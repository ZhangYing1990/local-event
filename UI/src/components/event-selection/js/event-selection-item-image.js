/**
 * Created by ZhiyuanSun on 16/9/22.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class EventSelectionItemImage extends Component{
  updateShowStatus(){
    if(this.state.showImage)
      return;

    // let el = this.getDOMNode();
    let el = ReactDOM.findDOMNode(this);
    let rect = el.getBoundingClientRect();
    if(rect.top < 0){
      this.setState({
        showImage: true
      })
    }
  }

  constructor(props){
    super(props);
    this.state = {
      showImage: false
    }
  }

  static defaultProps = {
    loadingImage: require('../img/carousel-item1.jpg')
  };

  render(){
    let lazyImg = this.state.showImage ? this.props.src : this.props.loadingImage;
    let img = this.props.lazyLoading ? lazyImg : this.props.img;
    return (
      <img src={img}/>
    );
  }

  componentDidMount(){
    console.log('did update selection-item-image');
    this.updateShowStatus();
  }

  componentDidUpdate(){
    console.log('did update selection-item-image');
    this.updateShowStatus();
  }
}