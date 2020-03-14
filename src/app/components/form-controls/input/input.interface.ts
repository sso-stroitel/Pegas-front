export interface IInput {
  label?: string;
  style?: IInputStyle;
  inputStyle?: IInputStyle;
  validText?: string;
  type?: string;
  name?: string;
}

export interface IInputStyle {
  [key: string]: string;
};
