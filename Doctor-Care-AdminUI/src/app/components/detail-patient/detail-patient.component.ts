import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.detailPatient());
  }
  detailPatient() {
    let checkidpatientexist = this.activeRoute.snapshot.paramMap.has('id');
    if (checkidpatientexist) {
      let idpatient = this.activeRoute.snapshot.paramMap.get('id')!;
    }
    else {
      this.router.navigateByUrl('list-patients');
    }
  }

}
