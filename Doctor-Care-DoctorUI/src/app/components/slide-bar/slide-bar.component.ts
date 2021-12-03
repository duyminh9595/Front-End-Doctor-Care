import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {
  appointmentshow: boolean = false;
  doctorshow: boolean = false;
  patientshow: boolean = false;
  paymentshow: boolean = false;

  nameDoctor!: string;
  imageUrl!: string;
  localStore: Storage = localStorage;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nameDoctor = localStorage.getItem('emailDoctorLogin')!
    console.log(this.nameDoctor);
    this.imageUrl = localStorage.getItem('doctorImageUrl')!;
    console.log(this.imageUrl)
    if (this.imageUrl.includes("undefined"))
      this.imageUrl = "https://hoannkd00368.files.wordpress.com/2016/11/links.jpg";
  }
  mouseHover(e: any) {

  }
  mouseOut(e: any) {

  }
  openAppointment() {
    this.appointmentshow = !this.appointmentshow;
  }
  openshowdoctor() {
    this.doctorshow = !this.doctorshow;
  }
  openshowpatient() {
    this.patientshow = !this.patientshow;
  }
  openshowPayment() {
    this.paymentshow = !this.paymentshow;
  }
  gotohome() {
    this.router.navigateByUrl('/');
  }
}