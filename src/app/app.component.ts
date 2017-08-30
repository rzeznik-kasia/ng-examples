import {Component} from "@angular/core";
import {WorkersService} from "./services/workers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    WorkersService
  ]
})

export class AppComponent {
  bgColor = "#ff0000";
  calling = '...';
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
  workers: any[];

  constructor(private workerService: WorkersService) {
    workerService
      .getWorkersFromServer()
      .subscribe((data) => {
        this.workers = data;
      });
  }

  showAlert() {
    alert('hi');
  };

  aaa($event) {
    this.calling = $event;
  }
}
