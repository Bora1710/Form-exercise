import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  genderOptions = ['Male', 'Female', 'Other'];
  user = {
    name: '',
    gender: '',
    date: '',
    age: 0,
    contact: { phone: '' },
    email: '',
    password: '',
    passwordRepeat: '',
  };
  maxDate: string;
  calculatedAge!: number;

  userForm = new FormGroup({
    name: new FormControl(this.user.name, Validators.required),
    gender: new FormControl(this.user.gender, Validators.required),
    date: new FormControl(this.user.date, Validators.required),
    age: new FormControl(this.user.age),
    contact: new FormGroup({
      phone: new FormControl(this.user.contact.phone, [
        Validators.required,
        Validators.pattern('^0[67][0-9]{8}$'),
      ]),
    }),
    email: new FormControl(this.user.email, [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(this.user.password, [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$'),
    ]),
    passwordRepeat: new FormControl(
      this.user.passwordRepeat,
      Validators.required
    ),
  });

  constructor() {
    let today = new Date();
    let maxDate = new Date(
      today.getFullYear() - 12,
      today.getMonth(),
      today.getDate()
    );
    this.maxDate = maxDate.toISOString().split('T')[0];

    this.userForm.controls.date.valueChanges.subscribe((value) => {
      if (value) {
        let selectedDate = value;
        let currentDate = new Date();
        let selected = new Date(selectedDate);
        let ageDiff = currentDate.getFullYear() - selected.getFullYear();
        if (
          currentDate.getMonth() < selected.getMonth() ||
          (currentDate.getMonth() === selected.getMonth() &&
            currentDate.getDate() < selected.getDate())
        ) {
          this.calculatedAge = ageDiff - 1;
        } else {
          this.calculatedAge = ageDiff;
        }
        this.userForm.controls.age.setValue(this.calculatedAge);
      }
    });
  }

  onSubmit() {
    alert("Congrats! You've submitted your user");
  }
}
