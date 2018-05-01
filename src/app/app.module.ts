import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { InputComponent, IpaComponent, OutputComponent } from './component/index';

// Filter Pipes
import { ConsonantFilterPipe, VowelFilterPipe } from './pipe/index';

// Services
import {
  IpaService, InventoryService, ParserService, PermutatorService,
  TranscriptionService
} from './service/index';

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
    ParserService,
    PermutatorService,
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
