import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteersListComponent } from './components/volunteers-list/volunteers-list.component';
import { AddNewVolunteersComponent } from './components/add-new-volunteers/add-new-volunteers.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/volunteers-list', pathMatch: 'full' },
  { path: 'volunteers-list', component: VolunteersListComponent },
  { path: 'add-new-volunteers', component: AddNewVolunteersComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
