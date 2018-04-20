import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TranscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
