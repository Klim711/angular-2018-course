import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelComponent } from './user-panel.component';
import { UserEntity } from './../user-entity';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `<app-user-panel [user]="user"></app-user-panel>`
})
class TestHostComponent {
  public user: UserEntity = {
    id: 1,
    firstName: 'name1',
    lastName: 'name2',
  };
}

describe('UserPanelComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelComponent, TestHostComponent ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

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

  it('should logOff on button click', () => {
    spyOn(window, 'alert');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(window.alert).toHaveBeenCalledWith('You are logged off');
  });
});
