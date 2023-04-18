import { Component, OnInit } from '@angular/core';

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
  about()
  {
    window.open('https://github.com/yslcoweb/yslcoweb.github.io/blob/main/README.md');
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
  constructor() {}

  enter(data: string)
  {
    if((data.includes('check') && data.includes('browser') && data.includes('security')) || (data.includes('check') && data.includes('browser') && data.includes('privacy')))
    {
      this.security();
    }
    else if(data.includes('check') && data.includes('device') && (data.includes('info') || data.includes('information') || data.includes('details')))
    {
      this.deviceinfo();
    }
    else if(data.includes('check') && data.includes('browser') && data.includes('compatibility'))
    {
      this.compatibility();
    }
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