import {Component, Input, OnInit, AfterViewInit} from '@angular/core';

import {ModalController} from '@ionic/angular';

import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product;

  @Input() productId: number;

  constructor(private productService: ProductsService, private modalController: ModalController) {}


  ngOnInit() {
    this.productService.getProductById(this.productId).subscribe(response => {
      this.product = response;
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
