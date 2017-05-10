import { Component, OnInit } from '@angular/core';
import { Product } from "app/models/product.model";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  ngOnInit() {
    // this.productService.productsEmiter.subscribe((products: Product[]) => {
    //   this.products = products;
    // })


  }

}
