import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingComponent} from './training/training.component';
import {AddTrainingComponent} from './add-training/add-training.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {path: '' , component: TrainingComponent , canActivate: [AuthGuard]},
  {path: 'add-training' , component: AddTrainingComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
