import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export interface Product {
  image: string;
  title: string;
  price: string;
  badge?: string;
  description: string;
  // delay será adicionado dinamicamente no HomeComponent
  delay?: number;
}

const entryAnimation: AnimationTriggerMetadata = trigger('cardAnim', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    // animate supports params; we'll pass delay from template
    animate('600ms {{ease}} {{delay}}ms', style({ opacity: 1, transform: 'scale(1)' }))
  ], { params: { delay: 0, ease: 'cubic-bezier(.2,.8,.2,1)' } })
]);

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [entryAnimation]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() cardClick = new EventEmitter<void>();
  @Output() hoverChange = new EventEmitter<boolean>();

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.cardClick.emit();
  }

  onMouseEnter() {
    this.hoverChange.emit(true);
  }

  onMouseLeave() {
    this.hoverChange.emit(false);
  }
}
