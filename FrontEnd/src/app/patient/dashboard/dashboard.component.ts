import { formatDate } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    "nom",
    "email",
    "telephone",
    "rdvDate",
    "isValid",
    "adresse"
  ];
  public profile: any ;
  public myTodayRDV: any = new MatTableDataSource([]);
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.myTodayRDV.paginator = this.paginator;
    this.myTodayRDV.sort = this.sort;
  }

  constructor(private restApi: RestApiService) {}
  ngOnInit(): void {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next : result =>{
          this.profile = result;
          let postBody = {"idPerson": this.profile.idPerson, "person_type": "PATIENT"};
          
          //Get today'RDV
          this.restApi.getRDVByPatientAndDate(this.currentDate, postBody, localStorage.getItem("token")).subscribe(
            {
              next: result=>{
                this.myTodayRDV.data = result;
              }
            }
          );
        }
      }
    );
  }
  
}
function postBody(profile: any, postBody: any, arg2: string) {
  throw new Error("Function not implemented.");
}

