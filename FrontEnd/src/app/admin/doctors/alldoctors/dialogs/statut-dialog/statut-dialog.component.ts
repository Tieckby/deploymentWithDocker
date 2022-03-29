import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { ToasServiceService } from 'src/app/core/service/toast-service/toas-service.service';

@Component({
  selector: 'app-statut-dialog',
  templateUrl: './statut-dialog.component.html',
  styleUrls: ['./statut-dialog.component.sass']
})
export class StatutDialogComponent {
  loading = false;

  constructor
  (
    private restApi: RestApiService,
    private toastr: ToasServiceService,
    public dialogRef: MatDialogRef<StatutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setStatut(etat: string)
  {
    this.loading = true;
    this.restApi.setUserStatut(this.data.idPerson, etat, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.toastr.showSuccessMessage(result);
          this.loading = false;
          this.dialogRef.close();
        }
      }
    );
  }

}
