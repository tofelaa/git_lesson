import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintExComponent } from './lint-ex.component';

describe('LintExComponent', () => {
  let component: LintExComponent;
  let fixture: ComponentFixture<LintExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LintExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LintExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
