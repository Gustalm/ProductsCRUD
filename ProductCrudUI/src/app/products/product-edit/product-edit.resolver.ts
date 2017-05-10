import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Product } from "app/models/product.model";
import { ProductService } from "app/services/product.service";

@Injectable()
export class ProductResolver implements Resolve<Product>{
    constructor(private productService: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        return this.productService.getById(+route.params["id"]);
    }
}