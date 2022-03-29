import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"],
})
export class FormComponent {
  action: string;
  isDetails = false;
  rdv: any;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "details") {
      this.rdv = data.rdv;
      this.isDetails = true;
    } else {
      this.isDetails = false;
    }
  }
  
  submit() {
    // emppty stuff
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
