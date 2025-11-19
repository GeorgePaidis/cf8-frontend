import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8TemplateDrivenForm } from './step8-template-driven-forms';

describe('Step8TemplateDrivenForm', () => {
  let component: Step8TemplateDrivenForm;
  let fixture: ComponentFixture<Step8TemplateDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step8TemplateDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step8TemplateDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
