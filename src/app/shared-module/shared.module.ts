import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
