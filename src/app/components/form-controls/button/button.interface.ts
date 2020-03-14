export interface IButton {
  style?: IButtonStyle;
  type?: 'submit' | 'button';
  title: string;
}

export interface IButtonStyle {
  [key: string]: string;
}
