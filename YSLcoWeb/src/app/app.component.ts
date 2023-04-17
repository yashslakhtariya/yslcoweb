import { Component, OnInit } from '@angular/core';
import { OpenaiService } from './openai.service';
import { PdfExportService } from './pdf-export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YSLcoWeb';
  srchtxt: string = '';
  mainbg = '';
  darkmode = false;
  exportprmpt = '\n\nPress export button at top right to export output as pdf!'
  exprt = false;
  flag = false;
  regex = /^[^\w]*$/;
  init: string = '\nHey there! I am YSLcoWeb, your Web Assistant. You can search through specific search engines given\
 or you can type your query and press enter button for intelligent AI answers\nYou can also ask me some basic questions.\
 Ask me to check your device info, browser info, compatibility, privacy and security. You can export pdf of your output text also when top right\
 button for the same is visible';
  outputtxt: string = this.init;

  ngOnInit(): void {
    if(this.sysdarkmode())
    {
      this.mainbg = 'background-color : #313744';
      this.darkmode = true;
    }
    else
    {
      this.mainbg = 'background-color : #d8e1f2';
      this.darkmode = false;
    }
  }
  sysdarkmode()
  {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  changebg()
  {
    if(!this.darkmode)
    {
      this.mainbg = 'background-color : #313744';
      this.darkmode = true;
    }
    else if(this.darkmode)
    {
      this.mainbg = 'background-color : #d8e1f2';
      this.darkmode = false;
    }
  }
  constructor(private openaiService: OpenaiService, private pdfExportService: PdfExportService) {}
  exportPdf() {
    let textToExport: string = this.outputtxt;
    const fileName = 'yslcoweb';
    this.pdfExportService.exportTextAsPdf(textToExport, fileName);
  }
  initstate()
  {
    this.flag = false;
    this.exprt = false;
  }

  enter(data: string)
  {
    if((data.includes('check') && data.includes('browser') && data.includes('security')) || (data.includes('check') && data.includes('browser') && data.includes('privacy')))
    {
      this.security();
    }
    else if(data.includes('check') && data.includes('device') && data.includes('info'))
    {
      this.deviceinfo();
    }
    else if(data.includes('check') && data.includes('browser') && data.includes('compatibility'))
    {
      this.compatibility();
    }
    else if(this.regex.test(data))
    {
      this.outputtxt = this.init;
    }
    else
    {
      this.generateText(data);
    }
  }

  generateText(data:string) {
    this.flag = true;
    this.outputtxt = '\nPlease wait for a while!'
    this.openaiService.generateText(data).then(text => {
      this.outputtxt = text + '';
      this.exprt = true;
    }).catch(error => {
      this.outputtxt = error;
    })
  }
  google()
  {
    window.open(`https://www.google.com/search?q=${this.srchtxt}`);
  }
  youtube()
  {
    window.open(`https://www.youtube.com/results?search_query=${this.srchtxt}`);
  }
  brave()
  {
    window.open(`https://search.brave.com/search?q=${this.srchtxt}`);
  }
  duckduckgo()
  {
    window.open(`https://duckduckgo.com/?q=${this.srchtxt}`);
  }
  yahoo()
  {
    window.open(`https://search.yahoo.com/search?p=${this.srchtxt}`);
  }
  bing()
  {
    window.open(`https://www.bing.com/search?q=${this.srchtxt}`);
  }
  security()
  {
    window.open('https://browserleaks.com');
  }
  deviceinfo()
  {
    window.open('https://deviceinfo.me');
  }
  compatibility()
  {
    window.open('https://html5test.com');
  }
}