import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery

type NewType = AfterViewInit;

@Component({
  selector: 'app-xplorador',
  // standalone: false,
  // imports: [],
  templateUrl: './xplorador.component.html',
  styleUrls: ['./xplorador.component.css']
})

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
export class XploradorComponent  implements NewType{
  ngAfterViewInit() {
    setTimeout(() => {
      // Initialize the sticky sidebar plugin with options
      $('.sidebar').slideToggle({
        // Options for the stickySidebar plugin
        topSpacing: 20,
        bottomSpacing: 20,
        containerSelector: '.container',
        innerWrapperSelector: '.sidebar-inner'
      });
    }, 0);
  }

  redirectToLogin()
  {
    location.replace("http://localhost:4200/login");
  }
}
