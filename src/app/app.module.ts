import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/organisms/list/list.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ChipComponent } from './components/atoms/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
