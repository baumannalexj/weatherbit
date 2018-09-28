import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
