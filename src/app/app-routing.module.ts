import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OutputComponent } from './component/output/output.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { WordGeneratorComponent } from './component/word-generator/word-generator.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'wordgenerator',
    component: WordGeneratorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'output',
    component: OutputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule {
}
