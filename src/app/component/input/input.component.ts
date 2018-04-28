import { Component } from '@angular/core';
import { TranscriptionService } from './../../service/index';
import { Gloss } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  glosses: Array<string> = [];

  constructor(private transcriptionService: TranscriptionService) { }

  applyTranscription() {
    this.glosses = this.transcriptionService.getGlosses();
  }

}
