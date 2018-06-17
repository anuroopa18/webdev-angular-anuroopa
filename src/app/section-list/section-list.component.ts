import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:SectionServiceClient ) { 
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName='';
  seats:'';
  courseId;
  sections = [];
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


  ngOnInit() {
  }

}
