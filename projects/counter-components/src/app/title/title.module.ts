import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule
  ],
  exports:[TitleComponent]
})
export class TitleModule {
  constructor(private readonly _injector: Injector) {
    // const customElement = createCustomElement(TitleComponent, {
    //   injector: this._injector
    // })

    // customElements.define("ng-title", customElement)
  }
}
