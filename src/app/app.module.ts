import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MyBreakPointsModule } from './shared/my-break-points-module';

import { CustomShowHideDirective } from './shared/showhide-ext-directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomShowHideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MyBreakPointsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
