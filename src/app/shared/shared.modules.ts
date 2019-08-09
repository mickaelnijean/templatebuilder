import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppDragDropModule } from './drag-drop/app-drag-drop.module';

@NgModule({
    imports: [
        AppDragDropModule
    ],
    exports: [
        MaterialModule,
        AppDragDropModule
    ]
})
export class SharedModule { }
