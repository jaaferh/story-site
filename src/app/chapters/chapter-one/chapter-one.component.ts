import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/chapter1.json';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.scss']
})
export class ChapterOneComponent implements OnInit {
  chapterData = data;
  constructor() { }

  ngOnInit(): void {
  }

}
