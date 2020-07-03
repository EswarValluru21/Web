import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  emailId: string = '';
  password: string = '';
  reEnterPassword: string = '';
  phoneNumber: string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'userName': [null, Validators.required],
      'emailId': [null, Validators.required],
      'password': [null, Validators.required],
      'reEnterPassword': [null, Validators.required],
      'phoneNumber': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postUser(form)
        .subscribe(res => {
          console.log('res', res);
          //const userName = res['userName'];
          this.router.navigate(['/login']);
        }, (err) => {
          console.log(err);
        });
  }

}
