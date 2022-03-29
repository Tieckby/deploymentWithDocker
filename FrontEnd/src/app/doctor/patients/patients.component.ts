import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.sass"],
})
export class PatientsComponent implements OnInit {
  public currentUser: any;
  public myAllPatient: any;
  public userProfileImg: any = this.restApi.userLink+'/getProfileImg/';

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    this.restApi.getPersonByUsername(localStorage.getItem("username"), localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.currentUser = result;
          let postBody = {"idPerson": this.currentUser.idPerson, "person_type": "MEDECIN"};
          //Get all distinct patient for the current medecin
          this.restApi.getDistinctPatientByMedecin(postBody, localStorage.getItem("token")).subscribe(
            {
              next: result=>{
                this.myAllPatient = result;
              }
            }
          );
        }
      }
    );
  }
}
