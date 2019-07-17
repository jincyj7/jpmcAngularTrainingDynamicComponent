import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { EmailComponent } from './email.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MessageComponent,EmailComponent]
})
export class AppModule { }
