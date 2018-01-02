import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {PublicationComponent} from './publication/publication.component';

export const route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component : ProfileComponent},
  {path: 'publication/:id', component: PublicationComponent }
];
