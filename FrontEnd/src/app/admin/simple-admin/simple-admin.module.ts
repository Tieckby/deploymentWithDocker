import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleAdminRoutingModule } from './simple-admin-routing.module';
import { AddAdminComponent } from './add/add-admin/add-admin.component';
import { AllAdminsComponent } from './all/all-admins/all-admins.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormDialogComponent } from './all/dialogs/form-dialog/form-dialog.component';
import { DeleteComponent } from './all/dialogs/delete/delete.component';


@NgModule({
  declarations: [
    AddAdminComponent,
    AllAdminsComponent,
    FormDialogComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SimpleAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MaterialFileInputModule,
    SimpleAdminRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class SimpleAdminModule { }
