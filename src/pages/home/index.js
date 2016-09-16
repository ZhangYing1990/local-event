import React, {
	Component
} from 'react';

import Carousel from '../../components/carousel/carousel';

export default class Home extends Component {
	render() {

		let items = [
			{
				src: require('../../img/jpgs/carousel-item1.jpg'),
				alt:"item1"
			},
			{
				src: require('../../img/jpgs/carousel-item2.jpg'),
				alt:"item2"
			},
			{
				src: require('../../img/jpgs/carousel-item3.jpg'),
				alt:"item3"
			},
			{
				src: require('../../img/jpgs/carousel-item4.jpg'),
				alt:"item4"
			}
		];

		return (
			<div className="page1">
				<Carousel items={items} arrows={false}></Carousel>
			</div>
		);
	}
}