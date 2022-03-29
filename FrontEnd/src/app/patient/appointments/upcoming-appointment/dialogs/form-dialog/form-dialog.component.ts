import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
import { formatDate } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
  providers: [],
})
export class FormDialogComponent {
  public action: string;
  public dialogTitle: string;
  public rdvForm: FormGroup;
  public allRives: any;
  public allCabinetMedicales: any;
  public selectedCabinet: any;
  public allMedecins: any;
  public currentUser: any;
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private restApi: RestApiService,
    private toastr: ToasServiceService,
    private router: Router
  ) {
    //Get all rive
    this.restApi.getAllRive().subscribe(
      {
        next: result =>{
          this.allRives = result;
        }
      }
    );

    //Get current user
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.currentUser = result;
        }
      }
    );

    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      let idRive = data.rdv.medecin.cabinetMedicale.rive.idRive;
      let idCabinet = data.rdv.medecin.cabinetMedicale.idCabinet;
      this.getCabinetByRive(idRive);
      this.getMedecinByCabinet(idCabinet);
      this.restApi.getCabinetByID(idCabinet).subscribe(
        {
          next: result =>{
            this.selectedCabinet = result;
          }
        }
      );
      this.dialogTitle = "Modifiez votre rendez-vous";
      this.rdvForm = this.fb.group({
        rive: [idRive, Validators.required],
        cabinetMedicale: [idCabinet, Validators.required],
        medecin: [data.rdv.medecin.idPerson, Validators.required],
        symptom: [data.rdv.symptom, Validators.required],
        rdvDate: [data.rdv.rdvDate, Validators.required],
        rdvHeure: [data.rdv.rdvHeure, Validators.required],
      });
    } else {
      this.dialogTitle = "Ajouter un rendez-vous";
      this.rdvForm = this.fb.group({
        rive: ["", Validators.required],
        cabinetMedicale: ["", Validators.required],
        medecin: ["", Validators.required],
        symptom: ["", Validators.required],
        rdvDate: ["", Validators.required],
        rdvHeure: ["", Validators.required],
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

  getMedecinByCabinet(idCabinet)
  {
    let postValue = {"idCabinet": idCabinet}
    this.restApi.getMedecinByCabinet(postValue).subscribe(
      {
        next: result =>{
          this.allMedecins = result;
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
    this.getMedecinByCabinet(idCabinet);
    this.restApi.getCabinetByID(idCabinet).subscribe(
      {
        next: result =>{
          this.selectedCabinet = result;
        }
      }
    );
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    let postRDV = {
      "rdvDate": this.rdvForm.value.rdvDate,
      "rdvHeure": this.rdvForm.value.rdvHeure,
      "symptom": this.rdvForm.value.symptom,
      "patient": {"idPerson": this.currentUser.idPerson, "person_type": "PATIENT"},
      "medecin": {"idPerson": this.rdvForm.value.medecin, "person_type": "MEDECIN"}
    }
    
    if(this.action === "edit")
    {
     this.restApi.updateRDV(this.data.rdv.idRDV, postRDV, localStorage.getItem("token")).subscribe(
       {
        next: result =>{
          this.loading = false;
          if(!result)
          {
            this.toastr.showWarningMessage("Ce médecin a déjà un rendez-vous à cette heure !");
            return;
          }
          if(result === "avant")
          {
            this.toastr.showWarningMessage("cette date de rendez-vous est passée !");
            return;
          }
          this.toastr.showSuccessMessage("Rendez-vous modifié avec succès !");
          if(this.rdvForm.value.rdvDate === formatDate(new Date(), 'yyyy-MM-dd', 'en'))
          {
            this.router.navigate(['/patient/appointments/today']);
          }
          this.dialogRef.close();
        },
        error: error =>{
          this.loading = false;
          this.toastr.showErrorMessage("Rendez-vous non modifié !");
        }
       }
     );
    }
    else
    {
      //Add new RDV
      this.restApi.takeRDV(postRDV, localStorage.getItem("token")).subscribe(
        {
          next: result =>{
            this.loading = false;
            if(!result)
            {
              this.toastr.showWarningMessage("Ce médecin a déjà un rendez-vous à cette heure !");
              return;
            }
            if(result === "avant")
            {
              this.toastr.showWarningMessage("Cette date de rendez-vous est passée !");
              return;
            }
            this.toastr.showSuccessMessage("Rendez-vous enregistré avec succès !");
            if(this.rdvForm.value.rdvDate === formatDate(new Date(), 'yyyy-MM-dd', 'en'))
            {
              this.router.navigate(['/patient/appointments/today']);
            }
            this.dialogRef.close();
          },
          error: error =>{
            this.loading = false;
            this.toastr.showErrorMessage("Rendez-vous non enregistré !");
          }
        }
      );
    }
  }
}
