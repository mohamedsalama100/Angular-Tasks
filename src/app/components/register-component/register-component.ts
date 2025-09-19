import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {
registerForm: FormGroup;
  submittedUser: any = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
          ],
        ],
        mobiles: this.fb.array([
          this.fb.control('', [
            Validators.required,
            Validators.pattern(/^01[0-9]{9}$/),
          ]),
        ]),
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get mobiles(): FormArray {
    return this.registerForm.get('mobiles') as FormArray;
  }

  addMobile() {
    this.mobiles.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern(/^01[0-9]{9}$/),
      ])
    );
  }

  removeMobile(index: number) {
    if (index > 0) this.mobiles.removeAt(index);
  }

  passwordMatchValidator(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submittedUser = this.registerForm.value;
      this.registerForm.reset();
      this.mobiles.clear();
      this.addMobile();
    }
  }

  onReset() {
    this.registerForm.reset();
    this.mobiles.clear();
    this.addMobile();
    this.submittedUser = null;
  }
}
