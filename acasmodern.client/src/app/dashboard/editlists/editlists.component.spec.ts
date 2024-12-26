import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistsComponent } from './editlists.component';

describe('EditlistsComponent', () => {
  let component: EditlistsComponent;
  let fixture: ComponentFixture<EditlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditlistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
