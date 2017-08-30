

/*dekorator, bajery do klasy*/
import {Component} from "@angular/core";

@Component({ /*alt+enter zeby sie doimportowalo*/
  selector: 'app-root', /*instancje tworzymy w javie przez new, a w anuglarze poprzez znacznik. np app-root*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myName = 'Kasia';
  /*some changesfdd*/
  today: number = Date.now();
  sum: number[] = [1, 4, 7];
}
