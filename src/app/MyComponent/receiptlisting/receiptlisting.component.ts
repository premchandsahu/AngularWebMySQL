import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiptlisting',
  templateUrl: './receiptlisting.component.html',
  styleUrl: './receiptlisting.component.css'
})
export class ReceiptlistingComponent {
  constructor(private userdata: UserdataService,private router: Router){  }
  ngOnInit(): void {
    this.loadReceipt();
  }
  sumtotal: number=0;
  receiptlisting: any;
  loadReceipt(){
    
    this.userdata.receipt().subscribe((res) => {
  
      this.receiptlisting = res;

      this.sumtotal=0
      this.receiptlisting.forEach((x: any) => {
        this.sumtotal = this.sumtotal + Number(x.receiptamount);
      });

    })
    console.log(this.receiptlisting);


  }
  
Editreceipt(receiptno:any){
  this.router.navigateByUrl('/appmenu/editreceipt/' + receiptno);
}
receiptremove(receiptno:any){

}
}
