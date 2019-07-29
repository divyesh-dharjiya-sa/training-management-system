import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { TrainingListComponent } from './training-list/training-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TrainingComponent,
    AddTrainingComponent,
    TrainingListComponent,
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TrainingComponent,
    AddTrainingComponent,
    TrainingListComponent
  ]
})
export class TrainingModule { }
