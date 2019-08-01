import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  createTrainingForm: FormGroup;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.createTrainingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      startDateTime: new FormControl('', Validators.required),
      endDateTime: new FormControl('', Validators.required),
      upload: new FormControl('', Validators.required),
      attendQuery: new FormControl(true, Validators.required)
    });
  }

  onSubmit() {
    this.trainingService.createTraining(this.createTrainingForm.value);
    this.createTrainingForm.reset();
  }
}
