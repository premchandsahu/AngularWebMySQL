import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service'


@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent {
  users: any;
  name: string="";
  productcategoryno: number=0;
  constructor(private userdata: UserdataService) {
    this.userdata.productcategory().subscribe((data) => {
      console.warn("data", data)
      this.users = data;
    });
  }
 
  onSubmit(data:any){
    console.log(data);
    this.userdata.productcategoryadd(data).subscribe((result)=>{
      console.log(result);
    })
  }
}
