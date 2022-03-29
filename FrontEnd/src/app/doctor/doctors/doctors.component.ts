import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.sass"],
})
export class DoctorsComponent implements OnInit {
  public allMedecins: any;
  public userProfileImg: any = this.restApi.userLink+'/getProfileImg/';

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    this.restApi.getUserByProfile('MEDECIN', localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.allMedecins = result;
        }
      }
    )
  }
}
