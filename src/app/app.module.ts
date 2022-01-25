import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/organisms/list/list.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ChipComponent } from './components/atoms/chip/chip.component';
import { ModalComponent } from './components/molecules/modal/modal.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    ChipComponent,
    ModalComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
