import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';
import { SectionServiceClient } from '../../services/section.service.client';
import { CourseServiceClient } from '../../services/course.service.client';
import { CourseGridComponent } from '../course-grid/course-grid.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient
              ,private router: Router,
              private sectionService:SectionServiceClient,
              private courseService:CourseServiceClient) { }
user:{};
username;
password;
firstName;
lastName;
email;
phone;
address;
sections =[];
courses=[];
course={};
courseName=[];
isAdmin=false;

getCourses(){
  
}

logout(){
  this.service.logout().then(() => this.router.navigate(['login']))
}

update(username,firstName,lastName,email,phone,address){
  this.service.update(username,firstName,lastName,email,phone,address)
  .then((() => alert('Details updated successfully!')))
}


  ngOnInit() {
    this.service.profile().then(user => 
      {
      this.username = user.username;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.phone = user.phone;
      this.address = user.address;
      }
    ).then(() => {
      if(this.username == "admin"){
        this.isAdmin= true;    
      }
    });

    

    this.sectionService.findSectionsForStudent()
    .then(sections => this.sections = sections)

    this.sectionService.findCoursesForStudent().
    then(courses => this.courses =courses)
    .then(courses => {
      courses.map(result =>{
        this.courseService.findCourseById(result.course).
        then(course => this.courseName.push(course))
      }, this)
    
  })
   
  }

}
