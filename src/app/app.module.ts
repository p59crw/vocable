// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  OutputComponent, PageNotFoundComponent,
  RegisterComponent, WordGeneratorComponent
} from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import { ErrorService, IpaService, LoaderService, OutputService, TranscriptionService } from './service/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IpaComponent,
    InputComponent,
    OutputComponent,
    PageNotFoundComponent,
    RegisterComponent,
    WordGeneratorComponent,
    ConsonantFilterPipe,
    VowelFilterPipe,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    ErrorService,
    IpaService,
    Inventory,
    LoaderService,
    Parser,
    OutputService,
    TranscriptionService,
    WordStructure
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
