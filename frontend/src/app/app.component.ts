import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  ngOnInit() {
    document.body.style.backgroundColor = 'red'; 
    console.log('This is a debug log that should not be in production'); 
  }
}
