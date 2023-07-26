import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent {
  constructor(private ServiceCall: ServiceService, private route: Router, private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }
 @Input() StudentId:any
 StudentData={studentId:'',studentName:'', studentEmail:'' ,dob:'', studentPhone:'', city:'' }
  ngOnInit() 
  {
      this.getStudentDataById()
  }
  Form = new FormGroup({
    // employeeId: new FormControl(''),
    studentId: new FormControl( ),
    studentName: new FormControl('', [Validators.required]),
    studentEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    dob: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    studentPhone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)])

  });
  SubmitForm(data: any) 
  {

      data.studentId=this.StudentId
      console.log(data);

    if (this.Form.valid)
     {
    
      if (data.studentId>0)
       {
        console.log(data.studentId);

        this.ServiceCall.UpdateStudent(data).subscribe((res: any) => {
          this.snackbar.open('Student Updated', 'Success', {
            duration: 2000
          });

        })
      }
      else {
        // data.studentId = 0;
        this.ServiceCall.PostStudent(data).subscribe((res: any) => {
          this.snackbar.open('Student Added', 'Success', {
            duration: 2000
          });
          this.route.navigate(['./student/show'])
        })
      }
    }
  };

  getStudentDataById()
  {
    this.ServiceCall.GetStudentById(this.StudentId).subscribe((res:any)=>
    {
      this.StudentData=res.student;
      //this.Form.controls['studentId'].setValue(String(this.StudentData.studentId));
      this.Form.controls['studentName'].setValue(String(this.StudentData.studentName));
      this.Form.controls['studentEmail'].setValue(String(this.StudentData.studentEmail));
      this.Form.controls['dob'].setValue(String(this.StudentData.dob));
      this.Form.controls['studentPhone'].setValue(String(this.StudentData.studentPhone));
      this.Form.controls['city'].setValue(String(this.StudentData.city));

    })
    //Patching Student Data to Form
  }

  exit() 
  {
    this.route.navigate(['./student/show']);
  }

}
