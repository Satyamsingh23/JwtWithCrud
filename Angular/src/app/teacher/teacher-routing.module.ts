import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTeacherListComponent } from './show-teacher-list/show-teacher-list.component';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';

const routes: Routes = [
  {
    path:'show',
    component:ShowTeacherListComponent
  },
  {
    path:'addedit',
    component:AddEditTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
