import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[scrollEndDetect]',
})
export class ScrollEndDetectDirective {
  @Output() onScrollBottom = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('scroll') listen() {
    this.el.nativeElement;
    let pos =
      (this.el.nativeElement.scrollTop ||
        (this.el.nativeElement.body != null
          ? this.el.nativeElement.body.scrollTop
          : 0)) + this.el.nativeElement.offsetHeight;
    let max = this.el.nativeElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos > max - 1) {
      this.onScrollBottom.emit();
      //Do your action here
    }
  }
}
