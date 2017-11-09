import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LandingComponent,
    EnrollFormComponent,
  ],
  exports:[
    LandingComponent,
  ]
})
export class PageModule { }