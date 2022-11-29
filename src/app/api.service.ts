import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  passengerData =()=>{
    return this.http.get('https://api.instantwebtools.net/v1/passenger?page=0&size=30')
  }
  UsdataData = ()=>{
    return this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  }
}
