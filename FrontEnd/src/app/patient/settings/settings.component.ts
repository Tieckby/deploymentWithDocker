import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent implements OnInit {
  public passwordloading = false;
  public loading = false;
  public myProfile: any ;
  public errorMsg1: any;
  public updatePostBody: any;
  public uploadImg: any;
  public userProfileImg: any = this.restApi.userLink+'/getProfileImg/'+localStorage.getItem("username");

  constructor(private restApi: RestApiService, private toastr: ToasServiceService, private router: Router) {}

  ngOnInit(): void {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next : result =>{
          this.myProfile = result;
        }
      }
    );
  }

  refreshPage() {
    window.location.reload();
   }

  getPhoto(event)
  {
    this.uploadImg = event.target.files[0];
    this.restApi.updateUserProfile(this.myProfile.username, this.uploadImg, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.toastr.showSuccessMessage("Profile image modifié avec succès !");
          this.refreshPage();
        },
        error: error =>{
          this.toastr.showWarningMessage("Veuillez ajouter un autre photo !");
        }
      }
    );
  }

  updatePassword(changePassword: NgForm)
  {
    this.passwordloading = true;
    this.restApi.changeUserPassword(changePassword.value.username, changePassword.value.newPassword).subscribe(
      {
        next: result =>{
          this.passwordloading = false;
          this.toastr.showSuccessMessage("Votre mot de passe a été modifié avec succès !");
          changePassword.resetForm();
        },
        error: error =>{
          this.passwordloading = false;
          this.errorMsg1 = "Nom d'utilisateur non trouvé !";
        }
      }
    )
  }

  userUpdate(changeUSer: NgForm){
    this.loading = true;
    this.updatePostBody = {
      "person_type": "PATIENT",
      "profile": "PATIENT",
      "profession": changeUSer.value.profession,
      "symptom": null,
      "nom": changeUSer.value.nom,
      "prenom": changeUSer.value.prenom,
      "adresse": changeUSer.value.adresse,
      "telephone": changeUSer.value.telephone,
      "email": changeUSer.value.email,
      "genre": this.myProfile.genre,
      "username": changeUSer.value.username,
      "password": null,
      "imageProfile": "imageLinnnkkk",
      "roles": [
        {"idRole": 4}
      ]
    };
    this.restApi.updateUser(this.myProfile.idPerson, this.updatePostBody, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.loading = false;
          localStorage.setItem("username", changeUSer.value.username);
          this.toastr.showSuccessMessage("Votre profile a été modifié avec succès !");
          this.router.navigate(['/patient/dashboard']);
        },
        error: error =>{
          this.loading = false;
          this.toastr.showErrorMessage("Modification non éffectuée !");
        }
      }
    );
  }
}
