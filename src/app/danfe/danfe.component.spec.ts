import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanfeComponent } from './danfe.component';

describe('DanfeComponent', () => {
  let component: DanfeComponent;
  let fixture: ComponentFixture<DanfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
