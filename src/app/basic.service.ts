import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  URL="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  constructor(private _http: HttpClient) { }

  getBrandList():Observable<any> {
    return this._http.get(this.URL);
  }
}
