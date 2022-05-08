import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeedbackItemPageComponent} from './feedback-item-page/feedback-item-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: LoginPageComponent},
      {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: 'feedback/:id', component: FeedbackItemPageComponent, canActivate: [AuthGuard]},
      {path: 'unresolved', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
