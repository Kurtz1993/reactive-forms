import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { User } from 'models';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  form: FormGroup;

  get applicants() {
    return (this.form.get('applicants') as FormArray)
      .controls;
  }

  constructor() {
    this.form = new FormGroup({
      applicants: new FormArray([])
    });
  }

  addNewForm(): void {
    (this.form.get('applicants') as FormArray)
      .push(this.createFormGroup());
  }

  onSubmit(): void {
    console.log('Submit: ', this.form.value);
  }

  onRemove({ applicant, index }: { applicant: User, index: number }): void {
    const control = this.form.get('applicants') as FormArray;

    control.removeAt(index);
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      occupation: new FormControl(''),
      addressLine: new FormControl('')
    });
  }
}