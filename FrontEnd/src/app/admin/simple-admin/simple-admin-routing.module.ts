import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add/add-admin/add-admin.component';
import { AllAdminsComponent } from './all/all-admins/all-admins.component';

const routes: Routes = [
  {
    path: 'allAdmins',
    component: AllAdminsComponent
  },
  {
    path: 'add-admin',
    component: AddAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleAdminRoutingModule { }
