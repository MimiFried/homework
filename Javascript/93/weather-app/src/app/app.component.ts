import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather} from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather!: Weather;
  title = 'weather-app';
  constructor(private httpClient : HttpClient ){}
  getWeather(zip: string) {
    const key = 'cb7c71219cf09eb0bb414b932669be97';
    this.httpClient.get<any>(`http://api.openweathermap.org/data/2.5/weather?appid=${key}&zip=${zip}&units=imperial`)
    .subscribe(weatherData => {
      console.log(weatherData);

      this.weather = {
        place: weatherData.name,
        temp: weatherData.main.temp,
        description: weatherData.weather[0].description,
        imgsrc:`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
      }
      console.log(this.weather);
    }
    )
  }
}
