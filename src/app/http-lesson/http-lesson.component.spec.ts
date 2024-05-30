import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLessonComponent } from './http-lesson.component';

describe('HttpLessonComponent', () => {
  let component: HttpLessonComponent;
  let fixture: ComponentFixture<HttpLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
