import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'the-navigation',
  templateUrl: './the-navigation.component.html',
  styleUrls: ['./the-navigation.component.scss']
})
export class TheNavigationComponent {
  faCoffee = faCoffee;
}
; 