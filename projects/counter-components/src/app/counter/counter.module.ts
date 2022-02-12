import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterComponent]
})
export class CounterModule {
  constructor(private readonly _injector: Injector) {
    const customElement = createCustomElement(CounterComponent, {
      injector: this._injector
    })

    customElements.define("ng-counter", customElement)
  }
}
