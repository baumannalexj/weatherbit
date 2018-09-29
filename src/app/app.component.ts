import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app';

  @Input('searchText') searchText: string;

  constructor(){}

}
