import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  public action: string;
  public dialogTitle: string;
  public medecinForm: FormGroup;
  public userBody: any;
  public userId: number;
  public allRive: any;
  public allSpecialities: any;
  public allCabinetMedicales: any;
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private restApi: RestApiService,
    private toastr: ToasServiceService)
  {
    //Get all rive
    this.restApi.getAllRive().subscribe(
      {
        next: result =>{
          this.allRive = result;
        }
      }
    );

    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      let idRive = data.medecin.cabinetMedicale.rive.idRive;
      let idCabinet = data.medecin.cabinetMedicale.idCabinet;

      this.getCabinetByRive(idRive);
      this.getCabinetSpecialities(idCabinet);

      this.userId = data.medecin.idPerson;
      this.dialogTitle = "Modification de "+data.medecin.prenom+" "+data.medecin.nom;
      this.medecinForm = this.fb.group({
        nom: [data.medecin.nom],
        prenom: [data.medecin.prenom],
        rive: [idRive],
        cabinetMedicale: [idCabinet],
        specialite: [data.medecin.specialite.idSpecialite],
        adresse: [data.medecin.adresse],
        telephone: [data.medecin.telephone, [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        email: [data.medecin.email],
        genre: [data.medecin.genre],
        username: [data.medecin.username]
      });
    } else {
      this.dialogTitle = "Ajouter un nouveau médecin";
      this.medecinForm = this.fb.group({
        nom: ["", Validators.required],
        prenom: ["", Validators.required],
        rive: ["", Validators.required],
        cabinetMedicale: ["", Validators.required],
        specialite: ["", Validators.required],
        adresse: ["", Validators.required],
        telephone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        email: ["", [Validators.required, Validators.email]],
        genre: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", Validators.required]
      });
    }
  }

  getCabinetByRive(idRive)
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

  getCabinetSpecialities(idCabinet)
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

  onChangeRiveValue(idRive: number)
  {
    this.getCabinetByRive(idRive);
  }

  onChangeCabinetValue(idCabinet)
  {
    this.getCabinetSpecialities(idCabinet);
  }

  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.loading = true;
    if(this.action === "edit" && this.medecinForm.value.password === undefined)
    {
      this.userBody = {
        "person_type": "MEDECIN",
        "profile": "MEDECIN",
        "nom": this.medecinForm.value.nom,
        "prenom": this.medecinForm.value.prenom,
        "adresse": this.medecinForm.value.adresse,
        "telephone": this.medecinForm.value.telephone,
        "email": this.medecinForm.value.email,
        "genre": this.medecinForm.value.genre,
        "username": this.medecinForm.value.username,
        "password": null,
        "specialite": {
          "idSpecialite": this.medecinForm.value.specialite
        },
        "cabinetMedicale": {
          "idCabinet": this.medecinForm.value.cabinetMedicale
        },
        "imageProfile": "imageLinnnkkk",
        "roles": [
          {"idRole": 3}
        ]
      };

      //Updated user
      this.restApi.updateUser(this.userId, this.userBody, localStorage.getItem("token")).subscribe(
        {
          next: result =>{
            this.loading = false;
            this.toastr.showSuccessMessage("Modification éffectuée avec succès");
            this.dialogRef.close();
          },
          error: error =>{
            this.loading = false;
            this.toastr.showErrorMessage("Modification non éffectuée !");
          }
        }
      );
    }
    else
    {
      this.userBody = {
          "person_type": "MEDECIN",
          "profile": "MEDECIN",
          "nom": this.medecinForm.value.nom,
          "prenom": this.medecinForm.value.prenom,
          "adresse": this.medecinForm.value.adresse,
          "telephone": this.medecinForm.value.telephone,
          "email": this.medecinForm.value.email,
          "genre": this.medecinForm.value.genre,
          "username": this.medecinForm.value.username,
          "password": this.medecinForm.value.password,
          "specialite": {
            "idSpecialite": this.medecinForm.value.specialite
          },
          "cabinetMedicale": {
            "idCabinet": this.medecinForm.value.cabinetMedicale
          },
          "imageProfile": "imageLinnnkkk",
          "roles": [
          {"idRole": 3}
        ]
      };
      

      //Add new user
      this.restApi.addNewUser(this.userBody).subscribe(
        {
          next: result =>{
            this.loading = false;
            this.toastr.showSuccessMessage("Nouveau médecin ajouté avec succès !");
            this.dialogRef.close();
          },
          error: error =>{
            this.loading = false;
            this.toastr.showErrorMessage("Ajout non éffectué !")
          }
        }
      );
    }
  }
}
