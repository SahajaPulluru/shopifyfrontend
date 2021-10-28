import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private userService: UserService,private router:Router) {
    this.registerForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.userService.registerUser(this.registerForm.value).subscribe((data) => {
      alert("User Created Successfully")
      this.router.navigate(["/login"])
    }, (err) => {
      console.log(err)
    })
  }

}
