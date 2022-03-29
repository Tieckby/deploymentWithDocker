import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { ToasServiceService } from 'src/app/core/service/toast-service/toas-service.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent implements OnInit {
  public dialogTitle: any;
  public action: string;
  public adminForm: FormGroup;
  public userBody: any;
  public userId: any;
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private restApi: RestApiService,
    private toastr: ToasServiceService
  )
  {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit")
    {
      this.userId = data.admin.idPerson;
      this.dialogTitle = "Modification de "+data.admin.nom+" "+data.admin.prenom;
      this.adminForm = this.fb.group({
        nom: [data.admin.nom],
        prenom: [data.admin.prenom],
        specialite: [data.admin.specialite],
        adresse: [data.admin.adresse],
        telephone: [data.admin.telephone, [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        email: [data.admin.email],
        genre: [data.admin.genre],
        username: [data.admin.username]
      });
    }
    else
    {
      this.dialogTitle = "Ajouter un nouveau administrateur";
      this.adminForm = this.fb.group({
        nom: ["", Validators.required],
        prenom: ["", Validators.required],
        adresse: ["", Validators.required],
        telephone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        email: ["", [Validators.required, Validators.email]],
        genre: ["", Validators.required],
        username: ["", Validators.required],
        password: ["", Validators.required]
      });
    }
  }

  ngOnInit(): void {
  }

  submit() {
    // emppty stuff
  }

  onNoClick()
  {
    this.dialogRef.close();
  }

  confirmAdd()
  {
    this.loading = true;
    if(this.action === "edit" && this.adminForm.value.password === undefined)
    { 
      this.userBody = {
        "person_type": "ADMIN",
        "profile": "ADMIN",
        "nom": this.adminForm.value.nom,
        "prenom": this.adminForm.value.prenom,
        "adresse": this.adminForm.value.adresse,
        "telephone": this.adminForm.value.telephone,
        "email": this.adminForm.value.email,
        "genre": this.adminForm.value.genre,
        "username": this.adminForm.value.username,
        "password": null,
        "imageProfile": "imageLinnnkkk",
        "roles": [
          {"idRole": 2}
        ]
      };
      
      this.restApi.updateUser(this.userId, this.userBody, localStorage.getItem("token")).subscribe(
        {
          next: result =>{
            this.loading = false;
            this.toastr.showSuccessMessage("Modification éffectuée avec succès !");
            this.dialogRef.close();
          },
          error: error =>{
            this.loading = false;
            console.log(error);
            this.toastr.showErrorMessage("Modification non éffectuée !");
          }
        }
      )
    }
    else
    {
      this.userBody = {
        "person_type": "ADMIN",
        "profile": "ADMIN",
        "nom": this.adminForm.value.nom,
        "prenom": this.adminForm.value.prenom,
        "adresse": this.adminForm.value.adresse,
        "telephone": this.adminForm.value.telephone,
        "email": this.adminForm.value.email,
        "genre": this.adminForm.value.genre,
        "username": this.adminForm.value.username,
        "password": this.adminForm.value.password,
        "imageProfile": "imageLinnnkkk",
        "roles": [
          {"idRole": 2}
        ]
      };

      this.restApi.addNewUser(this.userBody).subscribe(
        {
          next: result =>{
            this.loading = false;
            this.toastr.showSuccessMessage("Ajout éffectué avec succès !");
            this.dialogRef.close();
          },
          error: error =>{
            this.loading = false;
            console.log(error);
            this.toastr.showErrorMessage("Ajout non éffectué !");
          }
        }
      ); 
    }
  }
}
