import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.router.navigate(['/admin']);
    }
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email
      ])),
      password: new FormControl('', Validators.required)
    });

  }

  signIn(loginForm) {
    if (loginForm.valid) {
      this.auth.signIn(loginForm.value)
        .subscribe(res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/admin']);
        },
          err => console.log(err)
        )
      loginForm.reset();
    }
  }

}
