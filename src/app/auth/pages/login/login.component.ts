import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void { 
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });            
  }


  onSubmit(): void {
    console.log({loginForm: this.loginForm})
    if (this.loginForm.valid) {
      this._authService.signin(this.loginForm.value).subscribe(
        (res) => {
          this._authService.saveToken(res.data.token);
          this._toastr.success('Login successful!', 'Success');
          this._router.navigateByUrl('/');
        },
        (err) => {
          console.log({err})
          this._toastr.error(err.error.message, 'Error');
        }
      );
    } else {
      this._toastr.warning('Please fill in all required fields.', 'Warning');
    }
  }
}
