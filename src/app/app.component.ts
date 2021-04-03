import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordChecker } from './custome-validators/password-checker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        tnc: [false, Validators.requiredTrue]
      },
      {
        validators: passwordChecker('password', 'confirmPassword')
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert("Signup Success");
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
