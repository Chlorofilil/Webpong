// Váš komponent AppComponenent

import { Component } from "@angular/core";

export interface Training {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpong';

  Trainings: Training[] = [
    { value: 'Nohy', viewValue: 'Trening_1' },
    { value: 'Ruky', viewValue: 'Trening_2' },
    { value: 'Kondicka', viewValue: 'Trening_3' },
  ];
}