import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  form: FormGroup; //non null assertion?
  submitted = false;
  constructor(private fb: FormBuilder, private service: UserServiceService) {}

  ngOnInit(){
    this.form = this.fb.group({
      username: [''],
      email: [''],
      pass_word: [''],
      reenter_password: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('pass_word')?.value;
    const reenterPassword = form.get('reenter_password')?.value;
    return password === reenterPassword ? null : { mismatch: true };
  }
  createPost() {
    this.submitted = true;
  if (this.form.valid && !this.form.errors?.['mismatch']) {
      const postData = {
        username: this.form.value.username,
        email: this.form.value.email,
        pass_word: this.form.value.pass_word
      };

      this.service.createPost(postData).subscribe(
        (response: any) => {
          console.log("Successful Post", response);
        },
        (error: any) => {
          console.error("Error posting", error);
        }
      );
    } else {
      console.error("Form is invalid");
    }
  }
  hasPasswordMismatchError() {
    return this.form.errors?.['mismatch'] && this.submitted;
  }
}

