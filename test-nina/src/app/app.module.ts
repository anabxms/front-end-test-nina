import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComplaintListComponentComponent } from './complaint-list-component/complaint-list-component.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintListComponentComponent,
    ComplaintListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
