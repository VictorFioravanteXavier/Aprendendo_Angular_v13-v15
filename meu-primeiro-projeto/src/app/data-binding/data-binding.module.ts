import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ]
})
export class DataBindingModule { }
