import {Component, EventEmitter, Input, Output} from '@angular/core';
type btnName = 'CHILDREN' | 'PARENT' | 'EDUCATION_INSTITUTION' | 'TOUR_OPERATOR';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent {
  @Input() name: btnName;
  @Input() title: string;
  @Input() color: string;
  @Input() checked: boolean;
  @Output() radioChange: EventEmitter<any> = new EventEmitter();
}
