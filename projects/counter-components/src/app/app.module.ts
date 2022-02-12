import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private readonly _injector: Injector) {

  }
  ngDoBootstrap(): void {
    this.createComponents();
  }

  async createComponents(): Promise<void> {
    // const {TitleComponent} = await import('./title/title.component');
    const customElement = createCustomElement(TitleComponent, {
      injector: this._injector
    })

    customElements.define("ng-title", customElement)
  }
}
