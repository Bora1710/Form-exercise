import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  genderOptions = ['Male', 'Female', 'Other']
  user = { name: '', gender: '', date: '', age: 0};
  maxDate: string;

  userForm = new FormGroup({
    name: new FormControl(this.user.name, Validators.required),
    gender: new FormControl(this.user.gender, Validators.required),
    date: new FormControl(this.user.date, Validators.required),
    age: new FormControl(this.user.age),
  });
  
  constructor () {const today = new Date();
    const maxDate = new Date(today.getFullYear() - 12, today.getMonth(), today.getDate());
    this.maxDate = maxDate.toISOString().split('T')[0];
  }
  get name() {
    return this.userForm.get('name')!;
  }
  
  get gender() {
    return this.userForm.get('gender')!;
  }

  get date() {
    return this.userForm.get('date')!;
  }
}
