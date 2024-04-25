import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-contents',
  templateUrl: './home-contents.component.html',
  styleUrls: ['./home-contents.component.css'],
 
})
export class HomeContentsComponent {
  @Input() value: string = 'Visualization';

}
