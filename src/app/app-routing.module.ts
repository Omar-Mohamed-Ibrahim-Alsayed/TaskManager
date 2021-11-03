import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './container/tasks/tasks.component';
import { RemindersComponent } from './container/reminders/reminders.component';
import {DashboardComponent} from './container/dashboard/dashboard.component';
import { ArchiveComponent } from './container/archive/archive.component';
import { PocketComponent } from './container/pocket/pocket.component';
import { CategoriesComponent } from './container/categories/categories.component';

const routes: Routes = [
  { path: 'Tasks', component: TasksComponent },
  { path: 'Reminders', component: RemindersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'pocket', component: PocketComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
