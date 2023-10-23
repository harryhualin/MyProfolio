import { Component } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {




onChange(){ 
  document.body.classList.toggle("dark");
  document.getElementById("head")?.classList.toggle("dark");
} 


}
/*Toggle dark mode*/
