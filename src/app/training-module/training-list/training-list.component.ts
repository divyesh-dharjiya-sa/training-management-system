import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {Training} from '../../models/training.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainings: any[] = [];

  // attend = true;
  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.getTraining();
  }

  getTraining() {
    this.trainingService.displayTrainings().subscribe(res => {
      console.log(res);
      this.trainings = res;
    });
  }

  attendTraining(training: Training) {
    training.attendQuery = !training.attendQuery;
    this.trainingService.updateTraining(training);

    console.log(training);
    // this.attend = !this.attend;
  }
}
