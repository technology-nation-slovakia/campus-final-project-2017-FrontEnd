import React from 'react';
import axios from 'axios';

import MapColorStore from '../stores/MapColorStore';
import * as MapColorActions from '../actions/MapColorActions';


class MapAll extends React.Component {
	constructor() {
		super();
		this.getMapColor = this.getMapColor.bind(this);
		this.state = {
			colors: MapColorStore.getAll(),
		};
	}


	getMapColor() {
		this.setState({
				colors: MapColorStore.getAll(),
		});
	}
	//only fires once on start and listen to change
	componentWillMount() {
		axios.get("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data").then((data) => {
			const colors = data.data;
			this.setState({ colors })
		});
	}
	//load data on start
	// componentDidMount() {
	// 	axios("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data").then((data) => {
	// 		const colors = data.data;
	// 		this.setState({ colors })
	// 	});
	// }
	//prevent memory leak REACT FLUX TUTORIAL #14 - React & Flux Memory Leaks
	componentWillUnmount() {
		MapColorStore.removeListener("change", this.geMapColor);

	}



	reloadMapColor() {
		MapColorActions.reloadMapColor();
	}

	render() {
		const mapStyle = {
    		marginTop: "30px"
		};

		const { colorCaffe, colorGreen, colorTerrace, colorBrown } = this.state.colors;

	  return (
	  	<div style={mapStyle}>
		    <svg width="1280" height="640">
				<Floor color ="#999999"/>
				<Kafe color={colorCaffe}/>
				<Hall />
				<CommonSpace />
				<g fill="#999999" className="wall" transform="translate(560,280)scale(-1,1)"><DoubleWallH /></g>
				<PrivateOffices color="#999999" />
				<GreenMeetingRoom color={colorGreen} />
				<BrownMeetingRoom color={colorBrown} />
				<OpenSpace />
				<Terrace color={colorTerrace} />
				<People />
		    </svg>
		    <button onClick={this.reloadMapColor.bind(this)}>Reload!</button>
	    </div>
	  );
  }
}

class Rect extends React.Component {
	render() {
		return (
			<g><rect className="description" x={this.props.xposition} y={this.props.yposition} width="320" height="100" opacity = "0.95" /></g>
		);
	}
}

class PrivateOffices extends React.Component {
	render() {
		return (
			<g fill={this.props.color}>
				<g className="wall" transform="translate(704,208)"><DoubleWallV /></g>
				<g className="wall" transform="translate(736,224)"><DoubleWallV /></g>
				<g className="wall" transform="translate(768,240)"><DoubleWallV /></g>
				<g className="wall" transform="translate(832,256)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(800,272)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(768,288)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(736,304)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(704,320)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(672,336)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(496,296)"><DoubleWallV /></g>
				<g className="wall" transform="translate(528,312)"><DoubleWallV /></g>
				<g className="wall" transform="translate(560,328)"><DoubleWallV /></g>
				<g className="wall" transform="translate(592,344)"><DoubleWallV /></g>
			</g>
		);
	}
}

class GreenMeetingRoom extends React.Component {
	render() {
		return (
			<g fill={this.props.color}>
				<g className="wall" transform="translate(624,232)"><SingleWall /></g>
				<g className="wall" transform="translate(608,240)"><DoubleWallV /></g>
				<g className="wall" transform="translate(640,256)scale(-1,1)"><DoubleWallH /></g>
				<g className="wall" transform="translate(560,264)"><DoubleWallV /></g>
				<g className="wall" transform="translate(544,272)"><SingleWall /></g>
				<g id="Bubble_Green" className="bubble" ><Bubble_Green /></g>
				<g id="Rect_Green" opacity="0"><Rect xposition="665" yposition="230" />
					<text className="desc" x="685" y="250">
					<tspan x="685" dy="0.4em">Green Meeting Room</tspan>
        			<tspan x="685" dy="1.8em">Now: </tspan>
        			<tspan x="685" dy="1.4em">Next: </tspan>
				</text>
				</g>
			</g>
		);
	}
}

class BrownMeetingRoom extends React.Component {
	render() {
	return (
		<g fill={this.props.color}>
			<g className="wall" transform="translate(512,304)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(480,320)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(592,344)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(560,360)scale(-1,1)"><DoubleWallH /></g>
			<g id="Bubble_Brown"><Bubble_Brown /></g>
			<g id="Rect_Brown" opacity="0"><Rect xposition="585" yposition="330" />
				<text className="desc" x="605" y="350">
					<tspan x="605" dy="0.4em">Brown Meeting Room</tspan>
        			<tspan x="605" dy="1.8em">Now: </tspan>
        			<tspan x="605" dy="1.4em">Next: </tspan>
				</text>
			</g>
		</g>
	);
}
}

class Hall extends React.Component {
	render() {
	return (
		<g fill="#999999">
			<g className="wall" transform="translate(720,200)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(688,216)scale(-1,1)"><DoubleWallH /></g>
		</g>
	);
}
}

class Kafe extends React.Component {
	render() {
	return (
		<g fill={this.props.color}>
			<g className="wall" transform="translate(736,32)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(704,48)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(672,64)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(608,80)"><DoubleWallV /></g>
			<g className="wall" transform="translate(640,96)"><DoubleWallV /></g>
			<g className="wall" transform="translate(672,112)"><DoubleWallV /></g>
			<g className="wall" transform="translate(736,128)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(720,40)"><DoubleWallV /></g>
			<g className="wall" transform="translate(752,56)"><DoubleWallV /></g>
			<g className="wall" transform="translate(784,72)"><DoubleWallV /></g>
			<g className="wall" transform="translate(816,88)"><DoubleWallV /></g>
			<g className="wall" transform="translate(848,104)"><DoubleWallV /></g>
			<g className="wall" transform="translate(880,120)"><DoubleWallV /></g>
			<g className="wall" transform="translate(912,136)"><DoubleWallV /></g>
			<g className="wall" transform="translate(944,152)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(912,168)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(880,184)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(848,200)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(816,216)scale(-1,1)"><DoubleWallH /></g>
			<g id="Bubble_Kafe" className="bubble"><Bubble_Kafe /></g>
			<g id="Rect_Kafe" opacity="0"><Rect xposition="850" yposition="110" />
				<text className="desc" x="870" y="130">
					<tspan x="870" dy="0.4em">Kafe</tspan>
        			<tspan x="870" dy="1.8em">Now: </tspan>
        			<tspan x="870" dy="1.4em">Next: </tspan>
				</text>
			</g>
		</g>
	);
}
}

class CommonSpace extends React.Component {
	render() {
	return (
		<g fill="#999999">
			<g className="wall" transform="translate(624,104)"><SingleWall /></g>
			<g className="wall" transform="translate(640,112)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(608,128)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(576,144)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(544,160)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(512,176)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(480,192)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(448,208)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(416,224)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(384,240)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(352,256)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(288,272)"><DoubleWallV /></g>
			<g className="wall" transform="translate(320,288)"><DoubleWallV /></g>
			<g className="wall" transform="translate(704,144)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(544,160)"><DoubleWallV /></g>
			<g className="wall" transform="translate(576,208)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(576,176)"><SingleWall /></g>
			<g className="wall" transform="translate(640,176)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(448,208)"><DoubleWallV /></g>
			<g className="wall" transform="translate(480,224)"><SingleWall /></g>
			<g className="wall" transform="translate(544,224)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(512,240)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(448,272)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(416,288)scale(-1,1)"><DoubleWallH /></g>
			<Stairs />
		</g>
	);
}
}

class Terrace extends React.Component {
	render() {
	return (
		<g fill={this.props.color}>
			<g className="wall" transform="translate(208,408)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(144,440)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(96,464)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(0,496)"><LowWallH /></g>
			<g className="wall" transform="translate(64,528)"><LowWallH /></g>
			<g className="wall" transform="translate(240,440)"><LowWallH /></g>
			<g className="wall" transform="translate(288,464)"><LowWallH /></g>
			<g className="wall" transform="translate(384,496)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(336,520)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(272,552)scale(-1,1)"><LowWall /></g>
			<g className="wall" transform="translate(128,560)"><LowWallH /></g>
			<g id="Bubble_Terrace" className="bubble" ><Bubble_Terrace /></g>
			<g id="Rect_Terrace" opacity="0"><Rect xposition="300" yposition="470" />
				<text className="desc" x="320" y="490">
					<tspan x="320" dy="0.4em">Terrace</tspan>
        			<tspan x="320" dy="1.8em">Now: </tspan>
        			<tspan x="320" dy="1.4em">Next: </tspan>
				</text>
			</g>
		</g>
	);
}
}

class OpenSpace extends React.Component {
	render() {
	return (
		<g fill="#999999">
			<g className="wall" transform="translate(384,304)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(352,320)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(320,336)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(288,352)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(256,368)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(192,384)"><DoubleWallV /></g>
			<g className="wall" transform="translate(416,336)"><SingleWall /></g>
			<g className="wall" transform="translate(432,344)"><DoubleWallV /></g>
			<g className="wall" transform="translate(464,360)"><DoubleWallV /></g>
			<g className="wall" transform="translate(496,376)"><DoubleWallV /></g>
			<g className="wall" transform="translate(560,392)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(528,408)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(496,424)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(464,440)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(432,456)scale(-1,1)"><DoubleWallH /></g>
			<g className="wall" transform="translate(256,416)"><DoubleWallV /></g>
			<g className="wall" transform="translate(288,432)"><DoubleWallV /></g>
			<g className="wall" transform="translate(320,448)"><DoubleWallV /></g>
			<g className="wall" transform="translate(352,464)"><DoubleWallV /></g>
		</g>
	);
}
}

class Stairs extends React.Component {
	render() {
	return (
		<g className="stairs" transform="translate(600,128)">
			<polygon fill="#999999" points="32,0 28,2 28,4 24,6 24,8 20,10 20,12 16,14 16,16 12,18 12,20 8,22 8,24 4,26 4,28 0,30 0,32    16,40 20,38 20,36 24,34 24,32 28,30 28,28 32,26 32,24 36,22 36,20 40,18 40,16 44,14 44,12 48,10 48,8  "/>
			<polygon fill="#000000" opacity="0.11" points="0,30 16,38 16,40 0,32  "/>
			<polygon fill="#000000" opacity="0.11" points="4,26 20,34 20,36 4,28  "/>
			<polygon fill="#000000" opacity="0.11" points="8,22 24,30 24,32 8,24  "/>
			<polygon fill="#000000" opacity="0.11" points="12,18 28,26 28,28 12,20  "/>
			<polygon fill="#000000" opacity="0.11" points="16,14 32,22 32,24 16,16  "/>
			<polygon fill="#000000" opacity="0.11" points="20,10 36,18 36,20 20,12  "/>
			<polygon fill="#000000" opacity="0.11" points="24,6 40,14 40,16 24,8  "/>
			<polygon fill="#000000" opacity="0.11" points="28,2 44,10 44,12 28,4  "/>
			<path fill="#000000" opacity="0.29" d="M16,40l4-2l0-2l-4,2V40z M24,32l4-2v-2l-4,2V32z M28,28l4-2v-2l-4,2V28z M20,36l4-2v-2l-4,2V36z M44,10v2   l4-2V8L44,10z M40,15v1l4-2v-2l-4,2V15z M32,24l4-2v-2l-4,2V24z M36,20l4-2v-2l-4,2V20z"/>
		</g>
	);
}
}

class People extends React.Component {
	render() {
	return (
		<g>
			<g transform="translate(168,436)scale(0.35000000000000003)">
				<path opacity="0.2" d="M42.8,237.8c5.5-0.2,6.9-2.6,8.2-7.3c1.4-4.7-0.4-5.7,2.9-8.1c3.3-2.4,5.9-4.8,5-8.4  c-1.7-6.9-9-15.1-15.9-15.1s-19.8,10.2-20.2,11.2c-0.4,1-3.4,2.3-0.4,6.4C27.2,223,30.8,238.1,42.8,237.8z"/>
				<path fill="#FFFFFF" d="M27.8,204.8c0,0-2.4,2.3-4.3,3.7s-2,4.1-1.9,5s2.1,3.3,5.5,2.7s6-4.3,8.3-6.4c2.3-2.2,2.3-2,4-2.3  c1.7-0.3,0-4.2-2.3-4.3c-2.3-0.1-6.8-2.3-6.8-2.3S28.8,203.7,27.8,204.8z"/>
				<path fill="#FFFFFF" d="M27.8,204.8c0,0-2.4,2.3-4.3,3.7s-2,4.1-1.9,5s2.1,3.3,5.5,2.7s6-4.3,8.3-6.4c2.3-2.2,2.3-2,4-2.3  c1.7-0.3,0-4.2-2.3-4.3c-2.3-0.1-6.8-2.3-6.8-2.3S28.8,203.7,27.8,204.8z"/>
				<path fill="#262626" d="M35.4,209.9c2.3-2.2,2.3-2,4-2.3c0.2,0,0.4-0.1,0.5-0.3l-6.6-1.3c0,0,0.3,2.6-1.8,4.9  c-2,2.3-3.2,3.6-5.7,3.6c-1.8,0-3.1-0.4-4.1-1.6c0,0.3,0,0.5,0,0.7c0.1,1,2.1,3.3,5.5,2.7S33.1,212.1,35.4,209.9z"/>
				<path fill="#CC291F" d="M25.4,119.9c0,0-3.4,9.4-3.1,20.4c0.3,11.5,1.6,18.7,2.4,21.7c1.1,4.5,3.4,5.9,3.9,15.7s0.6,19.8-0.2,22.7  s-2.7,4-2.4,4.7c0.3,0.7,3.8-0.4,5.5,1.2s4.5,2.7,5.9,2.7c1.4,0.1,2,0,2,0l-3.7-78.2L25.4,119.9z"/>
				<path opacity="0.2" d="M25.4,119.9c0,0-3.4,9.4-3.1,20.4c0.3,11.5,1.6,18.7,2.4,21.7c1.1,4.5,3.4,5.9,3.9,15.7s0.6,19.8-0.2,22.7  s-2.7,4-2.4,4.7c0.3,0.7,3.8-0.4,5.5,1.2s4.5,2.7,5.9,2.7c1.4,0.1,2,0,2,0l-3.7-78.2L25.4,119.9z"/>
				<path fill="#FFFFFF" d="M41.7,225.9c0,0-1.7,4.5-1.7,5.4c0,0.9-0.2,3.9,0.4,4.6c0.5,0.6,3.2,1.5,5.3,1.2c2.2-0.3,4.3-2.4,4.5-3.2  c0.2-0.9-0.1-6.3-0.2-7.1c-0.1-0.8-0.5-2.6-0.5-2.6L41.7,225.9z"/>
				<path fill="#262626" d="M49.6,224.1l-1.4,0.3c0.4,1.9,0.9,6.3,0.3,8.1c-0.8,2.1-3,2.7-4.9,2.7c-1.1,0-3-0.6-3.5-2  c0,1.1,0.1,2.3,0.4,2.7c0.5,0.6,3.2,1.5,5.3,1.2c2.2-0.3,4.3-2.4,4.5-3.2c0.2-0.9-0.1-6.3-0.2-7.1C50,226,49.6,224.1,49.6,224.1z"/>
				<path fill="#CC291F" d="M33.8,131.7c0,0-3,7.1-3.5,17.3c-0.5,10.2,0.7,17,0.9,19.3c0.1,2.3,0.5,9.4,1.8,12.1  c1.3,2.7,3.7,7.9,4.6,14.4s1.3,18.4,1.4,21.4c0.1,4-0.5,7.3,0.2,9.2c0.7,1.9,3-0.4,5.5,0.3c2.5,0.6,6.4,1.4,7.1,1  c0.7-0.4-0.5-7.5-0.4-11.6c0.1-4.1-0.2-19.8-1.1-26.4c-0.8-6.6-5.6-12.8-4.8-19.5c0.8-6.7,5.4-20.8,6.5-25  c1.1-4.1,1.4-10.2,0.8-15.7C52.3,122.9,33.8,131.7,33.8,131.7z"/>
				<path fill="#FBD7C7" d="M25.4,114.8c0,0-4.3,3.1-5.9,5.1c-1.6,2-2.4,2.9-2.4,4.7c0,1.8,0.8,2.9,1.6,2.7s0-2.7,0-2.7l0.8-1.6  c0,0-0.8,1.4-0.4,2c0.4,0.5,2.2,2.4,2.7,2c0.6-0.4,0.4-1.2,0.4-1.2s-1.5-1-1.2-1.6s0.8-0.8,0.8-0.8s-0.3,1.8,0,2.4  c0.3,0.5,1.6,0.4,1.6,0.4l2.4-5.5L25.4,114.8z"/>
				<path fill="#FFCC00" d="M44.8,71.7c-4.6-0.9-13.3-1.6-16.5,2.4s-2.4,5.1-2.4,7.1s-1.5,5.3-2.4,7.5c-0.9,2.2-2.3,5.9-0.8,8.2  c1.5,2.4,4.3,3.5,4.3,3.5s-0.8,9.3-1.7,12.9c-0.9,3.5-2,9.8-2.4,11.8s1.6,7.9,5.5,9.4c3.9,1.6,12.8,2.3,18.1-1.6s6.3-6.3,6.3-6.3  s-1.9-7.7-1.6-10.6c0.3-2.9,5.2-17.6,5.2-17.6l3.6-11.8l1.2-0.8c0,0,0.3-2.6-1.2-5.1c-1.5-2.6-4-5.2-7.5-6.3S48.8,72.5,44.8,71.7z"/>
				<path fill="#FBD7C7" d="M34.2,73.6c0,0-6.9,5.5-2.4,10.2s13.3-4.2,14.9-7.9C48.4,72.4,39.6,68.3,34.2,73.6z"/>
				<path opacity="0.2" fill="#262626" d="M22.3,93.3c0,0-0.1,4.3,11,6.5c16.5,3.3,19.8-2.9,19.8-2.9s-3.1,8.6-19.2,5.5  C19.9,99.7,22.3,93.3,22.3,93.3z"/>
				<path fill="#825012" d="M42.9,45.5c-8.1-0.5-12,3-13.5,8.6c-1.5,5.4,4,15.3-1.8,17.9c0.1,2.2,5.1,4.5,7.3,2.1  c2.2-2.3,2.9-2.4,2.9-2.4L42.9,45.5z"/>
				<path fill="#FBD7C7" d="M32.3,55.6c-1.5,3.1-1.9,15.6,0.6,17.6c2.5,2,7.6-1.3,12.5-3.5s5.5-19-1.9-19.2S33.9,52.3,32.3,55.6z"/>
				<path fill="#825012" d="M41.4,45.7c-3.3,0.8-7.1,5.2-6.4,10c1,6.2,13.2,18.3,4.6,22.2c1.4,4.6,9.5,4.3,14,2c4.3-2.3,4.7-4.5,4.6-5.3  s-3.8-4.9-3.8-10.9C54.3,57.6,54,42.6,41.4,45.7z"/>
				<path fill="#FBD7C7" d="M50.6,88.9c0,0,2.8,0,4.8-0.3c2-0.3,4.7-2,4.7-2s0.2,4.6,0.8,7.3s1.6,10.4,2,11.5s1.9,2,0,5.9  s-9.7,15.9-11.1,19.1c-1.4,3.2-1.3,6.2-2,7.1s-2.5,1.7-2.7,1.6c-0.3-0.1-0.7-0.1-0.7-0.1s-0.4,0.4-1.1,0.4c-0.7,0-0.9-0.4-0.9-0.4  s-0.5,0.8-1.6,0.7c-1.1-0.1-1-0.8-1-0.8s-1.6,0.8-2.4,0.6c-0.8-0.2-1.2-1-0.7-1.3c0.5-0.3,1.6-0.2,2.4-0.9c0.8-0.7,2.1-2.8,2.1-2.8  s-0.3-0.2-0.2-1.4c0-1.2-0.1-3.1,1-3.7c1.2-0.6,2.6-0.6,3.4-1.6c2.5-3,3.2-8.2,5.4-12.7c2.1-4.5,3.6-6.2,3.6-6.6s-2.8-6.7-3.8-10.2  C51.5,94.5,50.6,88.9,50.6,88.9z"/>
			</g>
			<g transform="translate(136,444)scale(0.35000000000000003)">
				<path fill="#FBD7C7" d="M7,71.8c0,0-1.8,8.3-2.4,12.2c-0.6,3.8-2.2,7.5-1.8,10.4s2.9,8,5.2,12c2.4,4.3,4.8,5.9,4.9,11.6   c0.1,2.1-1.3,4.8,0.6,5.6s4.5,0.6,5.9,0.1s1.6-7.9,1.6-8.9c0-1.1-2.8-1.2-3.4-3.4c-0.6-2.3-4.8-13.6-4.5-15.8   c0.3-2.2,3.8-12.9,3.8-12.9L7,71.8z"/>
				<path opacity="0.2" d="M65.9,229.5c20.1-7.7,8.6-18.7-10.6-22.1c-8.4-1.5-17.1-18.6-38.1-5.2c-16.9,10.8-1.6,17.2,7.1,21.2   C36.2,229,47.2,236.7,65.9,229.5z"/>
				<path fill="#FBD7C7" d="M17.1,61.7c1.3,0.1,6.4-6.1,5.9-8.8c-0.5-2.8-10.6-20,7-23.6c5.8-1.2,13.3,3,14.1,10.2   c0.7,6,0.4,14.9-1.9,16c-2.3,1.1-3.8,0.4-5.4,2.3c-1.6,1.9-1.7,4.4-0.7,7.1c1,2.7,3.7,3.4,3.7,3.4l-22.2,0L17.1,61.7z"/>
				<path fill="#825012" d="M29.8,28.7c-17.7,3-6.9,24.9-7,25.3c1.8,0.9,5.3,0.9,6.9-0.3c1.8-1.3,2.8-5.9,4.8-7.6   c2-1.7,3.1-0.1,3.2,0.5s0.1,1.3,0.1,1.3l1.4-0.5c0,0,0.8-2.5,0.9-5.8c0.1-3.4-0.7-6.8-0.4-7.5c0.2-0.6,1.4-0.1,2.1-0.3   C39.3,29.6,33.9,28,29.8,28.7z"/>
				<path fill="#262626" d="M15.6,213.5c-0.2,2.6,2.6,5.1,6,4.2s7-3.8,10.9-5.4c4.5-1.9,8.3-3.1,9.3-6s-0.5-6.4-7.3-6.1   c-6.8,0.3-11.5,5.7-11.5,5.7L15.6,213.5z"/>
				<path fill="#FFFFFF" d="M17,215.4c4.1-0.7,9.7-3.6,11.8-4.8c2.2-1.2,10.5-3.6,11.7-6.3s-4.8-5.2-9.1-3.7c-4.3,1.6-8.6,2.7-8.6,2.7   L17,215.4z"/>
				<path fill="#262626" d="M39.9,225.1c0.3,1.9-0.5,4.5,3.3,4.3c3.7-0.2,10.9-1.6,13.7-1.8c2.7-0.3,13.1-1.5,15.2-5.2   c2-3.7,0.1-7.4-3-7.7c-3.1-0.3-7,2.2-10.4,1.4c-3.4-0.7-8.3-2.7-8.3-2.7L39.9,225.1z"/>
				<path fill="#FFFFFF" d="M42.2,225.3c2.6,0.3,8.1,0,12.8-0.7c4.8-0.7,14.3-1.8,16.3-5.6c1.5-2.9-0.6-5-4.6-4.5   c-4.1,0.6-3.3,1.4-6.9,1.4c-3.6,0.1-8.6-1.7-8.6-1.7l-9.2,11L42.2,225.3z"/>
				<path fill="#06547A" d="M15.9,112.5c-2,3.1-6.6,9.7-3.6,24.1c2.9,14.3,5.8,25.2,3.9,30.4c-1.9,5.2-3.7,13-3.4,17.4   c0.3,4.4,0,8.1-0.3,10.8c-0.3,2.7-1.4,14.6,0,17.8c1.4,3.1,3.8,4.7,7.8,3.7s9.1-4.8,9.7-6.9c1.5-4.8-1-14.7,0.3-19.9   c1-3.8,2.1-8,2.3-11.5c0.2-3.5,1.6-12,3.8-22.4c2.3-10.4,6.8-22.3,6.1-30.2C41.7,117.8,15.9,112.5,15.9,112.5z"/>
				<path opacity="0.2" d="M15.9,112.5c-2,3.1-6.6,9.7-3.6,24.1c2.9,14.3,5.8,25.2,3.9,30.4c-1.9,5.2-3.7,13-3.4,17.4   c0.3,4.4,0,8.1-0.3,10.8c-0.3,2.7-1.4,14.6,0,17.8c1.4,3.1,3.8,4.7,7.8,3.7s9.1-4.8,9.7-6.9c1.5-4.8-1-14.7,0.3-19.9   c1-3.8,2.1-8,2.3-11.5c0.2-3.5,1.6-12,3.8-22.4c2.3-10.4,6.8-22.3,6.1-30.2C41.7,117.8,15.9,112.5,15.9,112.5z"/>
				<path fill="#06547A" d="M23.3,117.8c-2.2,5.7-3.4,14.6-0.7,19.1s7.2,10.3,8.5,14.3c1.4,4,5.9,12.4,5.8,15.7s-2.2,18.1-1.3,28.5   c0.9,10.4,2.1,21.6,1.8,24.3c-0.3,2.7,0.7,9.4,4.3,9.5c3.6,0.1,13.1-3.6,15.8-8.1c2.1-3.4,1.1-4.9,0-5.7c-1.1-0.8-2.8-3.6-3.4-7.5   c-0.6-3.8-0.1-23.6,1.2-29.1c1.3-5.5,2-7.9,1-13.1s-4.4-26.3-5.3-32.8c-0.9-6.5-1.6-12-1.6-12L23.3,117.8z"/>
				<path fill="#E5E5E5" d="M18.3,61c0,0-6.6-1.9-10.4,1.9s-2.4,7.9-0.8,13s9.9,25.1,9.4,29.5c-0.5,4.3-3.7,11.1-3.5,12.8   c0.2,1.6,8,8.4,18.6,9.9s17.2-0.3,17.3-1.4c0.1-1.2,0.3-14.8-0.9-20.9s-1.4-11.9,0.4-17.2s3-10.7,1.7-13.9   c-1.3-3.1-3.3-4.7-6.4-6.2c-3.1-1.4-6.7-2-6.7-2s-7.9,2.1-14.3,0C14.7,63.8,18.3,61,18.3,61z"/>
				<path fill="#FBD7C7" d="M35.1,84.5c0,0,5,1.3,8.6,0.7c3.6-0.6,5-1.4,5-1.4s-1.2,4-1.7,5.4c-0.9,3-1.8,8.5-1.9,10.9   c-0.1,2.4-0.3,5.1-0.3,5.1s2.2,2.5,3.3,6.5c1.2,4,1.8,7.4,2.9,9.1c1.2,1.8,2.3,3.7,2.5,6.7c0.2,2.9,0.8,8.5-1.2,10s-5.9,3-7.5,2.3   c-1.6-0.8-2.3-2.1-2-2.6c0.3-0.5,1.5,1.3,2.8-0.2c1.4-1.5,1.2-2.8,0.6-5.4c-0.6-2.6,0.7-4.5,0.3-5.4c-0.4-0.9-9.5-12.5-10.5-17.9   S35.1,84.5,35.1,84.5z"/>
			</g>
		</g>
	);
}
}

class Bubble extends React.Component {
	render() {
		return (
			<g>
				<path d="M0,43.8c0-13.3,10.7-29.4,24-36c4-2,7.7-2.9,11-2.8c7.7,0.1,20,6.7,20,16c0,5.7-7,11.9-10.3,17.6L32,76   l-8-4.2L5.3,56.2C2,53.7,0,49.5,0,43.8z"/>
				<path fill="#000000" opacity="9.000000e-002" d="M32,76l-8-4.2L5.3,56.2C2,53.7,0,49.5,0,43.8c0-1.7,0.2-3.5,0.5-5.2l37.7,19L32,76z"/>
				<path d="M8,48c0-13.3,10.7-29.4,24-36s24-1.3,24,12c0,5.7-2,11.9-5.3,17.6L32,76L13.3,60.4C10,57.9,8,53.7,8,48z"/>
				<path fill="#000000" opacity="0.19" d="M8,48c0-13.3,10.7-29.4,24-36s24-1.3,24,12c0,5.7-2,11.9-5.3,17.6L32,76L13.3,60.4C10,57.9,8,53.7,8,48z"/>
			</g>
		);
	}
}

class Bubble_Brown extends React.Component {
	render() {
		return (
			<g>
				<g className="bubble" transform="translate(472,288)"><Bubble /></g>
				<g transform="translate(520,296)scale(-1,1)">
					<path fill-rule="evenodd" clip-rule="evenodd" fill="#2D3134" d="M25,18.5l-18-9c-3.3-1.7-6-0.3-6,3v9c0,3.3,2.7,7.3,6,9l10,5v8l8-4  l0,0c3.3,1.7,6,0.3,6-3v-9C31,24.2,28.3,20.2,25,18.5z"/>
				</g>
			</g>
		);
	}
}

class Bubble_Green extends React.Component {
	render() {
		return (
			<g>
				<g className="bubble" transform="translate(560,184)"><Bubble /></g>
				<g transform="translate(608,192)scale(-1,1)">
					<path fill="#2D3134" d="M27.8,28.4c-2.1,2.4-4.5,1.7-8.9,1.9c-5.6,0.2-4.6,5.5-3.6,8.6c-1.2-1.8-2.4-3.7-3-5.5  c-0.9-3.2,1.1-4.3,2.5-5.6c1.1-1.1,2-2.2,2.3-4c0.4,0,2.8,0,2.7-2.5c-0.1-2.9-2.7-7.4-5.3-9.9c0.4,2.2-0.4,2.9-1.3,4.8  c-1.2,2.7,1.2,5.5,2.5,6.6c0,0,0,0,0,0c-0.5,2.3-2.1,3.5-3.6,4.8c0.7-1.7,1.2-5.1-3.1-9.4C5.6,14.6,3.7,13.3,2,9.8  c-1.5,3.3-1.2,9.7,1.8,14.4c2.3,3.7,5.8,4.7,6.8,4.9c-0.6,0.7-1,1.6-0.8,3c0.6,3.7,4.4,7.1,5.5,10.8c0.2,0.6,0.6,1.1,1.1,1.4h0  c0.9,0.4,1.4-0.2,1.1-1.1c0-0.1-0.1-0.2-0.1-0.4c1.3,1,5.8,4.1,8.6,2.2C29.6,42.5,29.9,34.6,27.8,28.4z M15.8,14.3  c0,0,1.2,2.4,1.3,5.9c0.1,2.2,0,3.1-0.1,3.3c-0.4-0.2-0.9-0.5-1.2-0.8c0-0.1,0-0.1,0.1-0.2C17,18.7,15.8,14.3,15.8,14.3z M10.7,28.9  c-0.5-0.6-2.2-2.6-4.4-6.8c-3-5.8-3.2-7.8-3.2-7.8s2.5,6.7,8.4,13.5c0,0,0.1,0.1,0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3  C11.1,28.5,10.9,28.7,10.7,28.9z M21.5,40.4c-1.3,1-3.6,1.7-4.3,2c-0.4-0.9-0.8-1.7-1.4-2.6c0,0,0.1,0,0.1,0  c7.4-1.4,10.5-6.9,10.5-6.9S25.6,37.2,21.5,40.4z"/>
				</g>
			</g>
		);
	}
}

class Bubble_Terrace extends React.Component {
	render() {
		return (
			<g>
				<g className="bubble" transform="translate(184,440)"><Bubble /></g>
				<g transform="translate(232,448)scale(-1,1)">
					<path fill="#2D3134" d="M17.9,30.4l10.8-5.4c0.3-0.1,0.4-0.5,0.2-1S28.4,23.2,28,23l-4.6-2.3l3.3-1.6c0.4-0.2,0.4-0.8,0-1.4  c-0.4-0.6-1-0.9-1.4-0.7l-4.7,2.4L4,11c-0.4-0.2-0.8-0.1-0.9,0.2S3,11.9,3.3,12.4l10.8,16.1c0.6,0.9,0.9,1.9,0.9,2.7v8.4  c0,1-0.8,1.4-1.8,0.9L11,39.5c0,0,0,0,0,0c-1.3-0.6-1.2,1.4,0.1,2l10,5c1.2,0.6,1.4-1.1,0.2-1.9c-0.1-0.1-0.2-0.1-0.3-0.2l-1.2-0.6  c-1-0.5-2.7-2.2-2.7-3.2v-8.4C17,31.4,17.3,30.7,17.9,30.4z M25.6,23.8l-4,2l-4.2-2.1l4-2L25.6,23.8z M18.6,20.3l-4,2l-4.2-2.1l-4-6  L18.6,20.3z"/>
				</g>
			</g>
		);
	}
}

class Bubble_Kafe extends React.Component {
	render() {
		return (
			<g>
				<g className="bubble" transform="translate(768,112)"><Bubble /></g>
				<g transform="translate(816,120)scale(-1,1)">
					<path fill-rule="evenodd" clip-rule="evenodd" fill="#2D3134" d="M24.9,39.5c0.6,0.7,1.3,1.2,2.1,1.6c2.3,1.2,4.2,0.2,4.2-2.1   c0-2.3-1.9-5.1-4.2-6.3c-0.1-0.1-0.3-0.1-0.4-0.2v-1L3.8,20.1v2.3c0,4.7,2.9,11.5,6.9,15.4l-8.2-4.1c0.6,1.7,2.7,3.9,5.4,5.2   l14.5,7.2c2.6,1.3,4.8,1.3,5.4,0.1l-8.2-4.1C21.8,42.3,23.6,41.3,24.9,39.5z M26.5,34.1c0.1,0,0.3,0.1,0.4,0.2   c1.4,0.7,2.6,2.5,2.6,3.9c0,1.4-1.2,2-2.6,1.3c-0.5-0.3-1-0.7-1.4-1.1C26.1,37.1,26.5,35.7,26.5,34.1z"/>
					<path fill-rule="evenodd" clip-rule="evenodd" fill="#2D3134" d="M14.6,24.3c0,0,4.1,0.4,3.7-2.5c-0.4-2.9-2.5-3.9-2.9-6.1   c-0.6-2.7,1.2-3.1,1.2-3.1s-3-0.6-3.5,1.9c-0.4,2.1,1.3,3.7,1.8,5.6C15.5,22,14.6,24.3,14.6,24.3z"/>
				</g>
			</g>
		);

	}
}

class LowWallH extends React.Component {
	render() {
	return (
		<g>
			<polygon points="16,0.4 0.4,8.2 0.4,15.8 64,47.6 79.6,39.8 79.6,32.2  "/>
			<path fill="#000000" opacity="0.25" d="M8,5v3c0,2.2,3.6,4,8,4s8-1.8,8-4V5H8z"/>
			<ellipse cx="16" cy="5" rx="8" ry="4"/>
			<polygon fill="#000000" opacity="0.11" points="0.4,8.2 0.4,15.8 64,47.6 64,40  "/>
			<polygon fill="#000000" opacity="0.29" points="64,40 64,47.6 79.6,39.8 79.6,32.2  "/>
			<path fill="#000000" opacity="0.25" d="M24,13v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H24z"/>
			<ellipse cx="32" cy="13" rx="8" ry="4"/>
			<path fill="#000000" opacity="0.25" d="M40,21v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H40z"/>
			<ellipse cx="48" cy="21" rx="8" ry="4"/>
			<path fill="#000000" opacity="0.25" d="M56,29v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H56z"/>
			<ellipse cx="64" cy="29" rx="8" ry="4"/>
		</g>
	);
}
}

class LowWall extends React.Component {
	render() {
	return (
		<g>
			<polygon points="16,0.4 0.4,8.2 0.4,15.8 64,47.6 79.6,39.8 79.6,32.2  "/>
			<path fill="#000000" opacity="0.25" d="M8,5v3c0,2.2,3.6,4,8,4s8-1.8,8-4V5H8z"/>
			<ellipse cx="16" cy="5" rx="8" ry="4"/>
			<polygon fill="#000000" opacity="0.29" points="0.4,8.2 0.4,15.8 64,47.6 64,40  "/>
			<polygon fill="#000000" opacity="0.11" points="64,40 64,47.6 79.6,39.8 79.6,32.2  "/>
			<path fill="#000000" opacity="0.25" d="M24,13v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H24z"/>
			<ellipse cx="32" cy="13" rx="8" ry="4"/>
			<path fill="#000000" opacity="0.25" d="M40,21v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H40z"/>
			<ellipse cx="48" cy="21" rx="8" ry="4"/>
			<path fill="#000000" opacity="0.25" d="M56,29v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H56z"/>
			<ellipse cx="64" cy="29" rx="8" ry="4"/>
		</g>
	);
}
}

class SingleWall extends React.Component {
	render() {
  return (
    <g>
    	<polygon points="16,0.4 0.4,8.2 0.4,31.8 16,39.6 31.6,31.8 31.6,8.2  "/>
    	<polygon fill="#000000" opacity="0.11" points="0.4,31.8 16,39.6 16,16 0.4,8.2  "/>
    	<polygon fill="#000000" opacity="0.29" points="31.6,31.8 16,39.6 16,16 31.6,8.2  "/>
    	<path fill="#000000" opacity="0.25" d="M8,5v3c0,2.2,3.6,4,8,4s8-1.8,8-4V5H8z"/>
    	<ellipse cx="16" cy="5" rx="8" ry="4"/>
    </g>
   );
}
}

class DoubleWallV extends React.Component {
	render() {
  return (
    <g>
    	<polygon points="16,0.4 0.4,8.2 0.4,31.8 32,47.6 47.6,39.8 47.6,16.2  "/>
    	<polygon fill="#000000" opacity="0.11" points="0.4,8.2 0.4,31.8 32,47.6 32,24  "/>
    	<polygon fill="#000000" opacity="0.29" points="32,24 32,47.6 47.6,39.8 47.6,16.2  "/>
    	<path fill="#000000" opacity="0.25" d="M8,5v3c0,2.2,3.6,4,8,4s8-1.8,8-4V5H8z"/>
    	<path fill="#000000" opacity="0.25" d="M24,13v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H24z"/>
    	<ellipse cx="16" cy="5" rx="8" ry="4"/>
    	<ellipse cx="32" cy="13" rx="8" ry="4"/>
    </g>
   );
}
}

class DoubleWallH extends React.Component {
	render() {
  return (
	<g>
		<polygon points="16,0.4 0.4,8.2 0.4,31.8 32,47.6 47.6,39.8 47.6,16.2  "/>
		<path fill="#000000" opacity="0.25" d="M8,5v3c0,2.2,3.6,4,8,4s8-1.8,8-4V5H8z"/>
		<ellipse cx="16" cy="5" rx="8" ry="4"/>
		<polygon fill="#000000" opacity="0.29" points="0.4,8.2 0.4,31.8 32,47.6 32,24  "/>
		<polygon fill="#000000" opacity="0.11" points="32,24 32,47.6 47.6,39.8 47.6,16.2  "/>
		<path fill="#000000" opacity="0.25" d="M24,13v3c0,2.2,3.6,4,8,4s8-1.8,8-4v-3H24z"/>
		<ellipse cx="32" cy="13" rx="8" ry="4"/>
	</g>
   );
}
}

class Floor extends React.Component {
	render() {
		return (
	  		<g fill={this.props.color}>
		  		<g id="i100_5_" transform="translate(430,200)scale(3)">
					<polygon className="floor_room" points="74.833,-23.667 98.6,-15.6 82,-2.8 94.5,4.333 -4.167,53.667 -41,34.667 						"/>
				</g>
				<g id="i100_4_" transform="translate(432,200)scale(3)">
					<polygon className="floor_room" points="87.102,11.5 119.236,27.167 61.902,58.167 29.831,41.183 						"/>
				</g>
				<g id="i100_2_" transform="translate(432,200)scale(3)">
					<polygon className="floor" points="96.74,-45.367 165.2,-10.5 114.667,15 80,-2.8 100.254,-14.797 72.12,-31.867 						"/>
				</g>
				<g id="i100_6_" transform="translate(427,200)scale(3)">
					<polygon className="floor" points="53.629,12.4 76.562,23.867 53.629,35.334 30.695,23.867 						"/>
				</g>
				<g id="i100_3_" transform="translate(432,200)scale(3)">
					<polygon className="floor" points="25.21,41.532 44.012,50.933 25.21,60.333 6.409,50.933 						"/>
				</g>
				<g id="i100_1_" transform="translate(425,200)scale(3)">
					<polygon className="floor_room" points="-21.119,43.967 35.734,71.9 -21.119,99.833 -77.972,71.9 						"/>
				</g>
				<g id="i100" transform="translate(430,200)scale(3)">
					<polygon className="floor" points="-79.867,71 -15.867,103 -79.867,135 -143.867,103 						"/>
				</g>
			</g>
		);
	}
}


export default class Map extends React.Component {
	render() {
    	return (
    		<div className="map">
				<MapAll {...window.__initial_props}/>
			</div>
    	);
	}
}

// <MapAll {...window.__initial_props}/>