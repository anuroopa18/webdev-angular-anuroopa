import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private courseService:CourseServiceClient,
              private sectionService: SectionServiceClient) { }
  courses = [];
  course={};
  courseTitle="";
  sections=[];
  sectionName="";
  seats=0;
  selectedCourseId=0;
  selectedSectionId="";
  sectionSelected=false;
  courseSelected=false;
  selectCourse(courseId){
    this.selectedCourseId =courseId;
    this.courseSelected=true;
    this.sectionService.findSectionsForCourse(courseId)
    .then(sections => this.sections = sections);
    if(this.selectedCourseId !== 0){
      this.courseService.findCourseById(this.selectedCourseId)
      .then(course => this.courseTitle = course.title )
      }

  }

  loadSections(courseId){
    this.sectionService.findSectionsForCourse(courseId).
    then(sections => this.sections = sections);
 }

  addSection(){
   this.sectionName = this.courseTitle+""+"Section 1";
   this.seats =1;
   this.sectionService.createSection(this.selectedCourseId,this.sectionName,this.seats)
   .then(() => {
    this.loadSections(this.selectedCourseId);
  })
  }

  selectSection(sectionId){
     this.selectedSectionId = sectionId;
     this.sectionSelected=true;
  }


  ngOnInit() {
    this.courseService.findAllCourses()
    .then(courses => this.courses = courses);
    
  }

}
