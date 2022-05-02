import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { FeedbackItem } from '../../interfaces'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.getAll()
    .subscribe((items: FeedbackItem[]) => console.log(items))
  }
}
