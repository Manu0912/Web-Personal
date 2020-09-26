import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesComponent } from './tecnologies.component';

describe('TecnologiesComponent', () => {
  let component: TecnologiesComponent;
  let fixture: ComponentFixture<TecnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
