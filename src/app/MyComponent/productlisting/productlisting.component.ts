import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrl: './productlisting.component.css'
})
export class ProductlistingComponent {
  constructor(private userdata: UserdataService,private router: Router){  }
  ngOnInit(): void {
    this.loadProduct();
  }
  productlisting: any;
  loadProduct(){
    
    this.userdata.product().subscribe((res) => {
  
      this.productlisting = res;
    })
    console.log(this.productlisting);


  }
  
Editproduct(productno:any){
  this.router.navigateByUrl('/appmenu/editproduct/' + productno);
}
productremove(productno:any){

}

}
