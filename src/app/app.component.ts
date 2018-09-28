import { Component } from '@angular/core';
import {weatherBit} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherbit';
  weatherBitUrl: string;
  weatherData: any[];
  cityDetails: any;
  searchText: string;

  constructor(private http: HttpClient) {
    this.weatherBitUrl = `${weatherBit.config.host}/v2.0/forecast/daily?city=detroit&state=michigan&key=${weatherBit.config.apiKey}`;
    this.weatherData = [];
    this.cityDetails = {
      cityName: "",
      stateCode: ""
    };


    console.log("api key: " + weatherBit.config.apiKey);
  }

  getWeather(){
    this.weatherBitUrl = `${weatherBit.config.host}/v2.0/forecast/daily?city=${this.searchText}&key=${weatherBit.config.apiKey}`;

    this.http
      .get(this.weatherBitUrl)
      .subscribe( (results: any)=>{

        this.weatherData = results['data'];
        this.cityDetails.cityName = results['city_name'];
        this.cityDetails.stateCode= results['state_code'];
        console.log('results');
        console.log(results);
      });
    //
  }
}
