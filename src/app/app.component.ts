


import {Component} from "@angular/core";          /*dekorator, bajery do klasy*/

@Component({          /*alt+enter zeby sie doimportowalo*/
  selector: 'app-root',          /*instancje tworzymy w javie przez new, a w anuglarze poprzez znacznik. np app-root*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myName = 'Kasia';
  today: number = Date.now();
  sum: number[] = [1, 4, 7];
  access: boolean = true;
}
