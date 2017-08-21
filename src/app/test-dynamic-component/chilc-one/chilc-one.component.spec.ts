import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilcOneComponent } from './chilc-one.component';

describe('ChilcOneComponent', () => {
  let component: ChilcOneComponent;
  let fixture: ComponentFixture<ChilcOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilcOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilcOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
