import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewappointmentComponent } from "./viewappointment/viewappointment.component";
const routes: Routes = [
  {
    path: "viewAppointment",
    component: ViewappointmentComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
