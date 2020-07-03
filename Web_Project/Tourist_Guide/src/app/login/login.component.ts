import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userName') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  user: any;
  userName: any;
  passWord: any;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  onFormSubmit(form: NgForm) {
    console.log('form:' , form);
    console.log('in form submit method');
    this.userName = this.username.nativeElement.value;
    console.log('username', this.username);
    this.passWord = this.password.nativeElement.value;
    console.log('password', this.passWord);
    this.api.getUser(this.userName)
        .subscribe(data => {
          console.log(data);
          this.user = data;
          if (data.userName.match(this.userName) === null && data.passWord.match(this.passWord) === null) {
            console.log('inside if');
          } else {
            console.log('in else');
            localStorage.setItem('name', this.userName);
            this.router.navigate(['/tourist']);
          }
        });
  }
}
