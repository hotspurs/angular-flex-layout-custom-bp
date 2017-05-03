import { Directive, Input, ElementRef, Renderer2, Optional, Self } from '@angular/core';
import { LayoutDirective } from '@angular/flex-layout/flexbox/api/layout';
import { MediaMonitor } from '@angular/flex-layout/media-query/media-monitor';

import { ShowHideDirective, negativeOf } from '@angular/flex-layout/flexbox/api/show-hide';

@Directive({selector: `
  [fxHide.xxl],
  [fxShow.xxl]
`})
export class CustomShowHideDirective extends ShowHideDirective {
  constructor(monitor: MediaMonitor,
              @Optional() @Self() protected _layout: LayoutDirective,  elRef: ElementRef, renderer: Renderer2) {
    super(monitor, _layout, elRef, renderer);
  }
  @Input('fxShow.xl')  set showXxl(val) {this._cacheInput('showXxl', val); };
  @Input('fxHide.xxl') set hideXxl(val) {this._cacheInput('showXxl', negativeOf(val)); };
}
