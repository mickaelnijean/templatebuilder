import { Component, ComponentFactoryResolver, ComponentFactory, ViewChild, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputComponent } from './shared/drag-drop/input/input.component';
import { DatePickerComponent } from './shared/drag-drop/date-picker/date-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'templatebuilder';
  componentRef: ComponentRef<InputComponent>;
  componentDatePickerRef: ComponentRef<InputComponent>;
  todo: Component[] = [ ];
  done: Component[] = [ new DatePickerComponent()];
  @ViewChild('dyn', { read: ViewContainerRef, static: false }) container;

  constructor(private resolver: ComponentFactoryResolver) { }

  createInputComponent(placeHolder) {
    // this.container.clear();
    const factory: ComponentFactory<InputComponent> = this.resolver.resolveComponentFactory(InputComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.placeHolder = placeHolder;
  }

  createDatepickerComponent() {
    // this.container.clear();
    const factory: ComponentFactory<DatePickerComponent> = this.resolver.resolveComponentFactory(DatePickerComponent);
    this.componentDatePickerRef = this.container.createComponent(factory);
  }

  drop(event: CdkDragDrop<Component[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnDestroy() {
    this.componentRef.destroy();
    this.componentDatePickerRef.destroy();
   }

}
