import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() model;
  @Output() callEvent: EventEmitter<any> = new EventEmitter;

  callToPhone;
  constructor() { }

  ngOnInit() {
  }

  showPhone(phone: Number | String) {
    this.callToPhone = phone;
    this.callEvent.emit(phone);
  }
}
