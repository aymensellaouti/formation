import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TodoComponent} from './servicesExemples/todo/todo.component';
import {CardComponent} from './card/card.component';
import {CvComponent} from './cv/cv.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv', redirectTo: '/cv/all', pathMatch: 'full'},
  {
    path: 'cv',
    children: [
      {path: 'all', component: CvComponent},
      {path: 'detail/:id', component: DetailCvComponent},
    ]
  },
  {path: 'todo', component: TodoComponent},
  {path: 'card', component: CardComponent},
  {path: '**', component: CvComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
