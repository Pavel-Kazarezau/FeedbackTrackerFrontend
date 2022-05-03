import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "src/interfaces";

@Injectable({providedIn: "root"})
export class AuthenticationService {

    constructor(private http: HttpClient) {}

    isAuthentificated(): boolean {
        return !! localStorage.getItem('access_token')
    }

    login(user: User) {
        return this.http.post(`${environment.url}/login`, user, {observe: 'response'}) 
        .pipe(
            tap((response: any) => {
                let token = response.headers.get('access_token')
                localStorage.setItem('access_token', token)
            })
        )
    }

    logout() {
        localStorage.clear()
    }

    getAuthToken(): any {
        return localStorage.getItem('access_token')
    }
}