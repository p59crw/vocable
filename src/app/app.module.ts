import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Classes
import { Consonant, Gloss, Parser, Permuter, Sound, Vowel } from './class/index';

// Components
import { AppComponent } from './app.component';
import { InputComponent, IpaComponent, OutputComponent } from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import { IpaService, InventoryService, TranscriptionService } from './service/index';

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
    InventoryService,
    Parser,
    Permuter,
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
