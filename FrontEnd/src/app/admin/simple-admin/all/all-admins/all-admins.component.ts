import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/core/service/api-services/rest-api.service';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { FormDialogComponent } from '../dialogs/form-dialog/form-dialog.component';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.sass']
})
export class AllAdminsComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    "nom",
    "prenom",
    "telephone",
    "email",
    "adresse",
    "genre",
    "actions",
  ];
  public listAdmins: any = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private restApi: RestApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshList();
  }

  ngAfterViewInit(): void {
      this.listAdmins.paginator = this.paginator; //Add Pagination
      this.listAdmins.sort = this.sort; //Add sort header element
  }

  refreshList()
  {
    this.restApi.getUserByProfile("ADMIN", localStorage.getItem("token")).subscribe(
      {
        next: result=>{
          this.listAdmins.data = result;

          //Sort list element order by desc
          this.listAdmins.data = this.listAdmins.data.sort((a, b)=> b - a);
        }
      }
    );
  }

  //Search filter table
  applyFilter(filterValue: string)
  {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.listAdmins.filter = filterValue;
  }

  //Add new admin
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
      direction: tempDirection,
      data: {
        action: "add"
      }
    });

    //Close added dialog
    dialogRef.afterClosed().subscribe(
      {
        next: result =>{
          this.refreshList(); //Refresh list
        }
      }
    );
  }

  //Edit admin
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
        admin: row,
        action: "edit"
      },
      direction: tempDirection
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

  //Delete admin
  deleteItem(row) {
    //Delete dialog config
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    
    //Make Delete dialog
    const dialogRef = this.dialog.open(DeleteComponent, {
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

}
