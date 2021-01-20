import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.accordionData = {
      id: '0',
      answer: '',
      question: '',
      isOpen: false,
    };
    component.questionIndex = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have summary text', () => {
    component.accordionData = {
      id: '0',
      answer: 'sample answer',
      question: 'sample question',
      isOpen: false,
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question-index').innerHTML).toContain('Q1');
    expect(compiled.querySelector('.question').innerHTML).toContain(
      'sample question'
    );
    expect(compiled.querySelector('.question-answer').innerHTML).toContain(
      'sample answer'
    );
  });
});
