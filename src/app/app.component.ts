import { Component, OnInit } from '@angular/core';
import { OutputService } from './service/output.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private outputService: OutputService) { }

  ngOnInit() {
    this.outputService.glossesAsString = new Array<any>();
  }

}
