import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: "app-allpatients",
  templateUrl: "./allpatients.component.html",
  styleUrls: ["./allpatients.component.sass"],
})
export class AllpatientsComponent
  implements OnInit, AfterViewInit
{
  displayedColumns = [
    "nom",
    "prenom",
    "genre",
    "telephone",
    "adresse",
    "profession",
    "email"
  ];

  public listPatients: any = new MatTableDataSource([]);

  constructor(
    public dialog: MatDialog,
    private restApi: RestApiService){}
  
  //Init pagination value
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  //pour recuperé la liste des patients dans la base
  ngOnInit() {
    this.restApi.getUserByProfile("PATIENT",localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.listPatients.data = result;
          this.listPatients.data = this.listPatients.data.sort((a, b)=> b - a);
        }
      }
    );

  }

   //Angular Pagination
   ngAfterViewInit(): void {
    this.listPatients.paginator = this.paginator; //make pagination
    this.listPatients.sort = this.sort;
  }
  
  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.listPatients.filter = filterValue;
  }
}
  
      