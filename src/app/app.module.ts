import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DivColorComponent } from './div-color/div-color.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ParentComponent } from './component interaction/parent/parent.component';
import { FilsComponent } from './component interaction/fils/fils.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { ClubPipe } from './pipe/club.pipe';
import { TodoComponent } from './servicesExemples/todo/todo.component';
import {TodoService} from './servicesExemples/todo.service';
import { EmbaucheComponent } from './embauche/embauche.component';
import {ROUTING} from './app.Routing';
import { HeaderComponent } from './header/header.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    DivColorComponent,
    CardComponent,
    LifeCycleComponent,
    ParentComponent,
    FilsComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    NgstyleComponent,
    NgClassComponent,
    RainbowDirective,
    ClubPipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailCvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
