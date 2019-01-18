import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
