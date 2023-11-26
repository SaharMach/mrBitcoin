import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { SignupComponent } from './pages/signup/signup.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'signup', component: SignupComponent },
  { path: 'contact/add', component: ContactEditPageComponent }, 
  { path: 'contact/edit/:id', component: ContactEditPageComponent }, 
  { path: 'contact/:id', component: ContactDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path:'statistics', component: StatisticsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
