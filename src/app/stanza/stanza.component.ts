import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  styleUrls: ['./stanza.component.scss']
})
export class StanzaComponent implements OnInit {
  @Input() chapter: { title: string, content: string[] };

  constructor() { }

  ngOnInit(): void {
  }

}
