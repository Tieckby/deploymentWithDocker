import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-today-appointment",
  templateUrl: "./today-appointment.component.html",
  styleUrls: ["./today-appointment.component.sass"],
})
export class TodayAppointmentComponent implements OnInit {
  public profile: any;
  public currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  public myTodayRDV: any;


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
                this.myTodayRDV = result;
              }
            }
          );
        }
      }
    );
  }
}
