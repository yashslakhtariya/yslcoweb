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
}
