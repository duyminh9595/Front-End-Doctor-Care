import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodayAppointment } from 'src/app/models/today-appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentService {
  readonly APIEndPoint = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getTodayAppointments() {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.get<GetResponseTodayAppointment>(this.APIEndPoint + "/patient/core/todayappointment", {
      headers: yourHeader,
    });
  }
  huyAppointment(id: number) {
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `${localStorage.getItem('tokenPatientLogin')}`
    });
    return this.httpClient.post<any>(this.APIEndPoint + "/patient/core/huyappointment?id=" + id, null, {
      headers: yourHeader,
    });
  }
}
interface GetResponseTodayAppointment {
  todayappointment: TodayAppointment[];
}