import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent {
  @Input() name: string;
  @Input() title: string;
  @Input() color: string;
  @Output() radioChange: EventEmitter<any> = new EventEmitter();
}
