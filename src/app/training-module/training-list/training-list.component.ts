import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training.service';
import {Training} from '../../models/training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainings: Training[] = [];
  // attend = true;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.getTraining();
  }

  getTraining() {
     this.trainingService.displayTrainings().subscribe(res => {
       console.log(res);
       this.trainings = res;
       // tslint:disable-next-line:prefer-for-of
       for (let i = 0; i < this.trainings.length; i++) {
         this.trainings[i].attendQuery = true;
       }
    });
  }
  attendTraining(training) {
    training.attendQuery = !training.attendQuery;
    console.log(training);
    if (!training.attendQuery) {
      this.trainingService.createTraining(training.attendQuery);
    }
    // this.attend = !this.attend;
  }
}
