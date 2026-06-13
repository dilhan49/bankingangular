import { Component, OnInit } from '@angular/core';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';
import { FirstService } from 'src/app/services/first-service/first.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<LightInfoInput>=[];

  constructor(
    private firstService: FirstService
  ) { }

  ngOnInit(): void {
    this.initializeAccountInfo();
    this.firstService.findAllTransactionsV2().subscribe({
      next: (data)=>{
        console.log(data);

      }
    });
  }

  private initializeAccountInfo(){
    this.accountInfoList = [
      {
        title: 'Account Balance',
        amount: 1234.56,
        styleClass: 'bg-primary'
      },
      {
        title: 'Highest transfer',
        amount: 5678.90,
        styleClass: 'bg-success'
      },
      {
        title: 'Highest deposit',
        amount: 2345.67,
        styleClass: 'bg-danger'
      }
    ];;
  }

}
