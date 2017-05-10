import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { ProductListComponent } from "app/products/product-list/product-list.component";
import { ProductEmptyComponent } from "app/products/product-empty/product-empty.component";
import { ProductEditComponent } from "app/products/product-edit/product-edit.component";
import { ProductsRoutingModule } from "app/products/products.routing.module";
import { ProductComponent } from "app/products/product.component";

@NgModule({
    declarations:[
        ProductComponent,
        ProductEmptyComponent,
        ProductListComponent,
        ProductEditComponent
        ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule
    ],
    exports:[]
})
export class ProductModule{

}