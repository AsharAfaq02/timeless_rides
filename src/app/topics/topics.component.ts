import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit{

form_search: FormGroup;
form_validator: boolean;
submitted_validator: boolean;
 year: string;
 make: string;
 model: string;
chatGPT_response: string;
car_wiki_data: string;

constructor(private fb: FormBuilder, private service: UserServiceService){}
ngOnInit(){
  this.form_search = this.fb.group({
  year: ['', Validators.required],
  make: ['',  Validators.required],
  model: ['',  Validators.required]
  })
}
 markdownToHtml(input: string): string {
  let html = input.replace(/\\n/g, '');
  html = html.replace(/\*\*(.*?)\*\*/g, '');
  html = html.replace(/[\\/]/g, '');
  html = html.replace(/"/g, '')
  return html;
}
searchCarSubmit(){
   setTimeout(() => {
        // Reset flag after submission
      }, 500);
  if (this.form_search.valid) { 
    this.year =  this.form_search.value.year;
    this.make = this.form_search.value.make;
    this.model = this.form_search.value.model;
    this.form_validator = false;
    this.submitted_validator = true;

    this.service.searchCar(this.form_search.value).subscribe(
    (response: any) => {
    // const html_string = this.markdownToHtml(JSON.stringify(response.message));
    // this.chatGPT_response = html_string
    console.log(response)
    console.log("Successful Post");        
    },
    (error: any) => { 
    console.log(JSON.stringify(error.error));
      });

    this.service.getCar_wiki().subscribe(
      (response: string) => {
        this.car_wiki_data = response;
        console.log("successfully retrieved Wiki page")
        console.log(response)
        this.car_wiki_data = response;

      },
      (error) =>
        console.error("error fetching data", error)
    )
    this.form_search.reset()
  }
  else{
    this.form_validator = true;
    this.submitted_validator = false;
  }
}

invalidForm(){
  return this.form_validator;
}
submitted(){
  return this.submitted_validator;
}
}

