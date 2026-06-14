import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
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
      next: async (data)=>{
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token);
        if (decodedToken.authorities[0].authority === 'ROLE_ADMIN'){
          await this.router.navigate(['admin/dashboard']);
        }else{
          await this.router.navigate(['user/dashboard']);
        }

      },
      error: (err)=>{
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    })
  }

}
