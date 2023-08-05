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
  user = { name: '', gender: '', date: '', age: 0, contact: {phone: ''}};
  maxDate: string;
  calculatedAge!: number;

  userForm = new FormGroup({
    name: new FormControl(this.user.name, Validators.required),
    gender: new FormControl(this.user.gender, Validators.required),
    date: new FormControl(this.user.date, Validators.required),
    age: new FormControl(this.user.age),
    contact: new FormControl(this.user.contact.phone, Validators.required)
  });
  
  constructor () {let today = new Date();
    let maxDate = new Date(today.getFullYear() - 12, today.getMonth(), today.getDate());
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

  get contact() {
    return this.userForm.get('contact');
  }

  onDateChange(event: Event) {
    let selectedDate = (event.target as HTMLInputElement).value;
    let currentDate = new Date();
    let selected = new Date(selectedDate);
    let ageDiff =  currentDate.getFullYear() - selected.getFullYear();
    if (currentDate.getMonth() < selected.getMonth() ||
        (currentDate.getMonth() === selected.getMonth() && currentDate.getDate() < selected.getDate())) {
      this.calculatedAge = ageDiff - 1;
    } else {
      this.calculatedAge = ageDiff;
    }
    this.userForm.controls.age.setValue(this.calculatedAge);
}
}
