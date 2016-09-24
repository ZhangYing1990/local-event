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
    if(rect.top < this.props.viewport.height + 100){
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
    loadingImage: require('../img/loading.png')
  };

  render(){
    let lazyImg = this.state.showImage ? this.props.img : this.props.loadingImage;
    let img = this.props.lazyLoading ? lazyImg : this.props.img;
    return (
      <img src={img} height={this.props.imgHeight} width={this.props.imgWidth}/>
    );
  }

  componentDidMount(){
    this.updateShowStatus();
  }

  componentDidUpdate(){
    this.updateShowStatus();
  }
}