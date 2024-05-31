import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';
  emailId: string;
  password: string;
  signInForm:FormGroup;
  loginForm: FormGroup;

  poolData = {
    UserPoolId: 'ap-south-1_HL6eTJAYa', // Your user pool id here
    ClientId: '60r6lfs814evq5h9h5io079duk' // Your client id here
  };
  userPool = new CognitoUserPool(this.poolData);
  
  signUp(signinForm: any) {
    this.userPool.signUp(
      signinForm.value.emailId,
      signinForm.value.password,
      [],
      [],
      (err:any, result:any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
      }
    );
  }

  login(loginForm: any) {
    var authenticationData = {
      Username: loginForm.value.emailId,
      Password: loginForm.value.password,
    };
    var authenticationDetails = new AuthenticationDetails(
      authenticationData
    );
    
    var userPool = new CognitoUserPool(this.poolData);
    var userData = {
      Username: loginForm.value.emailId,
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        alert('login Successfully !')
      },
    
      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  }
}
