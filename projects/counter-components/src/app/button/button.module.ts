import { Inject, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {
  constructor(private readonly _injector: Injector) {
    const customElement = createCustomElement(ButtonComponent, {
      injector: this._injector
    })

    customElements.define("ng-button", customElement)
  }
}
