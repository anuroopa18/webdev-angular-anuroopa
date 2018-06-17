import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import { CourseNavigatorServiceClient } from '../services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseServiceClient } from '../services/course.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { routing } from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleServiceClient } from '../services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonServiceClient } from '../services/lesson.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetServiceClient } from '../services/widget.service.client';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserServiceClient } from '../services/user.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionServiceClient } from '../services/section.service.client';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    ProfileComponentComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
