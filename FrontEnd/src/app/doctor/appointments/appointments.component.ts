import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { ToasServiceService } from "src/app/core/service/toast-service/toas-service.service";
import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.sass"],
})
export class AppointmentsComponent implements OnInit, AfterViewInit
{
  displayedColumns = [
    "nom",
    "dateTime",
    "telephone",
    "email",
    "genre",
    "symptom",
    "isValid",
    "actions"
  ];

  public currentUser: any;
  public myAllRDV: any = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private restApi: RestApiService, private toatr: ToasServiceService){}

  ngOnInit(){
    this.refreshList();
  }

  ngAfterViewInit(): void {
      this.myAllRDV.paginator = this.paginator; //Add pagination
      this.myAllRDV.sort = this.sort;
  }

  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.myAllRDV.filter = filterValue;
  }

  refreshList()
  {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.currentUser = result;
          
          let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "MEDECIN"};
          
          //Get all RDV for the current medecin
          this.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe(
            {
              next: result =>{
                this.myAllRDV.data = result;
              }
            }
          );         
        }
      }
    );
  }

  validRDV(row: any){
    this.restApi.validRDV(row.idRDV, true, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          if(result)
          {
            this.refreshList();
          }
          this.toatr.showSuccessMessage("Rendez-vous accepté !")
        }
      }
    );
  }

  cancel(row: any){
    this.restApi.validRDV(row.idRDV, false, localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          if(!result)
          {
            this.refreshList();
          }
          this.toatr.showSuccessMessage("Rendez-vous annulé !")
        }
      }
    );
  }

  detailsCall(row) {
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    this.dialog.open(FormComponent, {
      data: {
        rdv: row,
        action: "details",
      },
      direction: tempDirection,
      height: "60%",
      width: "50%",
    });
  }  
}