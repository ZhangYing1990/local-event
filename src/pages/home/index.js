import React, {
	Component
} from 'react';

import Carousel from '../../components/carousel/carousel';
import IconGrid from '../../components/icon-grid/icon-grid';
import Nearby from '../../components/nearby/nearby';
import './index.less';

export default class Home extends Component {

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



	// ************************************
	// Component APIs
	// ************************************
	constructor(props){
		super(props);
		this.state = {
			carouselItems: this.getCarouselItems(),
			iconGridItems: this.getIconGridItems()
		}

	}


	render() {

		return (
			<div className="home-page">
				<Carousel items={this.state.carouselItems} arrows={false}></Carousel>
				<div className="icon-grid-div">
					<IconGrid items={this.state.iconGridItems}></IconGrid>
				</div>
				<Nearby></Nearby>
			</div>
		);
	}
}