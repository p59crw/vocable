import { Component, OnInit } from '@angular/core';
import { ErrorService, TranscriptionService } from './../../service/index';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  glosses = this.transcriptionService.getGlosses();

  constructor(private transcriptionService: TranscriptionService) { }

  ngOnInit() {

  }

}
