import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  authForm: FormGroup;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restApi: RestApiService,
    private toastr: ToasServiceService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: [
        "",
        [ Validators.required, Validators.minLength(3)],
      ],

      password: [
        "",
        [ Validators.required, Validators.minLength(6)],
      ]
     
    });
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.loading = true;
     this.restApi.changeUserPassword(this.authForm.controls.username.value, this.authForm.controls.password.value).subscribe(
       {
         next: result =>{
           this.toastr.showSuccessMessage(result);
            this.loading = false;
           this.router.navigate(["/authentication/signin"]);
         },
         error: error=>{
          this.loading = false;
           this.toastr.showErrorMessage("Ce nom d'utilisateur n'existe pas");
         }
       }
     );
    }
  }
}
