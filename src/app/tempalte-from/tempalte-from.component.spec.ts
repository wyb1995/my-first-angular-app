import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteFromComponent } from './tempalte-from.component';

describe('TempalteFromComponent', () => {
  let component: TempalteFromComponent;
  let fixture: ComponentFixture<TempalteFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempalteFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalteFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
