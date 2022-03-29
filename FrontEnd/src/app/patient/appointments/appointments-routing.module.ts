import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpcomingAppointmentComponent } from "./upcoming-appointment/upcoming-appointment.component";
import { PastAppointmentComponent } from "./past-appointment/past-appointment.component";
import { TodayAppointmentComponent } from "./today-appointment/today-appointment.component";
import { CabinetComponent } from "../cabinet/cabinet.component";

const routes: Routes = [
  {
    path: "today",
    component: TodayAppointmentComponent,
  },
  {
    path: "upcoming",
    component: UpcomingAppointmentComponent,
  },
  {
    path: "past",
    component: PastAppointmentComponent,
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
