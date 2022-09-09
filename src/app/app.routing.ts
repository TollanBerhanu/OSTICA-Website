import { Routes } from "@angular/router";
import { DirectoratesComponent } from "./pages/directorates/directorates.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { DirectoratesContentComponent } from "./pages/directorates/directorates-content/directorates-content.component";
import { BranchesComponent } from "./pages/branches/branches.component";
import { LoginComponent } from "./pages/login/login.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'directorates', component: DirectoratesComponent, children: [
        { path: 'e-government', component: DirectoratesContentComponent },
        { path: 'capacity-building', component: DirectoratesContentComponent },
        { path: 'infrastructure-development', component: DirectoratesContentComponent },
        { path: 'intellectual-property', component: DirectoratesContentComponent },
        { path: 'emission-and-usage', component: DirectoratesContentComponent },
        { path: 'innovation-and-technology', component: DirectoratesContentComponent },
        { path: 'quality-infrastructure', component: DirectoratesContentComponent }
    ] },
    { path: 'branches', component: BranchesComponent, children: [
        { path: 'science-and-technology', component: BranchesComponent },
        { path: 'transfer-and-technology', component: BranchesComponent }
    ] },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'login', component: LoginComponent }

]