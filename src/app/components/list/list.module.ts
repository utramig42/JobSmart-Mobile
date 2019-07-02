import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {ProductDetailPage} from '../product-detail/product-detail.page';
import {ProductDetailPageModule} from '../product-detail/product-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ProductDetailPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
