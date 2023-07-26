alter procedure PostSatyamStudent
(@StudentName varchar(30),
@StudentEmail varchar(30),
@DOB date,
@StudentPhone varchar(30),
@City varchar(30))

as
begin
insert into SatyamStudent
(
 StudentName,
 StudentEmail,
 DOB,
 StudentPhone,
 City,
 IsActive,
 IsDeleted,
 CreatedBy,
 CreatedOn
 )
 values(@StudentName ,@StudentEmail,@DOB, @StudentPhone, @City, 1,0,'admin', GETDATE())
 end
 select * from SatyamStudent
 ------------------------------------------------------------------------
 --UPDATE EMPLOYEE PROCEDURE

 alter procedure UpdateSatymStudent
 (
 @Id int,
 @StudentName varchar(30)='null',
@StudentEmail varchar(30)='null',
@Dob date,
@StudentPhone varchar(30),
@city varchar(30)
)

as
begin
update SatyamStudent set StudentName= @StudentName , StudentEmail=@StudentEmail, DOB= @Dob, StudentPhone=@StudentPhone ,City=@city
where
StudentId= @Id

end


---------------------------------------------------------------------------------------
--TEACHER  

create procedure PostSatyamTeacher
(@TeacherName varchar(30),
@TeacherEmail varchar(30),
@DOB date,
@TeacherPhone varchar(12),
@City varchar(30))

as
begin
insert into SatyamTeacher
(
 TeacherName,
 TeacherEmail,
 DOB,
 TeacherPhone,
 City,
 IsActive,
 IsDeleted,
 CreatedBy,
 CreatedOn
 )
 values(@TeacherName ,@TeacherEmail,@DOB, @TeacherPhone, @City, 1,0,'admin', GETDATE())
 end

 --------------------------------------------------------------------
  --UPDATE TEACHER PROCEDURE

  create procedure UpdateSatyamTeacher
 (
 @Id int,
 @TeacherName varchar(30)='null',
@TeacherEmail varchar(30)='null',
@Dob date,
@TeacherPhone varchar(12),
@city varchar(30)
)

as
begin
update SatyamTeacher set TeacherName= @TeacherName , TeacherEmail=@TeacherEmail, DOB= @Dob, TeacherPhone=@TeacherPhone ,City=@city
where
TeacherId= @Id

end


-------------------------------------------Store PRocedure User-----------------
create procedure PostMyLoginTable227
@UserName varchar(30)='null',
@UserEmail varchar(30)='null',
@UserPassword varchar(30)='null',
@UserPhone varchar(50)='null'

as
begin
insert into MyLoginTable227(UserName, UserEmail , UserPassword , UserPhone  )
values(@UserName , @UserEmail, @UserPassword, @UserPhone)
end


















--create procedure PostEmployeeJuly
--(@EmployeeName varchar(30),
--@FirstName varchar(30),
--@Dob date,
--@phone varchar(12),
--@city varchar(30))

--as
--begin
--insert into EmployeeJuly3
--(
-- EmpName,
-- EmpEmail,
-- DOB,
-- EmpPhone,
-- City,
-- IsActive,
-- IsDeleted,
-- CreatedBy,
-- CreatedOn
-- )
-- values(@EmployeeName ,@Email,@Dob, @phone, @city, 1,0,'admin', GETDATE())
-- end
