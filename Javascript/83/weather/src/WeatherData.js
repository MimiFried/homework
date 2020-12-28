import React, { Component } from 'react';

export default class WeatherData extends Component {

    render() {
        return (
            <>
            <div>
                Todays weather in <span>{this.props.weather.name}</span>:
            </div>
            <div>
                <img src={this.props.weather.imgsrc} alt='weather img'></img>
            </div>
            <div>
                <h3>Details: </h3>
                <p>{this.props.weather.temp} degrees</p>
                <p> {this.props.weather.descr}</p>
            </div>
        </>
        );
    }
}