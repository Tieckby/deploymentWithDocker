import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.sass"],
})
export class DeleteDialogComponent {
  public loading = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restApi: RestApiService,
    private toastr: ToasServiceService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.loading = true;
    this.restApi.deleteRDV(this.data.idRDV, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.loading = false;
          this.toastr.showSuccessMessage("Rendez-vous supprimé avec succès !");
          this.dialogRef.close();
        },
        error: error =>{
          this.loading = false;
          this.toastr.showErrorMessage("Rendez-vous non supprimé !");
        }
      }
    )
  }
}
