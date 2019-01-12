// Config
import { AppConfig } from './app.config';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Classes
import {
  Consonant, EmptyInputError, GenericError, Gloss, Inventory,
  NotYetImplementedError, NullArgumentError, Parser,
  Sound, Vowel, WordStructure, WordStructureComponent
} from './class/index';

// Components
import { AppComponent } from './app.component';
import {
  HomeComponent, InputComponent, IpaComponent, LoginComponent,
  OutputComponent, PageNotFoundComponent, ProfileComponent,
  RegisterComponent, WordGeneratorComponent
} from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Guard
import { AuthGuard } from './guard/auth.guard';

// Services
import {
  AuthenticationService, ErrorService, IpaService, LoaderService,
  OutputService, ProfileService, TokenInterceptorService, TranscriptionService
} from './service/index';

export function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IpaComponent,
    InputComponent,
    LoginComponent,
    OutputComponent,
    PageNotFoundComponent,
    ProfileComponent,
    RegisterComponent,
    WordGeneratorComponent,
    ConsonantFilterPipe,
    VowelFilterPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true },
    { provide: Window, useValue: window },
    AuthenticationService,
    AuthGuard,
    ErrorService,
    IpaService,
    Inventory,
    LoaderService,
    Parser,
    OutputService,
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    TranscriptionService,
    WordStructure
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
