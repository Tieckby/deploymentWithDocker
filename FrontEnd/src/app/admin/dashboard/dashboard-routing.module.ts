// import { DashboardComponent as patientDashboard } from "./../../patient/dashboard/dashboard.component";
// import { DashboardComponent as doctorDashboard } from "./../../doctor/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainComponent,
  },
  // {
  //   path: "doctor-dashboard",
  //   component: doctorDashboard,
  // },
  // {
  //   path: "patient-dashboard",
  //   component: patientDashboard,
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
