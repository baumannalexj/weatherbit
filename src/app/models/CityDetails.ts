export class CityDetails {
  name: string;
  state: string;

  constructor(name, state) {
    this.name = name;
    this.state = state;

  }

  getCityState(){
    return name
      ? `${this.name}, ${this.state}`
      : "";
  }
}
