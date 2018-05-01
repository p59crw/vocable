import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Classes
import {
  Consonant, Gloss, Inventory, Parser, Permuter,
  Sound, Vowel
} from './class/index';

// Components
import { AppComponent } from './app.component';
import { InputComponent, IpaComponent, OutputComponent } from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import { IpaService, TranscriptionService } from './service/index';

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
    BrowserModule
  ],
  providers: [
    IpaService,
    Inventory,
    Parser,
    Permuter,
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
