import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { ToasServiceService } from 'src/app/core/service/toast-service/toas-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass']
})
export class DeleteComponent implements OnInit {
  public loading = false;

  constructor(
    public dialoRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private restApi: RestApiService,
    private toastr: ToasServiceService
  ) { }

  ngOnInit(): void {
  }

  onNoClick()
  {
    this.dialoRef.close();
  }

  confirmDelete(): void
  {
    this.loading = true
    this.restApi.deleteUser(this.data.idPerson, localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.loading = false;
          this.toastr.showSuccessMessage("Suppression éffectuée avec succès !");
          this.dialoRef.close();
        },
        error: error =>{
          this.loading = false;
          console.log(error);
          this.toastr.showErrorMessage("Suppression non éffectuée !");
        }
      }
    );
  }
}
