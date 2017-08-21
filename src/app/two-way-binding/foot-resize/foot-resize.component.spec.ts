import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootResizeComponent } from './foot-resize.component';

describe('FootResizeComponent', () => {
  let component: FootResizeComponent;
  let fixture: ComponentFixture<FootResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
