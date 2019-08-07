import { SharedModule } from '../shared/shared.modules';
import { NgModule } from '@angular/core';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';

@NgModule({
    imports: [
        DragAndDropModule
    ],
    exports: [
        DragAndDropModule
    ]
})
export class FeatureModule { }
