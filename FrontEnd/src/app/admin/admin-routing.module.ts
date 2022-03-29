import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "appointment",
    loadChildren: () =>
      import("./appointment/appointment.module").then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: "doctors",
    loadChildren: () =>
      import("./doctors/doctors.module").then((m) => m.DoctorsModule),
  },
  {
    path: "patients",
    loadChildren: () =>
      import("./patients/patients.module").then((m) => m.PatientsModule)
  },
  {
    path: "simple-admin",
    loadChildren: () => import("./simple-admin/simple-admin.module").then((m) => m.SimpleAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
