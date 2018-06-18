import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username;
  password;
  password2;
  register(username,password,password2){
    if(password == password2){
    this.service.findUserByUsername(username).then( response => {
            if(response.errorMsg === "Username exists")
            {
              alert("Username already exists");
            }
            else{
              this.service
           .createUser(username,password,password2)
           .then((() => this.router.navigate(['profile']) ))
            }
            
    })
        
          // this.service
          // .createUser(username,password,password2)
          // .then((() => this.router.navigate(['profile']) ))
        
    }

    else{
      alert("Passwords dont match");
    }
    
  }
  constructor(private router:Router, private  service:UserServiceClient) { }

  ngOnInit() {

  }

}
