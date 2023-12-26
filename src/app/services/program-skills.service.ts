import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProgramSkillsService {
  constructor(private fb: FormBuilder) {}

  createProgSkillForm(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([]),
    });
  }

  addProgSkillControl(form: FormGroup): void {
    const skills = form.get('skills') as FormArray;
    skills.push(new FormControl(''));
  }

  getProgSkillsArray(form: FormGroup): FormArray {
    return form.get('skills') as FormArray;
  }
}
