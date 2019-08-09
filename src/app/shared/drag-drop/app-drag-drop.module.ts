import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from '../material/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        MaterialModule,
        DragDropModule
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
export class AppDragDropModule { }
