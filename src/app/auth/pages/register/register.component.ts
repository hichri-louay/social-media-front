import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void { 
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });            
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      this._authService.signup(this.registerForm.value).subscribe(
        (res) => {
          this._toastr.success('Registration successful!', 'Success');
          this._authService.saveToken(res.data.token);
          this._router.navigateByUrl('/');
        },
        (err) => {
          this._toastr.error(err.error.message, 'Error');
        }
      );
    } else {
      this._toastr.warning('Please fill in all required fields.', 'Warning');
    }
  }


  navigateToLogin(): void { 
    this._router.navigateByUrl('/auth/login');
  }


}
