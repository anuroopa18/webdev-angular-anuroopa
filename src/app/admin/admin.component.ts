import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../../services/course.service.client';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
    private sectionService: SectionServiceClient) { }
  courses = [];
  course = {};
  courseTitle = "";
  sections = [];
  sectionName = "";
  sectionId = 0;
  seats = 0;
  selectedCourseId = 0;
  selectedSectionId = "";
  sectionSelected = false;
  courseSelected = false;
  section = {};
  oldSeats;
  name = "";
  hideSectionInfo = false;
  availableSeats=0;

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.section = {};
    if (this.isEmpty(this.section)) {
      this.hideSectionInfo = true;
    }
    this.courseSelected = true;
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
    if (this.selectedCourseId !== 0) {
      this.courseService.findCourseById(this.selectedCourseId)
        .then(course => this.courseTitle = course.title)
    }

  }

  update(name, seats, sectionId) {
    this.sectionService.findSectionById(sectionId)
    .then(section => this.section = section)
    .then(section => {
       this.oldSeats = section.seats;
       this.availableSeats = section.availableSeats;
       this.availableSeats = this.availableSeats + Math.abs(this.oldSeats-seats);
    }).then(() => {
      this.sectionService.updateSection(name, seats, sectionId,this.availableSeats)
      .then(section => this.section = section)
      .then(() => alert("Updated successfully!"))
    })
  }

  loadSections(courseId) {
    this.sectionService.findSectionsForCourse(courseId).
      then(sections => this.sections = sections);
  }

  addSection() {
    this.sectionName = this.courseTitle + " " + "Section 1";
    this.seats = 1;
    this.sectionService.createSection(this.selectedCourseId, this.sectionName, this.seats)
      .then(() => {
        this.loadSections(this.selectedCourseId);
      })
  }

  selectSection(sectionId) {
    this.selectedSectionId = sectionId;
    this.sectionSelected = true;

    this.sectionService.findSectionById(sectionId).
      then(section => this.section = section)
      .then(section => {
      this.name = section.name,
        this.seats = section.seats
      })
      .then(() => {
        if (this.isEmpty(this.section)) {
          this.hideSectionInfo = true;
        }
        else {
          this.hideSectionInfo = false;
        }
      })


  }

  delete(sectionId) {
    this.sectionId = sectionId;
    this.sectionService.deleteSection(sectionId)
      .then(() => this.sectionService.deleteEnrollmentForSection(sectionId)
        .then(() => {
          this.loadSections(this.selectedCourseId);
        }).then(() => alert("Section Deleted!"))
      )
  }


  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
    if (this.isEmpty(this.section)) {
      this.hideSectionInfo = true;
    }
  }

}
