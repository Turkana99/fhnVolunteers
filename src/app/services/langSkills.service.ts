// skill-form.service.ts
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LangSkillsService {
  constructor(private fb: FormBuilder) {}

  createLangSkillForm(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([]),
    });
  }

  addLangSkillControl(form: FormGroup): void {
    const skills = form.get('skills') as FormArray;
    skills.push(new FormControl(''));
  }

  getLangSkillsArray(form: FormGroup): FormArray {
    return form.get('skills') as FormArray;
  }
}
