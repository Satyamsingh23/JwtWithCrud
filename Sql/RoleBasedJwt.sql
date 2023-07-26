create table MyLoginTable227
( 
 UserId int identity(1,1) primary key not null, UserName varchar(50) not null , UserEmail varchar(50) not null, UserPassword varchar(50) not null,
 UserPhone varchar(50) 
)


insert into MyLoginTable227 
values('Satyam', 'satyam@gmail.com','satty123','11111')
insert into MyLoginTable227 
values('Akshay', 'askshay@gmail.com','akshay123','2222')
insert into MyLoginTable227 
values('Arvind', 'arvind@gmail.com','arvind123','3333')

select * from MyLoginTable227

----------------------------------------------------------------------------------------------------------
create table  RoleMaster227
( 
	RoleId  int primary key identity(1,1) not null,
    Role varchar(50) not null
)
insert into RoleMaster227 
values('Teacher')

select * from RoleMaster227
drop table RoleMaster227
--------------------------------------------------------------------------------------------

create table UserRoleMapping227
( RoleMapId int identity(1,1) primary key not null,
  UserId int FOREIGN KEY REFERENCES MyLoginTable227(UserId),
  RoleId  int FOREIGN KEY REFERENCES RoleMaster227(RoleId),
 )
 drop table UserRoleMapping227

 insert into UserRoleMapping227
 values(1,1)
 insert into UserRoleMapping227
 values(2,3)
 insert into UserRoleMapping227
 values(3,2)

 --insert into UserRoleMapping227
 --values(2,2)
 --insert into UserRoleMapping227
 --values(2,3)

 
 --insert into UserRoleMapping227
 --values(3,2)


select * from MyLoginTable227
select * from RoleMaster227	
select * from UserRoleMapping227
select * from SatyamTeacher
select * from SatyamStudent

