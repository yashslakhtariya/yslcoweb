import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YSLcoWeb';
  srchtxt: string = '';
  mainbg = '';
  darkmode = false;
  outputtxt: string = 'uqeuueqb\nqbbbb\nqenenqern\nqernqnr\qnenrqnne\nqenqrenrqeneqn\nqeenqernqen';
  changebg()
  {
    if(!this.darkmode)
    {
      this.mainbg = 'background-color : #313744';
      this.darkmode = true;
    }
    else if(this.darkmode)
    {
      this.mainbg = 'background-color : #d8dee9';
      this.darkmode = false;
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
}
