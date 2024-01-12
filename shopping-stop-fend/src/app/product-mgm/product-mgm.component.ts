import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-mgm',
  templateUrl: './product-mgm.component.html',
  styleUrls: ['./product-mgm.component.scss'],
})
export class ProductMgmComponent {
  productForm!: FormGroup;
  products: any;
  addShow = true;
  pid:any;

  constructor(private alert: AlertService, private productService: ProductService) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      picUrl: new FormControl('', []),
    });
    this.getAllProducts();
  }

  addEditProduct() {
    if (this.addShow) {
      this.addProduct();
    } else {
      this.editProductBackend();
    }
  }
  editProductBackend() {
    let existingProductObject = this.productForm.value;
    existingProductObject._id = this.pid;
    this.productService.editProduct(existingProductObject).subscribe((data: any) => {
        this.alert.success('Product Updated successfully');
        this.getAllProducts();
        this.addShow=true;
        this.productForm.setValue({});
      });
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(
        (response) => {
          this.alert.success('Product added successfully');
          console.log('Product added successfully:', response);
          this.productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }

  editProduct(product: any) {
    this.pid = product._id;
    delete product._id;
    let pdata = product;
    this.addShow = false;
    this.productForm.setValue(pdata);
  }

  deleteProduct(id: any) {
    console.log('product deleted', id);
    this.productService.deleteProduct(id).subscribe(
      (data: any) => {
        this.alert.success('Product is deleted', data);
        this.getAllProducts();
      },
      (error) => {
        console.error('Error deleting product: ', error);
      }
    );
  }
}
