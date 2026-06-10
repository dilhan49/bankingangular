import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  urlParam = 'Not yet defined';
  queryParams = 'Not yet defined';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.urlParam = this.activatedRoute.snapshot.params['someText'] ?? 'Not yet defined';
    this.queryParams = this.activatedRoute.snapshot.queryParams['x'] ?? 'Not yet defined';
  }

  ngOnInit(): void {
  }

  async register(){
    await this.router.navigate(['/register']);
  }

}
