import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import { ParseError } from '@angular/compiler';
import { parseJsonText } from 'typescript';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  form: FormGroup; //non null assertion?
  submitted = false;
  emailInUse = false;
  too_short_password = false;
  too_short_username = false;
  constructor(private fb: FormBuilder, private service: UserServiceService) {}

  ngOnInit(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      email: ['', Validators.required],
      pass_word: [''],
      reenter_password: ['']
    }, 
    
    { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('pass_word')?.value;
    const reenterPassword = form.get('reenter_password')?.value;
    return password === reenterPassword ? null : { mismatch: true };
  }
  createPost() {
    this.emailInUse = false;
    this.too_short_password = false;
    this.too_short_username = false;
    
    this.submitted = true;

    if(this.form.value.pass_word.length < 5){
      this.too_short_password = true;
    }

    if(this.form.value.username.length < 5){
      this.too_short_username = true;
    }


  if (this.form.valid && !this.form.errors?.['mismatch']) {
      const postData = {
        username: this.form.value.username,
        email: this.form.value.email,
        pass_word: this.form.value.pass_word
      };
      
      this.service.createPost(postData).subscribe(
        (response: any) => {
          console.log("Successful Post", response.message);
          
        },
        (error: any) => {
          console.log(JSON.stringify(error.error).length);
          const email_err = JSON.stringify(error.error).length;

          if(email_err == 51){
            console.log("please enter new email");
            this.emailInUse = true;
          }
          
        }
        
      );
    } else {
      console.error("Form is invalid");
    }
  }
  hasPasswordMismatchError() {
    return this.form.errors?.['mismatch'] && this.submitted;
  }
  email_inuse_alert() {
    return this.submitted && this.emailInUse;
  }
  pass_too_short(){
    return this.submitted && this.too_short_password;
  }
  username_too_short(){
    return this.submitted &&  this.too_short_username;
  }
}

