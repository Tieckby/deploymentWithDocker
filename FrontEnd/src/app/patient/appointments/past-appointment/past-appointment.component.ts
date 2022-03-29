import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PastDeleteDialogComponent } from "./dialogs/delete/delete.component";
import { MatTableDataSource } from "@angular/material/table";
import { formatDate } from "@angular/common";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-past-appointment",
  templateUrl: "./past-appointment.component.html",
  styleUrls: ["./past-appointment.component.sass"],
  providers: [],
})
export class PastAppointmentComponent
  implements OnInit, AfterViewInit
{
  displayedColumns: string[] = [
    "nom",
    "adresse",
    "email",
    "telephone",
    // "symptom",
    "rdvDate",
    "isValid"
  ];

  public pastRDV: any = new MatTableDataSource([]);
  public profile: any;
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    public dialog: MatDialog,
    private restApi: RestApiService
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  ngAfterViewInit(): void {
    this.pastRDV.paginator = this.paginator;
    this.pastRDV.sort = this.sort;
  }

  refreshList() {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.profile = result;
          let postBody = {"idPerson": this.profile.idPerson, "person_type": "PATIENT"};
          this.restApi.pastRDVForPatient(this.currentDate, postBody, localStorage.getItem("token")).subscribe(
            {
              next: result =>{
                this.pastRDV.data = result;
                this.pastRDV.data = this.pastRDV.data.sort((a, b) => b - a);
              }
            }
          )
        }
      }
    );
  }
 
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.pastRDV.filter = filterValue;
  }

  // deleteItem(i: number, row) {
  //   let tempDirection;
  //   if (localStorage.getItem("isRtl") === "true") {
  //     tempDirection = "rtl";
  //   } else {
  //     tempDirection = "ltr";
  //   }
  //   const dialogRef = this.dialog.open(PastDeleteDialogComponent, {
  //     data: row,
  //     direction: tempDirection,
  //   });
  //   dialogRef.afterClosed().subscribe();
  // }
}