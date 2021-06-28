import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PatientModel} from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientUrl = 'http://localhost:3000/patients';

  public allPatients: PatientModel[] = [];

  constructor(private http: HttpClient) { }

  public getPatientsServ():Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(`${this.patientUrl}`);
  }
}
