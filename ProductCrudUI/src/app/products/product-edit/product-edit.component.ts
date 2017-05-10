import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";
import { Product } from "app/models/product.model";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  editMode = false;
  editProduct: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) {
    // this.activatedRoute.data.subscribe(
    //   (data: Data) => {
    //     this.editProduct = data['product'];
    //   })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let idProduct = params['id'];

      if (idProduct) {
        this.editProduct = this.productService.getById(+idProduct);
        this.editMode = this.editProduct != null;
      }

      if (this.editMode)
        this.productForm = new FormGroup({
          id: new FormControl(this.editProduct.Id),
          name: new FormControl(this.editProduct.Name, Validators.required),
          description: new FormControl(this.editProduct.Description, Validators.required)
        })
      else
        this.productForm = new FormGroup({
          id: new FormControl(),
          name: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required)
        })
    })


  }

  onCancel() {
    this.productForm.reset();
    this.router.navigate(['../new'], { relativeTo: this.activatedRoute })
  }

  onSubmit() {
    let product = <Product>this.productForm.value;
    if (this.editMode)
      this.productService.updateProduct(product).subscribe((product: Product) => {
        this.productService.update(product);
        this.onCancel();
      });
    else
      this.productService.postProduct(product).subscribe((product: Product) => {
        this.productService.post(product);
        this.onCancel();
      });


  }

  onDelete() {
    this.productService.deleteProduct(this.editProduct.Id).subscribe((id: number) => {
      this.productService.delete(id);
      this.onCancel();
    });
  }
}
