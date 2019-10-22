import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AmplifyService
} from 'aws-amplify-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'Phone Number',
        key: 'phone_number',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'name',
        key: 'name',
        required: true,
        displayOrder: 4,
        type: 'string',
        custom: true
      },
      {
        label: 'user name',
        key: 'username',
        required: true,
        displayOrder: 5,
        type: 'string',
        custom: true
      }
    ]
  }

  constructor(public amplifyService: AmplifyService, public router: Router) {
    this.amplifyService = amplifyService;

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          this.router.navigate(['/dashboard']);
        }
      });

  }

  ngOnInit() {

  }

  login() {
      // this.loading = true;
      // this.authenticationService.login(this.model.username, this.model.password)
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             // this.alertService.error(error);
      //             this.loading = false;
      //         });
  }
}