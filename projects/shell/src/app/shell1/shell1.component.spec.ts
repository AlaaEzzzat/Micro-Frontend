import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shell1Component } from './shell1.component';

describe('Shell1Component', () => {
  let component: Shell1Component;
  let fixture: ComponentFixture<Shell1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shell1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shell1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
