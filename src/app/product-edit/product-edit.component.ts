import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(''),
    detail: new FormControl(''),
    time: new FormControl(''),
  });

  product?: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.productService.getId(id).subscribe(res => {
        console.log(res)
        this.product = res
        this.productForm = new FormGroup({
          title: new FormControl(res.title),
          price: new FormControl(res.price),
          description: new FormControl(res.description),
        });
      })
    })
  }

  updateProduct() {
    const producsss = this.productForm.value;
    console.log(event)
    // @ts-ignore
    this.productService.update(this.product?.id, producsss).subscribe(() => {
      alert("Sửa thành công!")
      this.router.navigate(["/product"])
    })
  }
}
