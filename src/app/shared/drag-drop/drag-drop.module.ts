import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        InputComponent,
        DatePickerComponent
    ],
    entryComponents: [
        InputComponent,
        DatePickerComponent
    ],
    exports: [
        InputComponent,
        DatePickerComponent
    ]
})
export class DragDropModule { }
