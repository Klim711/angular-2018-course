import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponent } from './user-panel.component';
import { User } from '../user.interface';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  template: `<app-user-panel [user]="user"></app-user-panel>`
})
class TestHostComponent {
  public user: User = {
    firstName: 'name1',
    password: 'password',
    lastName: 'name2',
    email: 'email',
    token: 123,
  };
}

describe('UserPanelComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelComponent, TestHostComponent ],
      providers: [AuthService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    authService = TestBed.get(AuthService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should display user name', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const spanDebugElement = debugElement.query(By.css('span'));
    const span = spanDebugElement.nativeElement;
    const user = testHost.user;

    expect(span.textContent).toBe(`${user.firstName} ${user.lastName}`);
  });

  describe('on button click', () => {
    let button: DebugElement;

    beforeEach(() => {
      spyOn(window, 'alert');
      spyOn(authService, 'logOut');

      button = fixture.debugElement.query(By.css('button'));
    });

    it('should logOff on button click', () => {
      button.triggerEventHandler('click', null);

      expect(window.alert).toHaveBeenCalledWith('You are logged off');
    });

    it('should log out current user', () => {
      button.triggerEventHandler('click', null);

      expect(authService.logOut).toHaveBeenCalled();
    });
  });
});
