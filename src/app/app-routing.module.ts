import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { AddContactComponent } from './screens/add-contact/add-contact.component';
import { HomeComponent } from './screens/home/home.component';
import { ViewContactComponent } from './screens/view-contact/view-contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path : 'add-contact', component: AddContactComponent},
  { path : 'view-contact', component: ViewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
