


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
  workers: any[]; /* mozna {}[], mozna {name, phone}, mozna tez tak: Object[], albo jakis interfejs uzyc albo klasy*/
  /*zmienne w templatkach musza byc publiczne, samo workers jest teraz publiczne, */

  /*dependency injecion*/
  constructor(private http: Http) { /*var http = new Http -> daje nam mozliwosc zeby podmienic to w locie*/ /*wstrzyknelismy serwis do pobierania danych*/
    this.http.get('https://emitter.pl/api/workers')  /*endpoint definiujemy*/ /* to jest rodzaj promisa, musimy sie do tego zasubscybowac*/
      .subscribe((resp)=>{ /*tu jest callback*/
        this.workers = resp.json().data; /* w lambdzie this oznacza klasa w ktorej jestes, a w funkcji (patrz ponizej), this oznacza np. window i trzeba bylo bindowac albo jakie selfy robic*/
      }) /*lambda function*/

    /*ctrp p  [bedac w nawiasie]-> co metoda od nas chce, albo z ctrl geta wciskamy -> w deklaracji klasy*/
    /*uwaga alternatywa!
    .subscribe(function() {
          this.workers = resp.json().data;  <- tu nie mozna uzyc this tak prosto
        }
      })*/

    setTimeout(() => {
      console.log(0);
    }, 0) /*wrzucanie do event loopa dlatego 0 pozniej sie wydrukuje niz 1*/
    console.log(1); /*najpierw to wszytko sie musi wykonac i wszystko do konca co po console.logu a potem event loop sie opdapa.*/



  }

  showAlert() {
    alert('hi');
  };  /*dobra praktyka jest dodawnaie srednikow, ctrl+shift+enter automatycznie konczy cos tam*/
}
