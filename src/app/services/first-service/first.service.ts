import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TransactionDto } from './transaction-dto';

@Injectable()
export class FirstService {

  rootUrl = 'http://localhost:8080';

  constructor(
    private httpClient: HttpClient
  ) { }

  findAllTransactions(): Observable<any>{
    let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYXMuZGlsaGFuNDlAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJEaWxoYW4gQkFTIiwiZXhwIjoxNzgyMDc5NzcyLCJ1c2VySWQiOjIsImlhdCI6MTc4MTM1OTc3MiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XX0.KvIheQ7LZmCkJjzfzKTqzNlUYGCfjfEm8r4MdTiEfvQ');
    const request = new HttpRequest<any>(
      'GET',
      this.rootUrl + '/transactions/',
      {
        headers: _headers,
        params: null,
        responseType: 'json'
      }
    );
    return this.httpClient.request(request).pipe(
      filter(r => r instanceof HttpResponse),
      map(res => res as any)
    );
  }

  findAllTransactionsV2(): Observable<TransactionDto[]>{
     let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYXMuZGlsaGFuNDlAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJEaWxoYW4gQkFTIiwiZXhwIjoxNzgyMDc5NzcyLCJ1c2VySWQiOjIsImlhdCI6MTc4MTM1OTc3MiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XX0.KvIheQ7LZmCkJjzfzKTqzNlUYGCfjfEm8r4MdTiEfvQ');
    return this.httpClient.get(
      this.rootUrl + '/transactions/',
      {
        headers: _headers
      }
    ).pipe(
      filter(r=>r instanceof HttpResponse),
      map(res=>(res as HttpResponse<TransactionDto>).body as Array<TransactionDto>)
    )
  }

}
