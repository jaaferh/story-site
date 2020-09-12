import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.scss'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(100)
  //     ]),
  //     transition('* => void', [
  //       animate(100, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
  animations: [
    trigger('appearTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class StanzaComponent implements OnInit {
  @Input() chapter: { title: string, content: string[] };
   contentDet: { line: string, visible: boolean }[] = [];

  constructor() { }

  ngOnInit(): void {
    for (const line of this.chapter.content) {
      if (line) {
        this.contentDet.push({ line, visible: false });
      }
    }
  }
}
