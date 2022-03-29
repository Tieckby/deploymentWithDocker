import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  public error: any;
  public authForm: FormGroup;
  public returnUrl: string;
  public hide = true;
  public chide = true;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private restApi: RestApiService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["", Validators.required],
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      adresse: ["", Validators.required],
      genre: ["", Validators.required],
      telephone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]]
    });
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    }
    else
    {
      this.loading = true;
      this.restApi.getPersonUsername(this.f.username.value).subscribe(
        {
          next: result =>{
            if(result)
            {
              this.loading = false;
              this.error = "Ce nom d'utilisateur existe déjà !";
              return;
            }

            this.restApi.getPersonTelephone(this.f.telephone.value).subscribe(
              {
                next: result =>{
                  if(result)
                  {
                    this.loading = false;
                    this.error = "Ce numéro de téléphone existe déjà !";
                    return;
                  }
                  const navigationValue: NavigationExtras = {queryParams: {
                    username: this.f.username.value,
                    nom: this.f.nom.value,
                    prenom: this.f.prenom.value,
                    adresse: this.f.adresse.value,
                    genre: this.f.genre.value,
                    telephone: this.f.telephone.value,
                  }}
                  this.router.navigate(['/authentication/next-signup'], navigationValue);
                  this.loading = false;
                }
              }
            );
          }
        }
      );
    }
  }
}
