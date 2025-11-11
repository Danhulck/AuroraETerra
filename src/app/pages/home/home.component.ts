import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, Product } from '../../components/product-card/product-card.component';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { BrandValuesComponent } from '../../components/brand-values/brand-values.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { products } from '../../mock/products.mock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductModalComponent, BrandValuesComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  isModalOpen = false;

  constructor() {
    this.products = products.map(p => ({
      ...p,
      delay: Math.floor(Math.random() * 300)
    }));
  }

  onCardClick(p: Product) {
    this.selectedProduct = p;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onHoverChange(isHovering: boolean, p: Product) {}
}
