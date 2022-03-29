import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { ToasServiceService } from 'src/app/core/service/toast-service/toas-service.service';

@Component({
  selector: 'app-next-signup',
  templateUrl: './next-signup.component.html',
  styleUrls: ['./next-signup.component.sass']
})
export class NextSignupComponent implements OnInit {
  hide = true;
  chide = true;
  error: any;
  public userDataSendByRoute: any;
  public userPostBody: any;
  public allSpecialities: any;
  public allCabinetMedicales: any;
  public allRive: any;
  public loading = false;

  constructor(private activedRoute: ActivatedRoute, private restApi: RestApiService, private router: Router, private toastr: ToasServiceService) {
    this.activedRoute.queryParams.subscribe(
      data => {
        this.userDataSendByRoute = data;
      }
    );

    this.restApi.getAllRive().subscribe(
      {
        next: result =>{
          this.allRive = result;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  onChangeRiveValue(idRive)
  {
    let postValue = {"idRive": idRive}
    this.restApi.getCabinetByRive(postValue).subscribe(
      {
        next: result =>{
          this.allCabinetMedicales = result;
        }
      }
    );
  }

  onChangeCabinetValue(idCabinet)
  {
    let postValue = {"idCabinet": idCabinet}
    this.restApi.getCabinetSpecialities(postValue).subscribe(
      {
        next: result =>{
          this.allSpecialities = result;
        }
      }
    );
  }

  onSubmit(authForm: NgForm)
  {
    this.loading = true;
    this.restApi.getPersonEmail(authForm.value.email).subscribe(
      {
        next: result =>{
          if(result)
          {
            this.loading = false;
            this.error = "Cet email existe déjà !";
            return;
          }

          if(authForm.value.password !== authForm.value.cpassword)
          {
            this.loading = false;
            this.error = "Votre mot de passe et le mot de passe confirmer doivent être identique !";
            return;
          }
          else
          {
            if(authForm.value.profile === "MEDECIN")
            { 
              this.userPostBody = {
                "person_type": "MEDECIN",
                "profile": authForm.value.profile,
                "nom": this.userDataSendByRoute.nom,
                "prenom": this.userDataSendByRoute.prenom,
                "adresse": this.userDataSendByRoute.adresse,
                "telephone": this.userDataSendByRoute.telephone,
                "email": authForm.value.email,
                "genre": this.userDataSendByRoute.genre,
                "username": this.userDataSendByRoute.username,
                "password": authForm.value.password,
                "specialite": {
                  "idSpecialite": authForm.value.specialite
                },
                "cabinetMedicale": {
                  "idCabinet": authForm.value.cabinetMedicale
                },
                "imageProfile": "imageLinnnkkk",
                "roles": [
                  {"idRole": 3}
                ]
              };
              
            }
            else if(authForm.value.profile === "PATIENT")
            {
              this.userPostBody = {
                "person_type": "PATIENT",
                "profile": authForm.value.profile,
                "profession": authForm.value.profession,
                "nom": this.userDataSendByRoute.nom,
                "prenom": this.userDataSendByRoute.prenom,
                "adresse": this.userDataSendByRoute.adresse,
                "telephone": this.userDataSendByRoute.telephone,
                "email": authForm.value.email,
                "genre": this.userDataSendByRoute.genre,
                "username": this.userDataSendByRoute.username,
                "password": authForm.value.password,
                "imageProfile": "imageLinnnkkk",
                "roles": [
                  {"idRole": 4}
                ]
              };
            }
            else
            {this.loading = false;
              this.error = "Profile inconnu !";
              return;
            }
            
            this.restApi.addNewUser(this.userPostBody).subscribe(
              {
                next: result => {
                  if(authForm.value.profile === "MEDECIN")
                  {
                    this.toastr.showSuccessMessage("Votre inscription a été prise en compte, veuillez attendre la confirmation par mail !");
                  }
                  else{
                    this.toastr.showSuccessMessage("Inscription éffectué avec succès !");
                  }
                  
                  this.loading = false;
                  this.router.navigate(['/authentication/signin']);
                },
                error: error =>{
                  this.loading = false;
                  this.toastr.showErrorMessage("Problème d'inscription, réessayer plus tard !");
                }
              }
            );
          }
        }
      }
    );
  }
}
