import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username,password){
    this.service.login(username,password)
    .then( response => {
      if(response.check === "User does not exist")
      {
        alert("User does not exist");
       
       
      }
      else{
        this.router.navigate(['profile']);
        
      }
      
})
    
  }

  

  constructor(private router: Router, private service: UserServiceClient) { }

  ngOnInit() {
  }

}
