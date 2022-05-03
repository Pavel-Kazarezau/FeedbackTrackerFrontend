import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedbackItem, ResponseItem } from 'src/interfaces';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  form!: FormGroup;
  @Input()
  feedbackItem$!: Observable<FeedbackItem>;

  constructor(
    private router: Router,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      answer: new FormControl(null, Validators.required)
    })
  }

  answer() {
    if(this.form.invalid) {
      return
    }
    
    this.feedbackItem$.subscribe(feedbackItem => {
      let responseItem: ResponseItem = {
        feedbackItemId: feedbackItem.id,
        response: this.form.value.answer,
        date: new Date()
      }
      feedbackItem.responseItem = responseItem

      this.feedbackService.sendAnswer(feedbackItem)
      .subscribe(() => this.router.navigate(['/home']))
    })
  }

}
