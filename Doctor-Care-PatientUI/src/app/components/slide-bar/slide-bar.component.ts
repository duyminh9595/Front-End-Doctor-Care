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
  namePatient!: string;
  imageUrl!: string;
  localStore: Storage = localStorage;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.namePatient = localStorage.getItem('emailPatientLogin')!
    console.log(this.namePatient);
    this.imageUrl = localStorage.getItem('patientImageUrl')!;
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
  local: Storage = localStorage;
  doLogout() {
    this.local.removeItem("emailAdminLogin")
    this.local.removeItem("tokenAdminLogin")
    this.local.removeItem("adminImageUrl")
    window.location.href = '/';
  }
}
