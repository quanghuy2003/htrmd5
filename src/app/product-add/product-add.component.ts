import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // @ts-ignore
  product: Product = {

  };
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  productForm : FormGroup= this.fb.group({
    title : new FormControl('',Validators.required),
    detail : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
  })

  add() {
    const products = this.productForm.value;
    this.productService.add(products).subscribe(() => {
      alert("thêm thành công")
    })
  }
}
