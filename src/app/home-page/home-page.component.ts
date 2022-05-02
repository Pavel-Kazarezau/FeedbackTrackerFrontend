import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { FeedbackItem } from '../../interfaces'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  feedbackItems$!: Observable<FeedbackItem[]>;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackItems$ = this.feedbackService.getAll()
  }
}
