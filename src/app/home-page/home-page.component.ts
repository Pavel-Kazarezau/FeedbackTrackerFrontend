import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { FeedbackItem } from '../../interfaces'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  feedbackItems$!: Observable<FeedbackItem[]>;

  constructor(
    private feedbackService: FeedbackService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.router.url === '/unresolved') {
      this.feedbackItems$ = this.feedbackService.getUnresolved()
    } else {
      this.feedbackItems$ = this.feedbackService.getAll()
    }
  }
}
