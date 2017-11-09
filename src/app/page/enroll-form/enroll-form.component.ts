import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { User } from 'models';

@Component({
  selector: 'enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.scss']
})
export class EnrollFormComponent {
  @Input()
  parentForm: FormGroup;

  @Output()
  removed = new EventEmitter<any>();

  get applicants() {
    return (this.parentForm.get('applicants') as FormArray)
      .controls;
  }

  removeForm(applicant: User, index: number): void {
    this.removed.emit({ applicant, index });
  }
}