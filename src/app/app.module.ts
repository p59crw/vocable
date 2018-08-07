// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Classes
import {
  Consonant, EmptyInputError, GenericError, Gloss, Inventory,
  NotYetImplementedError, NullArgumentError, Parser, Permuter,
  Sound, Vowel, WordStructure, WordStructureComponent
} from './class/index';

// Components
import { AppComponent } from './app.component';
import {
  InputComponent, IpaComponent, OutputComponent
} from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import { ErrorService, IpaService, TranscriptionService } from './service/index';

@NgModule({
  declarations: [
    AppComponent,
    IpaComponent,
    InputComponent,
    OutputComponent,
    ConsonantFilterPipe,
    VowelFilterPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ErrorService,
    IpaService,
    Inventory,
    Parser,
    Permuter,
    TranscriptionService,
    WordStructure
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
