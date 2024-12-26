import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadsOfStudentsComponent } from './dads-of-students.component';

describe('DadsOfStudentsComponent', () => {
  let component: DadsOfStudentsComponent;
  let fixture: ComponentFixture<DadsOfStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadsOfStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadsOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
