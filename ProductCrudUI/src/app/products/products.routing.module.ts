
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "app/products/product.component";
import { ProductEmptyComponent } from "app/products/product-empty/product-empty.component";
import { ProductEditComponent } from "app/products/product-edit/product-edit.component";
import { ProductResolver } from "app/products/product-edit/product-edit.resolver";

const routes: Routes = [
    {
        path: '', component: ProductComponent, children: [
            { path: '', component: ProductEmptyComponent },
            { path: 'new', component: ProductEditComponent },
            { path: ':id', component: ProductEditComponent, resolve: { product: ProductResolver } }
        ]
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {

}