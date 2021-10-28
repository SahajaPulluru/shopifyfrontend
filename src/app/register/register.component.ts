import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private userService: UserService) {
    this.registerForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'country': new FormControl(''),
      'password': new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.userService.registerUser(this.registerForm.value).subscribe((data) => {
      alert("User Created Sussfully")
    }, (err) => {
      console.log(err)
    })
  }

}
