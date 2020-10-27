import { Component, OnInit } from '@angular/core';
import { Patient} from '../patient';
import { RegisterpatientService } from '../registerpatient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  
    patient:Patient=new Patient(1,"",30,"","");
    message:any;  
  
    constructor(private service:RegisterpatientService) { }
    ngOnInit(): void {
  }
  public registerNow(){
    let resp=this.service.doRegisterPatient(this.patient);
    resp.subscribe((data)=>this.message=data);
  }
}