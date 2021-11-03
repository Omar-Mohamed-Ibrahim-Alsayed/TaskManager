import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { searchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { TasksComponent } from './container/tasks/tasks.component';
import { RemindersComponent } from './container/reminders/reminders.component';
import { TaskComponent } from './container/tasks/task/task.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { PocketComponent } from './container/pocket/pocket.component';
import { CategoriesComponent } from './container/categories/categories.component';
import { ArchiveComponent } from './container/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    searchBarComponent,
    NavBarComponent,
    ContainerComponent,
    TasksComponent,
    RemindersComponent,
    TaskComponent,
    DashboardComponent,
    PocketComponent,
    CategoriesComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

