import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: ''     , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent },
  { path: 'projects' , component: ProjectsComponent },
  { path: 'contact' , component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
