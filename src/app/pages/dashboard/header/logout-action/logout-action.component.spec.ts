import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutActionComponent } from './logout-action.component';
import { Router } from 'express';

describe('LogoutActionComponent', () => {
  let component: LogoutActionComponent;
  let fixture: ComponentFixture<LogoutActionComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutActionComponent],
      providers: [Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutActionComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should remove loggedin status and navigate to login page on logOut', () => {
    const removeItemSpy = spyOn(localStorage, 'removeItem').and.callThrough();
    const navigateSpy = spyOn(router, 'navigate' as never).and.stub();
    component.logOut();
    expect(removeItemSpy).toHaveBeenCalledWith('loggedin');
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
