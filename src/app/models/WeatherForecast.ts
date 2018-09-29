export class WeatherForecast {
  dateTime: any;
  maxTemp: any;
  minTemp: any;

  constructor(data) {
    this.dateTime = data['datetime'];
    this.maxTemp = data['max_temp'];
    this.minTemp = data['min_temp'];
  }
}
