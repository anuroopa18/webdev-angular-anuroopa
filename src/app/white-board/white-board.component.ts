import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';
import { SectionServiceClient } from '../../services/section.service.client';
import { CourseServiceClient } from '../../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private userService:UserServiceClient,
              private router:Router,
              private sectionService:SectionServiceClient,
              private courseService:CourseServiceClient) { }
  
  loggedIn = false;
  hide=false;
  course={};
  courses=[];
  courseName=[];
  hideEnrolledCourse = false;
  logout(){
    this.userService.logout().then(() => this.router.navigate(['login']))
  }
  
  ngOnInit() {
    this.userService.checkUserLogIn()
   .then(response => {
    if(response.msg === "User is logged in")
    {
       this.loggedIn =true;
       this.hide=false;
       this.sectionService.findCoursesForStudent().
      then(courses => this.courses =courses)
      .then(courses => {
        courses.map(result =>{
          this.courseService.findCourseById(result.course).
          then(course => console.log(this.courseName.push(course)))
          .then(() => {
              if(this.courseName.length === 0){
                this.hideEnrolledCourse=true;
              }
          })
        }, this)
      
    })

    }
    else{
      this.loggedIn = false;
      this.hide=true;
    }
  })

     
      
     
  }
}
