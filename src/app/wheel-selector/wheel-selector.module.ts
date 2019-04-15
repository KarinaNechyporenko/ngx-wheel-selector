import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WheelSelectorComponent, PickerDataModel } from './wheel-selector/wheel-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WheelSelectorComponent],
  exports: [WheelSelectorComponent]
})
export class WheelSelectorModule { }

export { WheelSelectorComponent, PickerDataModel }
