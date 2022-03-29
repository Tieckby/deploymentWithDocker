import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormDialogComponent } from "./dialogs/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./dialogs/delete/delete.component";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { formatDate } from "@angular/common";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-upcoming-appointment",
  templateUrl: "./upcoming-appointment.component.html",
  styleUrls: ["./upcoming-appointment.component.sass"],
  providers: [],
})
export class UpcomingAppointmentComponent
  implements OnInit, AfterViewInit
{
  displayedColumns: string[] = [
    "nom",
    "adresse",
    "email",
    "telephone",
    "symptom",
    "rdvDate",
    "isValid",
    "actions"
  ];

  public upcomingRDV: any = new MatTableDataSource([]);
  public profile: any;
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    public dialog: MatDialog,
    private restApi: RestApiService
  ){}

  ngOnInit() {
    this.refreshList();
  }

  ngAfterViewInit(): void {
      this.upcomingRDV.paginator = this.paginator;
      this.upcomingRDV.sort = this.sort;
  }

  refreshList()
  {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next : result =>{
          this.profile = result;
          let postBody = {"idPerson": this.profile.idPerson, "person_type": "PATIENT"};
          this.restApi.upComingRDVForPatient(this.currentDate, postBody, localStorage.getItem("token")).subscribe(
            {
              next: result =>{
                this.upcomingRDV.data = result;
                this.upcomingRDV.data = this.upcomingRDV.data.sort((a, b) => b - a);
              }
            }
          )
        }
      }
    );
  }

  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.upcomingRDV.filter = filterValue;
  }
 
  addNew() {
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        action: "add",
      },
      direction: tempDirection,
    });
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList();
        }
      }
    );
  }

  editCall(row) {
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        rdv: row,
        action: "edit",
      },
      direction: tempDirection,
    });

    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList();
        }
      }
    );
  }

  deleteItem(row) {
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList();
        }
      }
    );
  }
}