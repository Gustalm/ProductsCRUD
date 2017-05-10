import { OnInit, Injectable } from "@angular/core";
import { Product } from "app/models/product.model";
import { Subject } from "rxjs/Subject";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService implements OnInit {
    private products: Product[] = [];
    private observable: Observable<any>;
    public productsEmiter: Subject<Product[]>;
    // private webApiBaseString = "http://localhost:33021/api/";
    private webApiBaseString = "http://justhostbrah-001-site1.btempurl.com/api/";
    

    constructor(private http: Http) {
        this.productsEmiter = new Subject();
    }

    ngOnInit(): void {
    }

    getProducts() {
        if (this.products.length > 0) {
            return Observable.of(this.products)
        } else if (this.observable) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable;
        } else {
            this.observable = this.http.get(this.webApiBaseString + "products")
                .map((response: Response) => {
                    const data = response.json();
                    this.products = data;
                    return data;
                })
            return this.observable;
        }
    }


    getById(idProduct: number) {
        let index = this.getIndex(idProduct);
        return this.products[index];
    }

    post(product: Product) {
        product.Id = product.Id ? product.Id : Math.round(Math.random() * 99999);
        this.products.push(product);
        this.emitProducts();
        return product;
    }

    postProduct(product: Product) {
        return this.http.post(this.webApiBaseString + "products", product).map((response: Response) => {
            let product: Product = response.json()
            console.log(product);
            return product;
        });
    }

    updateProduct(product: Product) {
        return this.http.put(this.webApiBaseString + "products", product).map((response: Response) => {
            let product: Product = response.json()
            console.log(product);
            return product;
        });
    }

    update(product: Product) {
        let index = this.getIndex(product.Id);
        this.products[index] = product;
        this.emitProducts();
    }

    deleteProduct(id: number) {
      return this.http.delete(this.webApiBaseString + "products/" + id).map((response: Response) => {
            let productId: number = response.json()
            console.log(productId);
            return productId;
        });
    }

    delete(id: number) {
        let index = this.getIndex(id);
        this.products.splice(index, 1);
        this.emitProducts();
    }

    private emitProducts() {
        this.productsEmiter.next(this.products.slice());
    }

    private getIndex(idProduct: number) {
        return this.products.findIndex((product) => product.Id == idProduct);
    }
}