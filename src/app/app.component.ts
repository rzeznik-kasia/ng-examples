


import {Component} from "@angular/core";
import {Http} from "@angular/http";          /*dekorator, bajery do klasy*/

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
  items: any = [
    {name: "Joe", phone: 12454},
    {name: "Mike", phone: 15454},
    {name: "Bob", phone: 45},
    {name: "Joe", phone: 123554},
    {name: "Bożena", phone: 144234},
    {name: "Ola", phone: 123433},
    {name: "Kasia", phone: 122234},
  ];

  /*dependency injecion*/
  constructor(private http: Http) { /*var http = new Http -> daje nam mozliwosc zeby podmienic to w locie*/
    this.http.get('https://emitter.pl/api/workers')  /*endpoint definiujemy*/ /* to jest rodzaj promisa, musimy sie do tego zasubscybowac*/
      .subscribe((resp)=>{
        console.log(resp);
      }) /*lambda function*/
    /*ctrp p  [bedac w nawiasie]-> co metoda od nas chce, albo z ctrl geta wciskamy -> w deklaracji klasy*/
  }

  showAlert() {
    alert('hi');
  }
}
