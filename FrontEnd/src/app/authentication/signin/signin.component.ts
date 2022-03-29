import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm: FormGroup;
  submitted = false;
  loading = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.authForm.controls;
  }

  onSubmit()
  {
    this.loading = true;
    if(this.authForm.invalid)
    {
      this.error = "Nom d'utilisateur ou mot de passe non valide !";
      return;
    }
    else
    {
      this.authService.login(this.f.username.value, this.f.password.value).subscribe(
        {
          next: (token) => {
            setTimeout(() => {
              let userRole = localStorage.getItem("userRole");
              if(userRole === Role.SUPERADMIN || userRole === Role.ADMIN)
              {
                this.router.navigate(["/admin/dashboard/main"]);
              }
              else if(userRole === Role.MEDECIN)
              {
                this.router.navigate(["/doctor/dashboard"]);
              }
              else if(userRole === Role.PATIENT)
              {
                this.router.navigate(["/patient/dashboard"]);
              }
              else
              {
                this.router.navigate(["/authentication/signin"]);
              }
              
              this.loading = false;
            }, 1000);
          },
          error: () => {
            this.error = "Nom d'utilisateur ou mot de passe non valide !";
            this.loading = false;
          }
        }
      );
    }
  }
}
