import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAppComponent } from './to-do-list.component';

describe('ToDoAppComponent', () => {
  let component: ToDoAppComponent;
  let fixture: ComponentFixture<ToDoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoAppComponent],
    });
    fixture = TestBed.createComponent(ToDoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
