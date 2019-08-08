import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private trainingUrl = 'http://localhost:4000/training';
  private joinTrainingUrl = 'http://localhost:4000/jointraining';

  constructor(private http: HttpClient) {
  }

  createTraining(training: Training) {
    this.http.post(this.trainingUrl, training).subscribe(res => {
      console.log(res);
    });
  }

  joinTrainingByUser(trainingData: any) {
     return this.http.post(this.joinTrainingUrl , {trainingdata: trainingData});
  }

  removeUserFromJoin(trainingData: any) {
    console.log(trainingData);
    return this.http.delete(this.joinTrainingUrl + '/' + trainingData);
  }

  getAllUserJoin() {
    return this.http.get(this.joinTrainingUrl);
  }

  updateTraining(training: any) {
    this.http.put(this.trainingUrl, training).subscribe(res => {
    });
  }

  displayTrainings() {
    return this.http.get<any>(this.trainingUrl);
  }

  // joinTraining(joinTraining: any) {
  //     return this.http.post<any>(this.trainingJoinUrl , {joinTraining});
  // }
}
