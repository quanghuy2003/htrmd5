import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(result =>{
        // @ts-ignore
        this.products=result;
        console.log(result);
      },error => {
        console.log(error)
      }
    )
  }
  delete(){
    // @ts-ignore
    this.productService.delete(this.products.id).subscribe(()=>{
      alert("xóa thành công")
    })
  }
}
