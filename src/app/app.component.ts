import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: [app-server] // by atribute
  // selector: '.app-servers' // by class
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  title = 'udemy-angular8';
}
