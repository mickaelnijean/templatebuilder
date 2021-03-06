import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-drag-drop-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {

    @Input()
    placeHolder: string;
}
