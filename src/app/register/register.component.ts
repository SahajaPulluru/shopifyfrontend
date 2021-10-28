import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
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
      'username': new FormControl('', Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
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
