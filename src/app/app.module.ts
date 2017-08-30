import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SumPipe} from "./pipes/sum.pipe";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { SetColorDirective } from './directives/set-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SumPipe,
    WorkerCardComponent,
    SetColorDirective /* w sekcji umieszczamy to co w templatkach: componenty, pipy i dyrektywy */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule /*tu cale komponenty i z tym dyrektywy serwisy itd*/
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
