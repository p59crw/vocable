import { Injectable } from '@angular/core';
import { Inventory, Word } from './../class/index';
import * as jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';

@Injectable()
export class OutputService {

  languageName = '';

  constructor(private inventory: Inventory) { }

  saveToPDF() {
    let JSON_File = '';
    this.inventory.dictionary.forEach(function(word) {
      JSON_File = JSON_File.concat(word.gloss + '\n' + word.partOfSpeech + '\n' + word.definition + '\n\n');
    });

    const filename = this.languageName + '.csv';

    const pdf = new jsPDF();
    pdf.setPage(1);
    pdf.setFontSize(48);
    pdf.text(this.languageName, 50, 50);
    pdf.addPage();
    pdf.setFontSize(12);
    pdf.text(20, 20, JSON_File);
    pdf.save(filename.replace('.csv', '.pdf'));
  }

  saveToDoc() {
    let JSON_File = '';
    this.inventory.dictionary.forEach(function(word) {
      JSON_File = JSON_File.concat(word.gloss + '\n' + word.partOfSpeech + '\n' + word.definition + '\n\n');
    });

    const file = new File([JSON_File], this.languageName + '.doc', { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(file);
  }

}
