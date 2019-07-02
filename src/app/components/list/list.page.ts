import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ModalController } from '@ionic/angular';

import { ProductDetailPage } from '../product-detail/product-detail.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  products = [];

  constructor(private productsService: ProductsService, public modalController: ModalController) {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(response => {
      for (const product of response) {
        this.products.push(product);
      }
    });
  }

  async openProductDetails(id: number) {
    const modal = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: { productId: id }
    });
    return await modal.present();
  }
}

