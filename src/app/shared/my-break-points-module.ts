import { NgModule } from '@angular/core';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, BreakPoint } from '@angular/flex-layout'
import { validateSuffixes } from '@angular/flex-layout/utils';
import { CustomShowHideDirective } from './showhide-ext-directive';

@NgModule({
  providers: [
    // register a Custom BREAKPOINT Provider
    {
      provide : BREAKPOINTS,
      useFactory : function customizeBreakPoints() {
        return validateSuffixes(DEFAULT_BREAKPOINTS.map((it: BreakPoint) => {
          switch (it.alias) {
            case 'xs' : it.mediaQuery =  'screen and (max-width: 470px)';   break;
            case 'sm' : it.mediaQuery =  'screen (min-width: 471px) and (max-width: 820px)'; break;
            case 'xl' : it.mediaQuery =  'screen and (min-width: 1600x) and (max-width: 1919px)'; break;
          }
          return it;
        }).concat([
          {
            alias: 'xxl',
            mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)',
          },
          {
            alias: 'lt-xxl',
            mediaQuery: 'screen and (max-width: 1920px)',
          },
          {
            alias: 'gt-xl',
            mediaQuery: 'screen and (max-width: 1920px)',
          }
        ]));
      }
    }
  ],
  // declarations: [CustomShowHideDirective],
})
export class MyBreakPointsModule { }
