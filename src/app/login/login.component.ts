import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponce } from 'src/model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UserService,private router:Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe((data:LoginResponce) => {
      window.localStorage.setItem("access_token",data.token)
      this.router.navigate(["/products"])
    }, (err) => {
      console.log(err);
      alert("User not found")
      this.loginForm.reset()
    })
  }

}

