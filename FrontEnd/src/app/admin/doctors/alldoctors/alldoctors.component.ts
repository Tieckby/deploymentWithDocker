import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { FormDialogComponent } from "./dialogs/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./dialogs/delete/delete.component";
import { MatTableDataSource } from "@angular/material/table";
import { RestApiService } from "src/app/core/service/api-services/rest-api.service";
import { StatutDialogComponent } from "./dialogs/statut-dialog/statut-dialog.component";

@Component({
  selector: "app-alldoctors",
  templateUrl: "./alldoctors.component.html",
  styleUrls: ["./alldoctors.component.sass"],
})
export class AlldoctorsComponent
  implements OnInit, AfterViewInit
{
  displayedColumns = [
    "nom",
    "specialite",
    "email",
    "telephone",
    "cabinet",
    "status",
    "actions",
  ];
  public listMedecins: any = new MatTableDataSource([]);

  constructor(
    public dialog: MatDialog,
    private restApi: RestApiService
  ){}

  //Init pagination value
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  //Init sort value
  @ViewChild(MatSort) sort: MatSort

  ngOnInit() {
    this.refreshList(); //Refresh list
  }

  refreshList()
  {
    this.restApi.getUserByProfile("MEDECIN", localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.listMedecins.data = result;

          //Sort list element order by desc
          this.listMedecins.data = this.listMedecins.data.sort((a, b)=> b - a);
        }
      }
    );
  }

  //Angular Pagination
  ngAfterViewInit(): void {
    this.listMedecins.paginator = this.paginator; //make pagination
    this.listMedecins.sort = this.sort; //Make sort
    this.refreshList();
  }

  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.listMedecins.filter = filterValue;
  }

  addNew() {
    //Add dialog config
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }

    //Make add dialog
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        action: "add",
      },
      direction: tempDirection,
    });

    //Close add dialog
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList(); //Refresh list
        }
      }
    );
  }
  editCall(row) {
    //Edit dialog config
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }

    //Make edit dialog
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        medecin: row,
        action: "edit",
      },
      direction: tempDirection,
    });

    //Close edit dialog
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList(); //Refresh list
        }
      }
    );
  }
  deleteItem(row) {
    //Delete dialog config
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    
    //Make Delete dialog
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });

    //Close delete dialog
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList(); //Refresh list
        }
      }
    );
  }

  openDialog(row)
  {
    //Statut dialog config
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }

    //Make statut dialog
    const dialogRef = this.dialog.open(StatutDialogComponent, {
      data: row,
      direction: tempDirection
    });

    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList(); //Refresh list
        }
      }
    )
    
  }
}
