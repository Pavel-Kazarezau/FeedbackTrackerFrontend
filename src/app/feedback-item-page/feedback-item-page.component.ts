import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { FeedbackItem, ResponseItem } from 'src/interfaces';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback-item-page',
  templateUrl: './feedback-item-page.component.html',
  styleUrls: ['./feedback-item-page.component.css']
})
export class FeedbackItemPageComponent implements OnInit {

  feedbackItem$!: Observable<FeedbackItem>

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService
    ) { }

  ngOnInit(): void {
    this.feedbackItem$ = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => this.feedbackService.getById(params['id']))
    )
  }
}
