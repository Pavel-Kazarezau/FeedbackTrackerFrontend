import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FeedbackPreviewComponent } from './feedback-preview/feedback-preview.component';
import ruLocale from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { FeedbackItemPageComponent } from './feedback-item-page/feedback-item-page.component';
import { AnswerComponentComponent } from './answer-component/answer-component.component';

registerLocaleData(ruLocale, 'ru')

const INTERCEPTOR_PROVIDER: Provider  = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    NavigationComponent,
    HomePageComponent,
    FeedbackPreviewComponent,
    FeedbackItemPageComponent,
    AnswerComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
