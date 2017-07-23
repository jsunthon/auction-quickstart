import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'product-edit',
  templateUrl: 'app/components/product-management/product-edit/product-edit.component.html'
})
export class ProductEditComponent {
  @Output() close: EventEmitter<string> = new EventEmitter();

  closeForm(): void {
    this.close.emit('productEdit');
  }
}
