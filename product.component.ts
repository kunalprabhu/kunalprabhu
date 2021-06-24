import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ProductService} from '../service/product.service';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myarray:any;
  constructor(private productobject: ProductService, private http:HttpClient) { }

  ngOnInit(): void {
    console.log("this is ngoninit function");
    this.getproducts();
  }

getproducts()
{
  this.http.get("http://localhost:3000/products").subscribe((documents)=>{
    this.myarray=documents;
    console.log(this.myarray);
  })
}
}
