import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatherAndSonComponent } from './pather-and-son.component';

describe('PatherAndSonComponent', () => {
  let component: PatherAndSonComponent;
  let fixture: ComponentFixture<PatherAndSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatherAndSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatherAndSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
