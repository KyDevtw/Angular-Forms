import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // 單純使用 HTML 操控表單
  // onSubmit(form: HTMLFormElement) {
  //   console.log(form.value)
  // }

  // 透過 ngFrom 操控表單
  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }

  // 透過 @ViewChild reference 操控表單
  onSubmit() {
    console.log(this.signupForm)
  }
}
