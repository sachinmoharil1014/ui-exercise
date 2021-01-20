import { Component, OnInit } from '@angular/core';
import { Accordion } from '../accordion.model';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {
  accordionDataList: Array<Accordion>;

  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionService.getFaqs().subscribe((response: Array<Accordion>) => {
      this.accordionDataList = response;
    });
  }
}
