import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import users from '../../../data/users.data';
import User from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public formData: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public logIn = (): void => {
    // Find a user with matching email and password
    const user: User | undefined = users.find(
      (user) =>
        user.email === this.formData.value.email &&
        user.password === this.formData.value.password
    );
    // If user is found, mark as logged in and navigate to home page
    if (user) {
      localStorage.setItem('loggedin', ' ');
      this.router.navigate(['/']);
      return;
    }
    // If no matching user is found, show an error message
    alert('Email or password is incorrect');
  };
}
