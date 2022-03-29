import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlldoctorsComponent } from "./alldoctors/alldoctors.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";
const routes: Routes = [
  {
    path: "allDoctors",
    component: AlldoctorsComponent,
  },
  {
    path: "add-doctor",
    component: AddDoctorComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
