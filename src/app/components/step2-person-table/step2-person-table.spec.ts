import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PersonTale } from './step2-person-table';

describe('Step2PersonTale', () => {
  let component: Step2PersonTale;
  let fixture: ComponentFixture<Step2PersonTale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2PersonTale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2PersonTale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
