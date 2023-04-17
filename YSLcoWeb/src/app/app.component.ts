import { Component } from '@angular/core';
import { OpenaiService } from './openai.service';

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
  flag = false;
  regex = /^[^\w]*$/;
  init: string = '\nHey there! I am YSLcoWeb, your Web Assistant. You can search through specific search engines given\
 or you can type your query and press enter button for intelligent AI answers\nYou can also ask me some basic questions.\
 Ask me to check your device info, browser info, compatibility, privacy and security';
  outputtxt: string | undefined = this.init;
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
  constructor(private openaiService: OpenaiService) {}

  enter(data: string)
  {
    let w = ['check', 'browser', 'security'];
    let w1 = ['check', 'device', 'info'];
    let w2 = ['check', 'browser', 'compatibility'];
    let w3 = ['check', 'browser', 'privacy'];
    console.log(this.regex.test(data));
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
    this.outputtxt = '\nPlease wait for a while!'
    this.openaiService.generateText(data).then(text => {
      this.outputtxt = text;
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