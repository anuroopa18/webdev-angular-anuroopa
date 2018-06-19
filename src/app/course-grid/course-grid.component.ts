import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';
import { Course } from '../models/course.model.client';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,private userService:UserServiceClient,
              private router: Router) { }

  courses : Course[] = [];

  btnEnroll(courseId){
   // alert("You are here");
   this.userService.checkUserLogIn()
   .then(response => {
    if(response.msg === "User is logged in")
    {
     this.router.navigate(['course/'+courseId+'/section']);
     
    }
    else{
      this.router.navigate(['login']);
      
    }
    
})
  }

  ngOnInit() {
     this.service.findAllCourses().then(courses => this.courses = courses)
  }

}
