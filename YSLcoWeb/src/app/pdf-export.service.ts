import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {

  constructor() { }

  exportTextAsPdf(text: string, fileName: string) {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save(fileName + '.pdf');
  }
}
