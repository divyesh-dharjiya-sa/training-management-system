import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private trainingUrl = 'http://localhost:4000/training';

  constructor(private http: HttpClient) {
  }

  createTraining(training: Training) {
    this.http.post(this.trainingUrl, training).subscribe(res => {
      console.log(res);
    });
  }

  displayTrainings() {
    return this.http.get<any>(this.trainingUrl);
  }
}
