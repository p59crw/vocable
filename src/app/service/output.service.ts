import { Injectable } from '@angular/core';
import { Word } from './../class/ipa/word';
import * as jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';

@Injectable()
export class OutputService {

  glossesAsString: Array<any>;
  languageName = '';

  constructor() { }

  save() {
    let JSON_File = '';
    this.glossesAsString.forEach(function(word) {
      JSON_File = JSON_File.concat(word.gloss + '\n' + word.partOfSpeech + '\n' + word.definition + '\n\n');
    });

    const file = new File([JSON_File], this.languageName + '.doc', { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(file);

    const filename = this.languageName + '.csv';

    const pdf = new jsPDF();
    pdf.setPage(1);
    pdf.setFontSize(48);
    pdf.text('Dictionary of\n' + this.languageName, 30, 50);
    pdf.addPage();
    pdf.setFontSize(10);
    pdf.text(20, 20, JSON_File);
    pdf.save(filename.replace('.csv', '.pdf'));
  }

}
