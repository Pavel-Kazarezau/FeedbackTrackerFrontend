import { Component, Input, OnInit } from '@angular/core';
import { FeedbackItem } from 'src/interfaces';

@Component({
  selector: 'app-feedback-preview',
  templateUrl: './feedback-preview.component.html',
  styleUrls: ['./feedback-preview.component.css']
})
export class FeedbackPreviewComponent implements OnInit {

  @Input()
  feedbackItem!: FeedbackItem;

  constructor() { }

  ngOnInit(): void {
  }

}
