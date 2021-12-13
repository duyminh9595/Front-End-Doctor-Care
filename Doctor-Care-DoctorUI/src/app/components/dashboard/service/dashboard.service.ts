import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getDashboardTop() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenDoctorLogin')}`
    });
    return this.httpClient.get<any>(this.APIEndPoint + "/doctor/core/dashboard", {
      headers: yourHeader,
    });
  }
}
