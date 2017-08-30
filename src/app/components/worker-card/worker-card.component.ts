import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit, OnChanges, AfterViewInit {


  ngAfterViewInit(): void {/* ctrl i wygenerowalo to*/
    console.log(this.btnShowPhone);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() model;
  @Output() callEvent: EventEmitter<number> = new EventEmitter;
  @ViewChild('btn') btnShowPhone;

  callToPhone;
  constructor() {
    /*wykorzystujemy do wstrzykiwania zaleznosci*/

  }

  ngOnInit() {
  /*nie wszystkie dane sa wyswietlone czy zbindowane ale np. templatka juz jest(tak?)*/
  }

  showPhone(phone: number) {
    this.callToPhone = phone;
    this.callEvent.emit(phone); /*tylko jeden obiekt mozna przekazac lub nic*/
  }
}
