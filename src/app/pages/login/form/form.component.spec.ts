import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import User from '../../../models/user.model';
import users from '../../../data/users.data';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields', () => {
    expect(component.formData.get('email')?.value).toEqual('');
    expect(component.formData.get('password')?.value).toEqual('');
  });

  it('should require email and password fields', () => {
    const emailControl = component.formData.get('email');
    const passwordControl = component.formData.get('password');

    expect(emailControl?.errors?.['required']).toBeTruthy();
    expect(passwordControl?.errors?.['required']).toBeTruthy();

    emailControl?.setValue('test@example.com');
    passwordControl?.setValue('password123');

    expect(emailControl?.valid).toBeTruthy();
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should log in user if credentials are correct', () => {
    const testUser: User = {
      email: 'test@example.com',
      password: 'password123',
    };
    spyOn(localStorage, 'setItem');
    spyOn(users, 'find').and.returnValue(testUser);

    component.formData.patchValue({
      email: 'test@example.com',
      password: 'password123',
    });
    component.logIn();

    expect(localStorage.setItem).toHaveBeenCalledWith('loggedin', ' ');
  });

  it('should show error message if credentials are incorrect', () => {
    spyOn(window, 'alert');
    spyOn(users, 'find').and.returnValue(undefined);

    component.formData.patchValue({
      email: 'test@example.com',
      password: 'wrongpassword',
    });
    component.logIn();

    expect(window.alert).toHaveBeenCalledWith('Email or password is incorrect');
  });
});
