import {Component, Input} from '@angular/core';
import {IButton} from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() options: IButton;


}
