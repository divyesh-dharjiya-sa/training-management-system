import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainings: any[] = [];
  joinTrainings: any = [];
  // attend = true;
  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.getTraining();
    this.getJoinTraining();
  }

  getTraining() {
    this.trainingService.displayTrainings().subscribe(res => {
      console.log(res);
      this.trainings = res;
    });
  }

  getJoinTraining() {
    this.trainingService.getAllUserJoin().subscribe(
      res => {
        this.joinTrainings = res;
        console.log(this.joinTrainings);
      });
  }

  attendTraining(training: any) {
    training.attendQuery = !training.attendQuery;
    this.trainingService.updateTraining(training);
    // console.log(training);
    debugger;
    if (!training.attendQuery) {
      this.trainingService.joinTrainingByUser({trainingId: training._id , userId: localStorage.getItem('userId') , attendQuery: training.attendQuery})
        .subscribe(res => {
          this.joinTrainings = res;
        });
    } else {
      this.trainingService.removeUserFromJoin(this.joinTrainings['_id'])
        .subscribe(res => {
          // console.log(res);
        });
    }
    // this.attend = !this.attend;
  }
}
