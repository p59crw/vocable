import { Component } from '@angular/core';
import { InventoryService, TranscriptionService } from './../../service/index';
import { Gloss } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  glosses: Array<string> = [];

  constructor(private inventoryService: InventoryService, private transcriptionService: TranscriptionService) { }

  applyTranscription() {
    if (this.inventoryService.getInventory().length !== 0) {
      this.glosses = this.transcriptionService.getGlosses();
    }
  }

}
