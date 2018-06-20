import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionServiceClient } from '../../services/section.service.client';
import { CourseServiceClient } from '../../services/course.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private service:SectionServiceClient,
              private router: Router ,
              private courseService:CourseServiceClient) { 
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName='';
  seats:'';
  courseId;
  sections = [];
  course={};
  loadSections(courseId){
     this.courseId = courseId;
     this.service.findSectionsForCourse(courseId).
     then(sections => this.sections = sections);
  }

  createSection(sectionName,seats){
    this.service.createSection(this.courseId,sectionName,seats)
    .then(() => {
      this.loadSections(this.courseId);
    })
  
  }

  enroll(section){
    this.service.enrollStudentInSection(section._id,section.courseId)
    .then(response => {
       if(response.msg == "Cannot enroll"){
          alert("Seats full!");
       }
       else{
        this.router.navigate(['profile']);
       }
    })
  }


  ngOnInit() {
     this.courseService.findCourseById(this.courseId)
     .then(course => this.course =course)

  }

}
