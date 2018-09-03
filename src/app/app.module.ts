// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  HomeComponent, InputComponent, IpaComponent, OutputComponent, PageNotFoundComponent,
  WordGeneratorComponent
} from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import { ErrorService, IpaService, OutputService, TranscriptionService } from './service/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IpaComponent,
    InputComponent,
    OutputComponent,
    PageNotFoundComponent,
    WordGeneratorComponent,
    ConsonantFilterPipe,
    VowelFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    ErrorService,
    IpaService,
    Inventory,
    Parser,
    OutputService,
    TranscriptionService,
    WordStructure
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
