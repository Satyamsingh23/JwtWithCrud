import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { ShowTeacherListComponent } from './show-teacher-list/show-teacher-list.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
// import { RendrerExampleDirective } from '../rendrer-example.directive';
// import { RendrerExampleDirective } from '../rendrer-example.directive';
@NgModule({
  declarations: [
    ShowTeacherListComponent,
    AddEditTeacherComponent,
    
   

  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,MatButtonModule,MatInputModule ,MatFormFieldModule , MatDatepickerModule,FormsModule,
    ReactiveFormsModule,MatNativeDateModule,MatToolbarModule,MatIconModule,MatTableModule
  ]
})
export class TeacherModule { }
