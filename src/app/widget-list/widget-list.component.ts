import { Component, OnInit } from '@angular/core';
import { WidgetServiceClient } from '../../services/widget.service.client';
import { ActivatedRoute } from '@angular/router';
import { Widget } from '../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service:WidgetServiceClient, 
              private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.setContext(params));
   }

   lessonId;
   widgets: Widget[] = [];
   setContext(params){
      this.lessonId = params['lessonId'];
      this.loadWidgets(this.lessonId);
   }

   loadWidgets(lessonId){
     if(lessonId !== undefined){
     this.service.findWidgetForLesson(lessonId).then(widgets => this.widgets =widgets);
     }
   }

  ngOnInit() {
  }

}
