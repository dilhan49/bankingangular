import { Component, Input, OnInit } from '@angular/core';

export interface LightInfoInput {
  title?: string;
  amount?: number;
  styleClass?: 'bg-primary' | 'bg-success' | 'bg-danger' | 'bg-warning';
}

@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.scss']
})
export class LightInfoComponent implements OnInit {

  @Input() infoInput : LightInfoInput = {
    title: '',
    amount: 0,
    styleClass: 'bg-primary'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
