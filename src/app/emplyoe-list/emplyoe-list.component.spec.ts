import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeListComponent } from './emplyoe-list.component';

describe('EmplyoeListComponent', () => {
  let component: EmplyoeListComponent;
  let fixture: ComponentFixture<EmplyoeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyoeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
