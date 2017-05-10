import { NgModule } from "@angular/core";
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { AppRoutingModule } from "app/app.routing.module";
import { ProductService } from "app/services/product.service";
import { ProductResolver } from "app/products/product-edit/product-edit.resolver";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    providers:[
        ProductService,
        ProductResolver
    ]
})
export class CoreModule {

}