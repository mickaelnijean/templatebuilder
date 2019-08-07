import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { DragDropModule } from './drag-drop/drag-drop.module';

@NgModule({
    imports: [
        DragDropModule
    ],
    exports: [
        MaterialModule,
        DragDropModule
    ]
})
export class SharedModule { }
