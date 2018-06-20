import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceClient } from '../../services/course.service.client';
import { Course } from '../models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service:CourseServiceClient, 
              private route:ActivatedRoute ,
              private router:Router) { 
    this.route.params.subscribe(params => this.loadCourse(params['courseId']));
  }

  home(){
     this.router.navigate(['home']);
  }
  
  course: Course = new Course();

  loadCourse(courseId){
    this.service.findCourseById(courseId)
    .then(course => this.course =course);
  }

  ngOnInit() {
  }

}
