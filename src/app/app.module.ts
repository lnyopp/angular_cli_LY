import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';

@NgModule({
  declarations: [AppComponent, CompTwoComponent, CompOneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
