import { Component, Input } from '@angular/core';
import { Accordion } from '../accordion.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input()
  public accordionData: Accordion;

  @Input()
  public questionIndex: number;

  public toggleOpen(): void {
    this.accordionData.isOpen = !this.accordionData.isOpen;
  }
}
