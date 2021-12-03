import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ser: DashboardService, private router: Router) { }

  ngOnInit(): void {

  }
  checkToken() {
    this.ser.checkTokenPatient().subscribe({
      next: res => {

      },
      error: err => {
        this.doLogout();
      }
    })
  }
  local: Storage = localStorage;
  doLogout() {
    this.local.removeItem("emailAdminLogin")
    this.local.removeItem("tokenAdminLogin")
    this.local.removeItem("adminImageUrl")
    window.location.href = '/';
  }

}
