import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './layout/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import {route} from './app.routes';
import {SummaryPipe} from './summary.pipe';
import { MyPipePipe } from './shared/pipe/my-pipe.pipe';
import {environment} from '../environments/environment';
import { FilterPipe } from './shared/pipe/filter.pipe';
import {PublicationService} from './services/publication.service';
import { PublicationComponent } from './publication/publication.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [

  HomeComponent,

  ProfileComponent,

  MainComponent,

  MenuComponent,

  SummaryPipe,

  FooterComponent,

  MyPipePipe,

  FilterPipe,

  PublicationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
  ],
  providers: [PublicationService, HttpClient],
  bootstrap: [MainComponent]
})
export class AppModule { }
