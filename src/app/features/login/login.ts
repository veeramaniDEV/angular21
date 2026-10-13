import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({selector:'app-login',standalone:true,imports:[ReactiveFormsModule,RouterLink],templateUrl:'./login.html',styleUrl:'./login.css'})
export class Login {
 private readonly fb=inject(FormBuilder); private readonly router=inject(Router);
 readonly showPassword=signal(false);readonly rememberMe=signal(false);
 readonly loginForm=this.fb.nonNullable.group({email:['',[Validators.required,Validators.email]],password:['',Validators.required]});
 get email(){return this.loginForm.controls.email}get password(){return this.loginForm.controls.password}
 login(){this.loginForm.markAllAsTouched();if(this.loginForm.invalid)return; // UI demo only: replace with successful authentication API response.
 void this.router.navigateByUrl('/app/dashboard')}
}
