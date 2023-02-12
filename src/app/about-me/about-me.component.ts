import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  name :string ="abdo";
  age : number = 30;
  buttondis: boolean =false;
  imgsrc :string = "https://miro.medium.com/max/1400/1*m0s2io11J82PR7miqan92w.png";

  alertfun(){

    alert(this.name);
  }
}
