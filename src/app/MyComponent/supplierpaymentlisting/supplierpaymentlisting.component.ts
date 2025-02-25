import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierpaymentlisting',
  templateUrl: './supplierpaymentlisting.component.html',
  styleUrl: './supplierpaymentlisting.component.css'
})
export class SupplierpaymentlistingComponent {
 constructor(private userdata: UserdataService,private router: Router){  }
  ngOnInit(): void {
    this.loadPayment();
  }
  paymentlisting: any;
  loadPayment(){
    
    this.userdata.payment().subscribe((res) => {
  
      this.paymentlisting = res;
    })
    console.log(this.paymentlisting);


  }
  
Editpayment(paymentno:any){
  this.router.navigateByUrl('/appmenu/editpayment/' + paymentno);
}
paymentremove(paymentno:any){

}
}
