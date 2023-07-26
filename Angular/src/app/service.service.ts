import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  
  login(data:any)
  { 

   
    return this.http.post('http://localhost:5241/api/Authentication/AuthenticateUser',data);
  }

  SignUp(data:any)
  { 
    console.log(data);
    
    return this.http.post('http://localhost:5241/api/User/SaveUserDetails',data);
  }

  GetAllStudents()
  { 
    console.log();
    
    return this.http.get('http://localhost:5241/api/Student/GetAllStudentDetails');
  }

  PostStudent(data:any)
  {
    return this.http.post('http://localhost:5241/api/Student/SaveStudentDetails',data);
  }

  UpdateStudent(data:any)
  {
    console.log(data);
    
    return this.http.put<any>('http://localhost:5241/api/Student/UpdateStudent',data);
  }

  DeleteStudent(val:any)
  {

    return this.http.delete('http://localhost:5241/api/Student/DeleteStudent/id?id='+val)
  }
GetStudentById(id:any)
{
  console.log("hjhjh",id);
  
  return  this.http.get('http://localhost:5241/api/Student/GetStudentBy/id?id='+id)
}
  GetAllTeachers()
  {
    return this.http.get('http://localhost:5241/api/Teacher/GetAllteachers')
  }

  // GetTeacherById(val:any)
  // {
  //   return this.http.get(`http://localhost:5241/api/Teacher/GetTeacher/id?id=${val}`)
  // }

  PostTeacher(data:any)
  {
  return this.http.post('http://localhost:5241/api/Teacher/SaveTeacherDetails',data)
  }

  UpdateTeacher(data:any)
  {
return this.http.put<any>('http://localhost:5241/api/Teacher/UpdateTeacher',data)
  }

  DeleteTeacher(val:any)
  {
 
  return this.http.delete(`http://localhost:5241/api/Teacher/DeleteTeacher/id?id=${val}`)
  }
}
