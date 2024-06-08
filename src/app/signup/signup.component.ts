import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../shared/data.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup;


   signup_username: string = '';
   signup_email: string = '';
   signup_password: string = '';
   signup_reenter_password: string = '';

   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      signup_username: [''],
      signup_email: [''],
      signup_password: [''],
      signup_reenter_password: ['']
    });
  }

  onSubmit() {
    // Update the TypeScript variables with form values
    this.signup_username = this.form.get('signup_username')?.value;
    this.signup_email = this.form.get('signup_email')?.value;
    this.signup_password = this.form.get('signup_password')?.value;
    this.signup_reenter_password = this.form.get('signup_reenter_password')?.value;
    
  }
}