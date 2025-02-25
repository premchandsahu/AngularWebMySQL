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
  receiptlisting: any;
  loadReceipt(){
    
    this.userdata.receipt().subscribe((res) => {
  
      this.receiptlisting = res;
    })
    console.log(this.receiptlisting);


  }
  
Editreceipt(receiptno:any){
  this.router.navigateByUrl('/appmenu/editreceipt/' + receiptno);
}
receiptremove(receiptno:any){

}
}
