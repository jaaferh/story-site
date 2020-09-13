import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.scss']
})
export class StanzaComponent implements OnInit {
  @Input() chapter: { title: string, content: string[] };

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      this.renderer.addClass(target, 'active');
      this.renderer.removeClass(target, 'inactive');
    }
  }
}
