import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchRecipeComponent} from './search-recipe/search-recipe.component';
import {TouristGuideComponent} from './tourist-guide/tourist-guide.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ContactusComponent} from './contactus/contactus.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/tourist', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'search-recipe', component: SearchRecipeComponent},
  { path: 'tourist', component: TouristGuideComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users/:userName', component: LoginComponent},
  { path: 'users', component: RegistrationComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: '**', component: TouristGuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
