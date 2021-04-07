import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: ''     , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent },
  { path: 'projects' , component: ProjectsComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'request' , component: FormComponent },
  { path: '**'   , component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
