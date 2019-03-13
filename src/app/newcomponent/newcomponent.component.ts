import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MaxLengthValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

    profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      phoneno: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('', Validators.required)
      }),
  });

  constructor() { }
get f() { return this.profileForm.controls; }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.patchValue({
    });
  }
  ngOnInit() {

  }
}

