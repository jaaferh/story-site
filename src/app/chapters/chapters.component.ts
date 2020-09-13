import { Component, OnInit } from '@angular/core';
import chapters from '../../assets/data/chapters.json';
import * as converter from 'number-to-words';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {
  chaptersList = chapters.titles;

  constructor() { }

  ngOnInit(): void {
  }

  numberToWords(num: number): number {
    return converter.toWords(num);
  }
}
