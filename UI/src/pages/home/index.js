import React, {
	Component
} from 'react';

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import Carousel from '../../components/carousel/carousel';
import IconGrid from '../../components/icon-grid/icon-grid';
import EventSelection from '../../components/event-selection/event-selection';

import {getEventSelectionItems} from '../../js/actions/home';

import NearbyContainer from '../../js/containers/nearby-container';
import './index.less';

class Home extends Component {

	getCarouselItems(){
		let carouselItems = [
			{
				src: require('../../img/carouselItems/carousel-item1.jpg'),
				alt:"item1"
			},
			{
				src: require('../../img/carouselItems/carousel-item2.jpg'),
				alt:"item2"
			},
			{
				src: require('../../img/carouselItems/carousel-item3.jpg'),
				alt:"item3"
			},
			{
				src: require('../../img/carouselItems/carousel-item4.jpg'),
				alt:"item4"
			}
		];
		return carouselItems;
	}

	getIconGridItems(){
		let iconGridItems = [
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			},
			{
				linkTo: "wwww.baidu.com",
				imgSrc: require('../../img/IconGridItems/icongrid-item1.jpg'),
				text: "戏曲"
			}
		];
		return iconGridItems;
	}

	getEventSelectionItems(){

	}



	// ************************************
	// Component APIs
	// ************************************
	constructor(props){
		super(props);
		this.carouselItems = this.getCarouselItems();
		this.iconGridItems = this.getIconGridItems();
	}


	componentWillMount(){
		this.props.getEventSelectionItems(1,20);
	}

	render() {
		const display = this.props ? this.props.home.nearby.display : true;

		const eventSelectionItems = this.props.home.eventSelection.items;

		return (
			<div className="home-page">
				<Carousel items={this.carouselItems} arrows={false}></Carousel>
				<div className="icon-grid-div">
					<IconGrid items={this.iconGridItems}></IconGrid>
				</div>
				<div className="bord"></div>
				<NearbyContainer></NearbyContainer>
				{display ? <div className="bord"></div> : null}
				<EventSelection lazyLoading={true} items={eventSelectionItems} imgWidth="100%"></EventSelection>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	"use strict";
	return {
		home: state.home
	}
};

const mapDispatchToProps = (dispatch) =>{
	"use strict";
	return bindActionCreators({getEventSelectionItems}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

