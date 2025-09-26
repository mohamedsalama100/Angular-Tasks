import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  FormGroup
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-component.html'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        fullName: this.fb.control<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(5)]
        }),
        email: this.fb.control<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.email]
        }),
        mobiles: this.fb.array<FormControl<string>>([
          this.fb.control<string>('', {
            nonNullable: true,
            validators: [Validators.required]
          })
        ]),
        password: this.fb.control<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)]
        }),
        confirmPassword: this.fb.control<string>('', {
          nonNullable: true,
          validators: [Validators.required]
        })
      },
      {
        validators: (group) => {
          const pass = group.get('password')?.value;
          const confirm = group.get('confirmPassword')?.value;
          return pass === confirm ? null : { passwordMismatch: true };
        }
      }
    );
  }

  // ✅ Getter for mobiles
  get mobiles() {
    return this.registerForm.get('mobiles') as FormArray<FormControl<string>>;
  }

  addMobile() {
    this.mobiles.push(
      this.fb.control<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    );
  }

  removeMobile(i: number) {
    if (i > 0) this.mobiles.removeAt(i);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submitted = this.registerForm.getRawValue();
      console.log('✅ Registered:', this.submitted);

      this.registerForm.reset();
      this.mobiles.clear();
      this.addMobile();
    }
  }
}
