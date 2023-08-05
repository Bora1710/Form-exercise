import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  genderOptions = ['','Male', 'Female', 'Other']
  user = { name: '', gender:  this.genderOptions[0]};
  userForm = new FormGroup({
    name: new FormControl(this.user.name, Validators.required),
    gender: new FormControl(this.user.gender, Validators.required)
  });

  get name() {
    return this.userForm.get('name')!;
  }
  
  get gender() {
    return this.userForm.get('gender')!;
  }
}
