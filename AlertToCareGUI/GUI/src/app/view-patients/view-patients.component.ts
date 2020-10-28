import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  patients:Observable<Patient[]>; 

  constructor(private patientService:PatientService,
    private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.patients=this.patientService.getPatientsList();
  }

  

}