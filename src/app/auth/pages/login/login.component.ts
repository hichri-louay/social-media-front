import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void { 
    this._authService.signup({email: 'test', password: 'test'}).subscribe((res) => {
      console.log('res : ', res);
    } , (err) => { });               
  }
}
