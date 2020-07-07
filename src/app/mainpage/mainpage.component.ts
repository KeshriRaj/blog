import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
  productResult: Observable<any>;
  constructor(private productService:ProductService,private router:Router) { 
    this.productResult = this.productService.getService();
    console.log(this.productResult);
  }

  showData(id:String)
  {
    this.productService.show(id).subscribe(
      ()=>{
        alert("Data Fteched Sucessfully");
      },
      (err) =>{
        alert(err);
      },
      ()=>{
        this.router.navigateByUrl('/childpage');
      }
    );

  }
  ngOnInit(): void {
  }

}
