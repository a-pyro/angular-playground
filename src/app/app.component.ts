import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  a = 1;
  words: string[] = [];

  ngOnInit() {
    fetch(`${environment.API_URL}&wordLength=5`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': environment.X_RapidAPI_Key,
        'X-RapidAPI-Host': environment.X_RapidAPI_Host,
      },
    })
      .then((response) => response.json())
      .then((r) => (this.words = [...r]));
  }
}
