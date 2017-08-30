import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() model;

  callToPhone;
  constructor() { }

  ngOnInit() {
  }

  showPhone(phone: Number | String) {
    this.callToPhone = phone;
  }
}
