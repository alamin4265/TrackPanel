import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuplLoginComponent } from './signupl-login.component';

describe('SignuplLoginComponent', () => {
  let component: SignuplLoginComponent;
  let fixture: ComponentFixture<SignuplLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignuplLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuplLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
