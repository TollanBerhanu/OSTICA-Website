import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NewsComponent } from './pages/news/news.component';
import { DirectoratesComponent } from './pages/directorates/directorates.component';
import { DirectoratesContentComponent } from './pages/directorates/directorates-content/directorates-content.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { LoginComponent } from './pages/login/login.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    DirectoratesComponent,
    DirectoratesContentComponent,
    BranchesComponent,
    LoginComponent,
    FeedbackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
