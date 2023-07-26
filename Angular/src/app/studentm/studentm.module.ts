import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table' 
import { StudentmRoutingModule } from './studentm-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ShowStudentListComponent } from './show-student-list/show-student-list.component';
import { Routes } from '@angular/router';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RendrerExampleDirective } from '../rendrer-example.directive';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [

    ShowStudentListComponent,
     AddEditStudentComponent,
     RendrerExampleDirective
 
    
  ],
  imports: [
    CommonModule,
    StudentmRoutingModule,MatTableModule,MatIconModule,MatButtonModule,MatInputModule ,MatFormFieldModule , MatDatepickerModule,FormsModule,
    ReactiveFormsModule,MatNativeDateModule,MatToolbarModule,MatPaginatorModule
  ]
})
export class StudentmModule { }
