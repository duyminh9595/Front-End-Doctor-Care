import { Component, OnInit } from '@angular/core';
import { PastApointment } from 'src/app/models/past-apointment';
import { PastApointmentService } from './service/past-apointment.service';

@Component({
  selector: 'app-past-apointment',
  templateUrl: './past-apointment.component.html',
  styleUrls: ['./past-apointment.component.css']
})
export class PastApointmentComponent implements OnInit {

  constructor(private ser: PastApointmentService) { }

  ngOnInit(): void {
    this.getResponse();
  }
  getResponse() {
    this.ser.getPastAppointments().subscribe(this.getDatas())
  }
  data: PastApointment[] = []
  getDatas() {
    return (data: any) => {
      console.log(data)
      this.data = data;
    }
  }
}
