import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup; //non null assertion?
  submitted = false;
  emailInUse = false;
  too_short_password = false;
  too_short_username = false;
  success_signup = false;
  form_login: FormGroup;
  user_notFound = false;
  login_submitted = false;
  success_login = false;

  constructor(private fb: FormBuilder, private service: UserServiceService, private router: Router) { }

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      pass_word: [''],
      reenter_password: ['']
    },

      { validator: this.passwordMatchValidator },
    );

    this.form_login = this.fb.group({
      login_email: [''],
      login_password: ['']
    },);

  }

  onUsernameInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    const newValue = currentValue.replace(/\s/g, '_'); // Replace spaces with underscores
    this.form.get('username')?.patchValue(newValue); // Update the form control value
  }

  onPassInput(event: Event, controller: any) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    const newValue = currentValue.replace(/\s/g, '_'); // Replace spaces with underscores
    this.form.get(controller)?.patchValue(newValue); // Update the form control value
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('pass_word')?.value;
    const reenterPassword = form.get('reenter_password')?.value;
    return password === reenterPassword ? null : { mismatch: true };
  }

  createPost() {
    this.emailInUse = false;
    this.submitted = true;

  if (this.form.valid && !this.form.errors?.['mismatch']) {

  const postData = {
  username: this.form.value.username,
  email: this.form.value.email,
  pass_word: this.form.value.pass_word
  };

  this.service.createPost(postData).subscribe(
  (response: any) => {
  console.log("Successful Post", response.message);
  this.success_signup = true;
      //session storage
  localStorage.setItem('login', this.form.value.email);
  localStorage.setItem('isLoggedin', 'true')
  window.location.reload();

  },
  (error: any) => {
  console.log(JSON.stringify(error.error));
  const email_err = JSON.stringify(error.error).length;
  this.success_signup = false;

  if (email_err == 26) {
    console.log("please enter new email");
    this.emailInUse = true;
  }});}

    else {
      console.error("Form is invalid");
    }
  }

  hasPasswordMismatchError() {
    return this.form.errors?.['mismatch'] && this.submitted;
  }

  email_inuse_alert() {
    return this.submitted && this.emailInUse;
  }

  pass_too_short() {
    if (this.form.value.pass_word.length < 7 && this.form.value.pass_word.length != 0) {
      this.too_short_password = true;
    } else {
      this.too_short_password = false;
    }
    return this.too_short_password;
  }

  username_short_alert() {
    if (this.form.value.username.length < 7 && this.form.value.username.length != 0) {
      this.too_short_username = true;
    } else {
      this.too_short_username = false;
    }
    return this.too_short_username;
  }

  signup_success() {
    return this.success_signup && this.submitted
  }

  login_submit() {
    this.login_submitted = true;
    this.user_notFound = false;
    //session storage
    localStorage.setItem('login', this.form_login.value.login_email);
    localStorage.setItem('isLoggedin', 'true')
    const login_post = {
    email: this.form_login.value.login_email,
    pass_word: this.form_login.value.login_password
    };

    this.service.login_submit(login_post).subscribe(
    (response: any) => {
    console.log("Successful Post", response.message);
    this.success_login = true;
        //reset window if login successful
    window.location.reload();
    },
    (error: any) => {
    this.success_login = false;
    console.log(JSON.stringify(error.error).length);
    const err_login = JSON.stringify(error.error).length;
    this.user_notFound = true
      }); }

  alert_user_notFound() {
    return this.user_notFound && this.login_submitted;
  }
  login_success() {
    return this.success_login && this.login_submitted;
  }
}
