import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoMedicine } from 'src/app/models/info-medicine';
import { ListPatientsService } from '../list-patients/service/list-patients.service';
import { ModalAddNewTypeMedicineComponent } from '../modal-add-new-type-medicine/modal-add-new-type-medicine.component';
import { ListMedicinesService } from './service/list-medicines.service';

@Component({
  selector: 'app-list-medicines',
  templateUrl: './list-medicines.component.html',
  styleUrls: ['./list-medicines.component.css']
})
export class ListMedicinesComponent implements OnInit {

  constructor(public dialog: MatDialog, private ser: ListMedicinesService) { }
  datas: InfoMedicine[] = [];
  ngOnInit(): void {
    this.ser.getMedicineByName().subscribe(this.getDatas());
  }
  getDatas() {
    return (data: any) => {
      this.datas = data;
    }
  }
  popUpModalAddNewMedicine() {
    console.log("DO")
    const dialogRef = this.dialog.open(ModalAddNewTypeMedicineComponent, {
      width: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
