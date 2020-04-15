import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: IndexComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'workshop', component: WorkshopComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
