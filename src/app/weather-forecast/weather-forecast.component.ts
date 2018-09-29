import { Component, OnInit, Input } from '@angular/core';
import {weatherBit} from "../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {CityDetails} from "../models/CityDetails";
import {WeatherForecast} from "../models/WeatherForecast";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: any;
  searchText: string;

  constructor(private http: HttpClient) {
    this.weatherBitUrl = `${weatherBit.config.baseUrl}?city=detroit&state=michigan&key=${weatherBit.config.apiKey}`;
    this.weatherForecasts = [];
    this.cityDetails ={};


    console.log("api key: " + weatherBit.config.apiKey);
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
