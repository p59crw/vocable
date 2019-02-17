import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { OutputComponent } from './component/output/output.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WordGeneratorComponent } from './component/word-generator/word-generator.component';

const routes: any = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'wordgenerator',
    component: WordGeneratorComponent
  },
  {
    path: 'output',
    component: OutputComponent
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
