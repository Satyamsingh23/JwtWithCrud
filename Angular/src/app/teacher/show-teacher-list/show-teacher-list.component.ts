import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-teacher-list',
  templateUrl: './show-teacher-list.component.html',
  styleUrls: ['./show-teacher-list.component.css']
})
export class ShowTeacherListComponent {
  @ViewChild('change', { static: true })
  change!: ElementRef;
  constructor(private servicecall:ServiceService , private route:Router,private renderer:Renderer2,private elementref:ElementRef,private snackbar: MatSnackBar){}
  Users:any=[]
  formdata:any=[]
  dataSource :any;
  displayedColumns: string[] = ['teacherId','teacherName','teacherEmail', 'dob', 'city','teacherPhone','edit','delete'];	
ngOnInit()
{
this.GetAllTeachers();
}
  

GetAllTeachers()
{
  this.servicecall.GetAllTeachers().subscribe((res:any)=>
  {
    this.dataSource=new MatTableDataSource<any>(res.teacherList)
  })
}



getDataById(data:any)
{
  this.formdata.push(data)
  this.route.navigate(['./teacher/addedit']);
  
  console.log(data);
  
 
}
  GoTo()
  {
    this.route.navigate(['./teacher/addedit'])
  }
  
  Delete(id:any)
  {
    alert('Click Ok for Conformation');
    this.servicecall.DeleteTeacher(id).subscribe((res)=>
    {
      this.snackbar.open('Teacher Added', 'Success', {
        duration:2000
        });
     window.location.reload();
    })
  }
}
