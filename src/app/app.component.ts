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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted= false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue() 可以替 form 表單設定 value
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //   },
    //   email:  "",
    //   secret: 'pet',
    //   questionAnswer: "",
    //   gender: 'male'
    // })

    // .form.patchValue 可以只覆蓋特定 form 元素或是 form group 資料
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
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
    this.submitted= true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // .reset() 可以重設表單 可以傳遞 參數給預設值，方法同 setValue()
    this.signupForm.reset();
  }
}
