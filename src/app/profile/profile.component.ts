import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';
import { SectionServiceClient } from '../../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient
              ,private router: Router,
              private sectionService:SectionServiceClient) { }
user:{};
username;
password;
firstName;
lastName;
email;
phone;
address;
sections =[];


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
    );
    this.sectionService.findSectionsForStudent()
    .then(sections => this.sections = sections)
  }

}
