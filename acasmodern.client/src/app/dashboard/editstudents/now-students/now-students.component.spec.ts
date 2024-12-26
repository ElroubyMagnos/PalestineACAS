import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowStudentsComponent } from './now-students.component';

describe('NowStudentsComponent', () => {
  let component: NowStudentsComponent;
  let fixture: ComponentFixture<NowStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
