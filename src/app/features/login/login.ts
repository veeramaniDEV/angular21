
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink, 
        InputTextModule,
        CheckboxModule,
        ButtonModule
    ],
    templateUrl: './login.html'
})

export class Login {
    private readonly fb = inject(FormBuilder);
    private readonly router = inject(Router);

    readonly showPassword = signal(false);

    readonly loginForm = this.fb.nonNullable.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: [false]
    });

    get email() {
        return this.loginForm.controls.email;
    }

    get password() {
        return this.loginForm.controls.password;
    }

    togglePassword(): void {
        this.showPassword.update(value => !value);
    }

    login(): void {
        this.loginForm.markAllAsTouched();

        if (this.loginForm.invalid) {
            return;
        }

        // Demo navigation. Replace with authentication API call.
        void this.router.navigateByUrl('/app/dashboard');
    }
}
