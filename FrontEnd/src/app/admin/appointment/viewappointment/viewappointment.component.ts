import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";

@Component({
  selector: "app-viewappointment",
  templateUrl: "./viewappointment.component.html",
  styleUrls: ["./viewappointment.component.sass"],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
})
export class ViewappointmentComponent
  implements OnInit, AfterViewInit
{
  displayedColumns = [
    "nom",
    "email",
    "genre",
    "rdvDate",
    "rdvHeure",
    "telephone",
    "medecin",
    "symptom",
    "isValid"
  ];

  public listRDV: any = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private restApi: RestApiService){}

  ngOnInit()
  {
    this.refreshList();
  }

  ngAfterViewInit(): void {
    this.listRDV.paginator = this.paginator;
    this.listRDV.sort = this.sort;
    this.refreshList();
  }

  refreshList()
  {
    this.restApi.getAllRDV(localStorage.getItem("token")).subscribe(
      {
        next: result =>{
          this.listRDV.data = result;
          this.listRDV.data = this.listRDV.data.sort((a, b)=> b - a);
        }
      }
    );
  }

  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.listRDV.filter = filterValue;
  }
}
