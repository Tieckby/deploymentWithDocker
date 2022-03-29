import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
@Component({
  selector: "app-add-doctor",
  templateUrl: "./add-doctor.component.html",
  styleUrls: ["./add-doctor.component.sass"],
})
export class AddDoctorComponent {
  public medecinForm: FormGroup;
  public hide3 = true;
  public agree3 = false;
  public userBody: any;
  public allRive: any;
  public allCabinetMedicales: any;
  public allSpecialities: any;
  public loading = false;

  constructor(private fb: FormBuilder, private restApi: RestApiService,
    private router: Router, private toastr: ToasServiceService)
    {
      //Get all rive
      this.restApi.getAllRive().subscribe(
        {
          next: result =>{
            this.allRive = result;
          }
        }
      );

      this.medecinForm = this.fb.group({
        nom: ["", Validators.required],
        prenom: ["", Validators.required],
        adresse: ["", Validators.required],
        genre: ["", Validators.required],
        telephone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern("[0-9]*")]],
        rive: ["", Validators.required],
        cabinetMedicale: ["", Validators.required],
        specialite: ["", Validators.required],
        email: [
          "",
          [Validators.required, Validators.email],
        ],
        username: ["", Validators.required],
        password: ["", Validators.required],
      });
  }

  onChangeRiveValue(idRive: number)
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

  onSubmit() {
    this.loading = true;
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

    this.restApi.addNewUser(this.userBody).subscribe(
      {
        next: result =>{
          this.loading = false;
          this.toastr.showSuccessMessage("Médecin ajouté avec succès !");
          this.router.navigate(['/admin/doctors/allDoctors']);
        },
        error: error =>{
          console.log(error);
          this.loading = false;
        }
      }
    );
  }

  resetForm()
  {
    this.medecinForm.reset();
  }
}
