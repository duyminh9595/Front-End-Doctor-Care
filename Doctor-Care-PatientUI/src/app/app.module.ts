import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatFormFieldModule
} from '@angular/material/form-field';

import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatTabsModule
} from '@angular/material/tabs';
import { MatOptionModule } from '@angular/material/core';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HompageComponent } from './components/hompage/hompage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyJwt } from './auth/verify-jwt.service';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/compat/storage";

import { HttpClientModule } from '@angular/common/http';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddAppointmentLayoutComponent } from './components/add-appointment-layout/add-appointment-layout.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { ModalModule } from 'ngb-modal';
import { ModalAddApointmentsComponent } from './components/modal-add-apointments/modal-add-apointments.component';
import { PastApointmentComponent } from './components/past-apointment/past-apointment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: HompageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add-appointment', component: AddAppointmentComponent },
      { path: 'add-appointment-layout', component: AddAppointmentLayoutComponent },
      { path: 'view-appointment', component: ViewAppointmentComponent },
      { path: 'past-appointment', component: PastApointmentComponent },
    ]
    , canActivate: [VerifyJwt],

  },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, DashboardComponent, HompageComponent,
    HeaderComponent, SlideBarComponent, AddAppointmentComponent,
    AddAppointmentLayoutComponent, ViewAppointmentComponent, ModalAddApointmentsComponent, PastApointmentComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule, FormsModule,
    ReactiveFormsModule, MatMenuModule,
    NgbModule, PerfectScrollbarModule, MatDatepickerModule, MatOptionModule, MatNativeDateModule, BrowserAnimationsModule, MatSelectModule, MatPaginatorModule, MatTableModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCygO7o54HwNq4eobN4848Xnaw_nuQgwck",
      authDomain: "newsproject-fa5bb.firebaseapp.com",
      projectId: "newsproject-fa5bb",
      storageBucket: "newsproject-fa5bb.appspot.com",
      messagingSenderId: "1053553302212",
      appId: "1:1053553302212:web:5ca79d1dd45c389ca28791",
      measurementId: "G-6Q30DEJELJ"
    }),
    HttpClientModule, MatTabsModule, MatDialogModule, ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }
