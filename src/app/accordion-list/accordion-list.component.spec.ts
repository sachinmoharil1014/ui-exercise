import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionService } from '../accordion.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionListComponent } from './accordion-list.component';
import { Observable, of } from 'rxjs';

describe('AccordionListComponent', () => {
  let component: AccordionListComponent;
  let fixture: ComponentFixture<AccordionListComponent>;
  let accordionService: AccordionService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AccordionListComponent],
      providers: [
        {
          provide: AccordionService,
          useClass: AccordionService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionListComponent);
    component = fixture.componentInstance;
    accordionService = TestBed.inject(AccordionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get faqs list on getFaqs function call', () => {
    const faqsSpy = spyOn(accordionService, 'getFaqs').and.returnValue(
      of([{ id: '1', question: 'sample question', answer: 'sample answer' }])
    );
    component.ngOnInit();
    expect(faqsSpy).toHaveBeenCalled();
    expect(component.accordionDataList.length).toBe(1);
  });

});
