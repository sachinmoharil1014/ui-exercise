import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AccordionService } from './accordion.service';
import { Accordion } from './accordion.model';

describe('AccordionService', () => {
  let service: AccordionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccordionService],
    }).compileComponents();
    service = TestBed.inject(AccordionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve faqs list from the API', () => {
    const faqsList: Accordion[] = [
      {
        id: '1',
        question: 'What vehicles are covered?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOpen: false,
      },
      {
        id: '2',
        question: 'Can anyone drive a vehicle covered by a business policy?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isOpen: false,
      },
    ];
    service.getFaqs().subscribe((faqs: Accordion[]) => {
      expect(faqs.length).toBe(2);
      expect(faqs).toEqual(faqsList);
    });
    const request = httpMock.expectOne('/assets/faqs.json');
    expect(request.request.method).toBe('GET');
    request.flush(faqsList);
  });
});
