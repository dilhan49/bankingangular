import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest={};
  errorMessages: Array<string>=[];


  constructor(
    private router: Router,
    private authServ: AuthenticationService
  ) {

  }

  ngOnInit(): void {
  }

  async register(){
    await this.router.navigate(['/register']);
  }
  login(){
    this.errorMessages = [];
    this.authServ.authenticate({body: this.authenticationRequest}).subscribe({
      next: (data)=>{
        localStorage.setItem('token', data.token as string);
      },
      error: (err)=>{
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    })
  }

}
