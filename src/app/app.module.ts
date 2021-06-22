import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ColorPickerModule } from 'ngx-color-picker';
import { SocketService } from './socket.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    MatButtonToggleModule

  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
