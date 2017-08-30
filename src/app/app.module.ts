import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SumPipe} from "./pipes/sum.pipe";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { WorkerCardComponent } from './components/worker-card/worker-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SumPipe,
    WorkerCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
