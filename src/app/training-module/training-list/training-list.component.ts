import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainings: any;
  attend = true;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.getTraining();
  }

  getTraining() {
     this.trainingService.displayTrainings().subscribe(res => {
       console.log(res);
       this.trainings = res;
    });
  }
  attendTraining() {
    this.attend = !this.attend;
  }
}
