import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[currency]',
})
export class CurrencyInputFormatDirective {
  @Input('minValue') _minValue: number;
  @Input('maxValue') _maxValue: number;

  private DECIMAL_SEPARATOR = '.';
  private THOUSANDS_SEPARATOR = ' ';
  private regex: RegExp = new RegExp(/^-?([0-9])*((\.|\,)[0-9]*)?$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab'];

  private oldInputValue: string;
  private oldCursorPosition: CursorPosition;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      let inputValue = this.elementRef.nativeElement.value;
      inputValue = this.setValueWhenIsLessThanMin(inputValue);
      inputValue = this.setValueWhenIsMoreThanMax(inputValue);
      this.formatInput(inputValue);
    }, 0);
  }

  @HostListener('input', ['$event.target.value', '$event.target'])
  handleInput(newInputValue: string, inputElement: HTMLInputElement) {
    if (!String(newInputValue).match(this.regex)) {
      this.setNativeInputValue(this.oldInputValue);
      this.setCursorPosition(inputElement, this.oldCursorPosition);
      return;
    }
  }

  @HostListener('keypress', ['$event.target.value', '$event.target', '$event'])
  onKeyDown(
    oldInputValue: string,
    inputElement: HTMLInputElement,
    event: KeyboardEvent
  ) {
    this.oldInputValue = oldInputValue;
    this.oldCursorPosition = this.getCursorPosition(inputElement);
    if (this.specialKeys.indexOf(event.key) !== -1) return;
  }

  @HostListener('blur', ['$event.target.value', '$event.target'])
  onBlur(inputValue: string, inputElement: HTMLInputElement) {
    inputValue = this.setValueWhenIsLessThanMin(inputValue);
    inputValue = this.setValueWhenIsMoreThanMax(inputValue);
    this.formatInput(inputValue);
  }

  @HostListener('focus', ['$event.target.value', '$event.target'])
  onFocus(inputValue: string, inputElement: HTMLInputElement) {
    const cursorPosition = this.calculateCursorPositionOnFocus(
      inputValue,
      inputElement
    );
    this.removeSpacesFromInput(inputValue);
    this.setCursorPosition(inputElement, cursorPosition);
  }

  setValueWhenIsLessThanMin(inputValue: string): string {
    if (this._minValue == null) return inputValue;
    if (
      Number.parseFloat(this.getCurrentValueAsNumber(inputValue)) >=
      this._minValue
    )
      return inputValue;
    return this._minValue.toString();
  }

  setValueWhenIsMoreThanMax(inputValue: string): string {
    if (this._maxValue == null) return inputValue;
    if (
      Number.parseFloat(this.getCurrentValueAsNumber(inputValue)) <
      this._maxValue
    )
      return inputValue;
    return this._maxValue.toString();
  }

  private formatInput(inputValue: string): void {
    let actualInputValue: string = this.getCurrentValueAsNumber(inputValue);
    actualInputValue = this.addSpacesInNumber(actualInputValue);
    this.setNativeInputValue(actualInputValue);
  }

  private addSpacesInNumber(stringToFormat: string): string {
    const fraction = stringToFormat.substring(
      stringToFormat.indexOf(this.DECIMAL_SEPARATOR)
    );
    let integer = stringToFormat.substring(
      0,
      stringToFormat.indexOf(this.DECIMAL_SEPARATOR)
    );
    integer = integer.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      this.THOUSANDS_SEPARATOR
    );
    return integer + fraction;
  }

  private removeSpacesFromInput(inputValue: string) {
    this.setNativeInputValue(inputValue.replace(/\s/g, ''));
  }

  private getCurrentValueAsNumber(inputValue: string): string {
    inputValue = inputValue.replace(',', this.DECIMAL_SEPARATOR);
    inputValue = inputValue.replace(/\s/g, '');
    return Number(inputValue).toFixed(2).toString();
  }

  private calculateCursorPositionOnFocus(
    inputValue: string,
    inputElement: HTMLInputElement
  ): CursorPosition {
    let cursorPosition = this.getCursorPosition(inputElement);
    let diff = Math.ceil(
      -(((inputValue.length - 3) % 4) - cursorPosition.selectionStart) / 4
    );
    if (cursorPosition.selectionStart > inputValue.length - 3) diff -= 1;

    cursorPosition.selectionStart -= diff;
    cursorPosition.selectionEnd -= diff;

    return cursorPosition;
  }

  private setNativeInputValue(value: string): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
  }

  private getCursorPosition(inputElement: HTMLInputElement): CursorPosition {
    return {
      selectionStart: inputElement.selectionStart || 0,
      selectionEnd: inputElement.selectionEnd || 0,
    };
  }

  private setCursorPosition(
    inputElement: HTMLInputElement,
    position: CursorPosition
  ): void {
    inputElement.setSelectionRange(
      position.selectionStart >= 0 ? position.selectionStart : 0,
      position.selectionEnd >= 0 ? position.selectionEnd : 0
    );
  }
}

class CursorPosition {
  selectionStart: number;
  selectionEnd: number;
}
