import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicComponent2Component } from './test-dynamic-component2.component';

describe('TestDynamicComponent2Component', () => {
  let component: TestDynamicComponent2Component;
  let fixture: ComponentFixture<TestDynamicComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDynamicComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
