import { ButtonConfig } from './button-group-config';

export interface ConfirmDialogConfig {
  header: string;
  content: string;
  confirmButtonConfig: Array<ButtonConfig>;
}
