import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsAuthenticatedGuard } from "./core/guard/is-authenticated.guard";
import { Role } from "./core/models/role";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      {
        path: "admin",
        data: {
          role: [Role.SUPERADMIN, Role.ADMIN],
        },
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
        canActivate: [IsAuthenticatedGuard]
      },
      {
        path: "doctor",
        data: {
          role: Role.MEDECIN,
        },
        loadChildren: () =>
          import("./doctor/doctor.module").then((m) => m.DoctorModule),
        canActivate: [IsAuthenticatedGuard]
      },
      {
        path: "patient",
        data: {
          role: Role.PATIENT,
        },
        loadChildren: () =>
          import("./patient/patient.module").then((m) => m.PatientModule),
        canActivate: [IsAuthenticatedGuard]
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("./contacts/contacts.module").then((m) => m.ContactsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./icons/icons.module").then((m) => m.IconsModule),
      }
    ],
  },
  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
