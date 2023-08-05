import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {
  user = {name: ""};
  userForm = new FormGroup({
    name: new FormControl(this.user.name, Validators.required),
  });

  get name() { return this.userForm.get('name')!; }
}
