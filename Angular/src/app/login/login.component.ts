import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Token } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data1: any;
  constructor(private fb: FormBuilder, private servicecall: ServiceService, private route: Router, private snackbar: MatSnackBar,private toastr: ToastrService) { }
  LoginForm = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  });

  SignUp = new FormGroup(
    {
      userName: new FormControl('', [Validators.required]),
      userPhone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    }
  )
  Login(data: any) {
    {
      if (this.LoginForm.valid) {
        this.servicecall.login(data).subscribe((res: any) => {
          this.data1 = res.token;
          
          let jwtData=this.data1.split('.')[1]
        
          if (this.data1 != null) 
          {
            localStorage.setItem('token', this.data1)
              this.route.navigate(['./student/show'])
            this.toastr.success('Login Successfull', 'Success');
           
            if(!Token)
            {
              this.toastr.error('Token Not Found!', 'Try Again');
            }
        

          }
          else {
            this.toastr.error('Login Failed', 'Failed');
          
            this.route.navigate([''])
          }
        })
      }
      else {

        this.toastr.error('Enter Complete Password', 'Failed');

      }
 }

  }

  AddUSer(data: any) {
    console.log(data);

    this.servicecall.SignUp(data).subscribe((res) => {
      console.log(data);
      this.snackbar.open('User Saved Successfully', 'saved', {
        duration: 10000
      });

    })
    location.reload();
  }

}
