import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { PdfFilesService } from './services/pdf-files.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  scratchCard: Object;
  invoice: Object;

  constructor(private PdfFilesService: PdfFilesService) {
    this.scratchCard = PdfFilesService.scratchCard;
    this.invoice = PdfFilesService.invoice;
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
  }

  generatePdf(docDefinition: any){
    pdfMake.createPdf(docDefinition).open();
  }
}
