import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CabinetComponent } from "./cabinet/cabinet.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "appointments",
    loadChildren: () =>
      import("./appointments/appointments.module").then(
        (m) => m.AppointmentsModule
      ),
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "cabinet",
    component: CabinetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
