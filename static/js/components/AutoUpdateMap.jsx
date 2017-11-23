import React from "react";


import * as MapColorActions from '../actions/MapColorActions';



export default class AutoUpdateMap extends React.Component {


  reloadMapColor() {
		MapColorActions.reloadMapColor();
	}

  componentDidMount() {
    setInterval(this.reloadMapColor, 300000); //reload Map every 5 minutes(in milliseconds)
  }

    render() {
        return(
            <div className="loader" />
        );
    }
}