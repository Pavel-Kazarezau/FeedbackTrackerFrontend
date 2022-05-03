import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { FeedbackItem } from "src/interfaces";
import { AuthenticationService } from "./authentication.service";

@Injectable({providedIn: 'root'})
export class FeedbackService {
    constructor(
        private http: HttpClient
        ) {}

    getAll(): Observable<FeedbackItem[]> {
        return this.http.get<any>(`${environment.url}/feedbackItems`)
        .pipe(
           map(response => response['_embedded']['feedbackItems'])
        )
    }

    getById(id: any): Observable<FeedbackItem> {
        return this.http.get<FeedbackItem>(`${environment.url}/feedbackItems/${id}`)
    }
}