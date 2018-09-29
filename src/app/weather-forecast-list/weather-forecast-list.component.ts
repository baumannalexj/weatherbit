import { Component, OnInit } from '@angular/core';
import {weatherBit} from "../../environments/environment";
import {WeatherForecast} from "../models/WeatherForecast";
import {CityDetails} from "../models/CityDetails";
import {HttpClient} from '@angular/common/http';
import {Input} from '@angular/core';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: any;
  @Input() searchText: string;

  constructor(private http: HttpClient) {
    this.weatherBitUrl = `${weatherBit.config.baseUrl}?city=detroit&state=michigan&key=${weatherBit.config.apiKey}`;
    this.weatherForecasts = [];
    this.cityDetails ={};
  }


  getWeather(){
    this.weatherBitUrl = `${weatherBit.config.baseUrl}?city=${this.searchText}&key=${weatherBit.config.apiKey}`;

    this.http
      .get(this.weatherBitUrl)
      .subscribe( (results: any)=>{

        for (let data of results['data']) {
          let weatherForecast = new WeatherForecast(data);
          this.weatherForecasts.push(weatherForecast);
        }

        let cityName = results['city_name'];
        let stateCode= results['state_code'];
        this.cityDetails = new CityDetails(cityName, stateCode);

        console.log('results');
        console.log(results);
        console.log(this.weatherForecasts);
      });
    //
  }

  ngOnInit() {
  }

}
