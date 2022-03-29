import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { ToasServiceService } from 'src/app/core/service/toast-service/toas-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.sass']
})
export class AddAdminComponent implements OnInit {
  adminForm: FormGroup;
  userBody: any;
  loading = false;

  constructor(private fb: FormBuilder, private restApi: RestApiService,
    private router: Router,
    private toastr: ToasServiceService)
  {
    this.adminForm = this.fb.group({
        nom: ["", Validators.required],
        prenom: ["", Validators.required],
        adresse: ["", Validators.required],
        genre: ["", Validators.required],
        telephone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        email: [
          "",
          [Validators.required, Validators.email],
        ],
        username: ["", Validators.required],
        password: ["", Validators.required],
      });
    }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.loading = true;
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
          this.resetForm();
          this.toastr.showSuccessMessage("L'administrateur ajouté avec succès !");
          this.router.navigate(['/admin/simple-admin/allAdmins']);
        },
        error: error =>{
          this.loading = false;
          console.log(error);
          this.toastr.showErrorMessage("Ajout non éffectué !");
        }
      }
    );
  }

  resetForm()
  {
    this.adminForm.reset();
  }
}
