create table SatyamStudent
(
StudentId int primary key identity(1,1),
StudentName varchar(30) not null, 
StudentEmail varchar(30) not null,
DOB date,
StudentPhone varchar(30),
City varchar(30),
IsActive bit default 1,
IsDeleted bit default 0,
CreatedBy varchar(20),
CreatedOn date)

insert into SatyamStudent
values('kumar', 'kumar@gmail.com', '2008-11-11', 111111, 'Dehradun', 1, 0, 'admin','2023-07-03')
insert into SatyamStudent
values('Rajja', 'rajja@gmail.com', '2008-11-11', 334343, 'Mumbai', 1, 0, 'admin','2023-07-05')
insert into SatyamStudent
values('dasda', 'rajja@gmail.com', '2008-11-11', 334343, 'Mumbai', 1, 0, 'admin','2023-07-05')
insert into SatyamStudent
values('Pratab', 'pratav@gmail.com', '2008-11-11', 888858887, 'Mumbai', 1, 0, 'admin','2023-07-05')
insert into SatyamStudent
values('Astitva', 'astitva@gmail.com', '2008-11-11', 58989898, 'Mumbai', 1, 0, 'admin','2023-07-05')
insert into SatyamStudent
values('Sohaaaib', 'sohaibb@gmail.com', '2008-11-11', 66544144, 'Mumbai', 1, 0, 'admin','2023-07-05')
insert into SatyamStudent
values('Praxshant', 'prashant@gmail.com', '2008-11-11', 11223355, 'Mumbai', 1, 0, 'admin','2023-07-05')

select * from SatyamStudent


--------------------------------------------------------------------------------------------
create table SatyamTeacher
(
TeacherId int primary key identity(1,1),
TeacherName varchar(30) not null, 
TeacherEmail varchar(30) not null,
DOB date,
TeacherPhone varchar(30) ,
City varchar(30),
IsActive bit default 1,
IsDeleted bit default 0,
CreatedBy varchar(20),
CreatedOn date)

insert into SatyamTeacher
values('Prashant', 'prashant@gmail.com', '2009-11-11', 2222, 'kolkata', 1, 0, 'admin','2023-07-03')

select * from SatyamTeacher





create table SatyamMiddleWare
(
MiddleWareId int primary key identity(1,1),
MiddleWareIP varchar(30) ,
middleWareName varchar(30))


Select * from SatyamMiddleWare








--create table EmployeeJuly3
--(
--EmpId int primary key identity(1,1),
--EmpName varchar(30) not null, 
--EmpEmail varchar(30) not null,
--DOB date,
--EmpPhone int null,
--City varchar(30),
--IsActive bit default 1,
--IsDeleted bit default 0,
--CreatedBy varchar(20),
--CreatedOn date)

--insert into EmployeeJuly3
--values('Kuamr', 'kumar@gmail.com', '2008-11-11', 111111, 'Dehradun', 1, 0, 'user','2023-07-03')

--select * from EmployeeJuly3
