import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChildActivationEnd, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-student-list',
  templateUrl: './show-student-list.component.html',
  styleUrls: ['./show-student-list.component.css']
})
export class ShowStudentListComponent {
  // @ViewChild('change', { static: true })
  // change!: ElementRef;
  items: any;
  StudentId:any;
  constructor(private servicecall: ServiceService, private route: Router, private renderer: Renderer2, private elementref: ElementRef) { }
  Users: any = []
  dataSource: any;
  displayedColumns: string[] = ['studentId', 'studentName', 'studentEmail', 'dob', 'city', 'studentPhone', 'edit', 'delete'];
  isParent:boolean=true;
  isChild:boolean=false;

  ngOnInit() {

    this.GetAll();

  }

  GetAll() {

    this.servicecall.GetAllStudents().subscribe((res: any) => {

      this.dataSource = new MatTableDataSource<any>(res.studentlist)

    })
  }

  SendId(id: any) 
  {
     console.log(id);
     this.isParent=false,
    this.isChild=true,
      this.StudentId=id;

  }

  GoTo() {
    this.route.navigate(['./student/addedit']);

  }
  ShowTeacher() {
    this.route.navigate(['./teacher/show']);

  }


  Delete(id: any) 
  {
    alert('Click Ok for Conformation');
    this.servicecall.DeleteStudent(id).subscribe((res) => {
      alert("Student Deleted Successfully");
      this.GetAll();
    })
   
  }


}
