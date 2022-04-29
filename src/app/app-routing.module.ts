import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: LoginPageComponent},
    {path: 'home', component: HomePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
