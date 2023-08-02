import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../Instances/newUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    gender: new FormControl<string>('', Validators.required),
    date: new FormControl<String>('', Validators.required),
    age: new FormControl<number>(0, Validators.required),
    contact: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
    repeatPassword: new FormControl<string>('', Validators.required),
    hobies: new FormControl('', Validators.required),
  })

  // confirm() {
  //   let user = new User(this.userForm.value);
  // }
}
