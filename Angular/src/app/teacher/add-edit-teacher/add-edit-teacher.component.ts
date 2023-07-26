import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent {
  constructor(private ServiceCall: ServiceService, private route: Router, private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }
  today = new Date(); 
  Form = new FormGroup({
    teacherId: new FormControl(),
    teacherName: new FormControl('', [Validators.required]),
    teacherEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(20)]),
    dob: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required],),
    teacherPhone: new FormControl(0, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)])

  });
  public myError = (controlName: string, errorName: string) =>
  {
    return this.Form.controls['teacherName'].hasError(errorName);
    

  }
  

  SubmitForm(data: any) {
    console.log(data);

    var user = this.Form.value;
    if (this.Form.valid) {

      if (user.teacherId) {
        console.log(user.teacherId);

        this.ServiceCall.UpdateTeacher(user).subscribe((res: any) => {
          this.snackbar.open('Teacher Updated', 'Success', {
            duration: 2000
          });

        })
      }
      else {
        user.teacherId = 0;
        this.ServiceCall.PostTeacher(user).subscribe((res: any) => {
          this.snackbar.open('Teacher Added', 'Success', {
            duration: 2000
          });
          this.route.navigate(['./teacher/show'])
        })
      }
    }
  };

  exit() {
    this.route.navigate(['./teacher/show']);
  }

}
