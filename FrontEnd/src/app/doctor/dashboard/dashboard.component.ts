import { DatePipe, formatDate } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    "nom",
    "email",
    "genre",
    "rdvDate",
    "rdvHeure",
    "telephone",
    "symptom",
    "isValid"
  ];

  public myAllPatient: any;
  public myTodayPatient: any;
  public myAllRDV: any;
  public myTodayRDV: any = new MatTableDataSource([]);
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public currentUser: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.myTodayRDV.paginator = this.paginator;
    this.myTodayRDV.sort = this.sort;
  }

  constructor(private restApi: RestApiService){}

  ngOnInit() {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.currentUser = result;
          
          let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "MEDECIN"};          
          
          //Get all today's distinct patient for the current medecin
          this.restApi.getDistinctPatientByMedecinAndDate(this.currentDate, postBody, localStorage.getItem("token")).subscribe(
            {
              next: result=>{
                this.myTodayPatient = result;
              }
            }
          );

          //Get all distinct patient for the current medecin
          this.restApi.getDistinctPatientByMedecin(postBody, localStorage.getItem("token")).subscribe(
            {
              next: result=>{
                this.myAllPatient = result;
              }
            }
          );

          //Get all RDV for the current medecin
          this.restApi.getRDVByMedecin(postBody, localStorage.getItem("token")).subscribe(
            {
              next: result =>{
                this.myAllRDV = result;
              }
            }
          );
          
          //Get today'RDV
          this.restApi.getRDVByMedecinAndDate(this.currentDate, postBody, localStorage.getItem("token")).subscribe(
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
