import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() name = "Kasia";/*interfejs wejscia dla komponentu, jesli nic nie przekaze bedzie kasia jak przekaze to bedzie przekazane*/

  constructor() { }

  ngOnInit() {
  }

}
