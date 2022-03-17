import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksDataService {
  Baseurl=" https://vast-shore-74260.herokuapp.com/banks?city=";
  Url:any;

  constructor(private http:HttpClient) { }

  selectBank(slectedCityparameter:string)
  {

  this.Url=this.Baseurl.concat(slectedCityparameter);
  return this.http.get(this.Url);

  }

}
