import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateApp1Component } from './template-app1.component';

describe('TemplateApp1Component', () => {
  let component: TemplateApp1Component;
  let fixture: ComponentFixture<TemplateApp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateApp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
