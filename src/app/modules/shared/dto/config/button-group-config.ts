import { Observable } from 'rxjs';

export class ButtonGroupConfig {
  constructor(
    public color: string,
    public label: string,
    public callback: () => any,
    public disabled?: Observable<boolean>
  ) {}
}
