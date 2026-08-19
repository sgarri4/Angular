import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //col·lecció de mòduls que permeten utilitzar el navegadorimport { FormsModule } from '@angular/forms'; //per utilitzar formularis

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewtaskComponent } from './tasks/newtask/newtask.component'; 
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent,HeaderComponent, UserComponent], //components que formen part del modulo
    bootstrap: [AppComponent], //indica que sera l'arrel del projecte
    imports: [BrowserModule,SharedModule, TasksModule] // els imports son components que no formen part del mòdul i que s'han d'importar per poder utilitzar-los (standalone: true)
})

export class AppModule {}