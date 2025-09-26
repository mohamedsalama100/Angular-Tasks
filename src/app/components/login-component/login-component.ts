import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-component.html'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.group({
    username: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
    password: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] })
  });

  errorMsg: string | null = null;

  async onSubmit() {
    this.errorMsg = null;
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.getRawValue();

    try {
      const res = await this.auth.login(username, password);
      const token = (res as any)?.token;

      if (token) {
        this.auth.saveToken(token);
        await this.router.navigate(['/products']);
      } else {
        this.errorMsg = 'Login failed: no token';
      }
    } catch (err: any) {
      this.errorMsg = err?.error?.message || err?.message || 'Login error';
    }
  }
}
