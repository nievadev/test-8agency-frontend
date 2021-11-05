import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesListComponent } from './components/attendees-list/attendees-list.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'signup', component: MainComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'attendees', component: AttendeesListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
