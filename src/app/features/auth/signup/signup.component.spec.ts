import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let formBuilder: FormBuilder;
  let injector: TestBed;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [],
      providers: [
        {
          provide: FormBuilder,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    fixture = null;
    formBuilder = null;
    injector = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
