import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchaselisting',
  templateUrl: './purchaselisting.component.html',
  styleUrl: './purchaselisting.component.css'
})
export class PurchaselistingComponent {
  vfromdate: Date= new Date(Date.now());
  vtodate: Date= new Date(Date.now());;
  fromdate: Date= new Date(this.vfromdate.getFullYear(),this.vfromdate.getMonth(),this.vfromdate.getDate());
  todate: Date= new Date(Date.now());
  
  

constructor(private userdata: UserdataService,private router: Router,private alert: ToastrService,){
  fromdate: new Date(Date.now());
  todate: new Date(Date.now());
}



//dtoptions: DataTables.Settings = {};
supplierno: any;
mastercustomer: any;
Purchaseheader: any;
center:any;
sumtotal: number=0;
cnttotal: number=0;
sumtotalp: number=0;
ngOnInit(): void {
  this.center=window.history.state;
  console.log(this.center)
  this.GetSuppliers();
  this.loadPurchase(this.fromdate,this.todate,this.supplierno);
}

GetSuppliers() {
  this.userdata.supplier().subscribe((res) => {

    this.mastercustomer = res;

  })
}

loadPurchase(fromdate: Date, todate: Date, supplierno: any){

  const paramdata={"fromdate": fromdate,"todate":todate,"supplierno":supplierno,"centerno":this.center.centerno};
  console.log("from load purchase",paramdata)
 // console.log(fromdate.getMonth(),fromdate.getDate(),fromdate.getFullYear())
 
  this.userdata.purchasesummary(paramdata).subscribe((res) => {
  
    this.Purchaseheader = res;
    console.log(this.Purchaseheader)
    this.cnttotal=0
    this.sumtotal=0
    
    this.Purchaseheader.forEach((x: any) => {
      this.cnttotal=this.cnttotal+1;
      this.sumtotal = this.sumtotal + x.total;
     
    });
  })
  console.log(this.Purchaseheader);
}
Editpurchase(purchaseno:number){
  this.router.navigateByUrl('/appmenu/editpurchase/' + purchaseno,{state: this.center});
}
purchaseremove(purchaseno:number){
  if (confirm('Do you want to remove this Purchase :' + purchaseno)) {
    this.userdata.purchasedelete(purchaseno,this.center.centerno).subscribe(res => {
      let result: any;
      result = res;
      if (result.result == 'pass') {
        this.alert.success('Removed Successfully.', 'Remove Purchase')
        this.loadPurchase(this.fromdate,this.todate,this.supplierno);
      } else {
        this.alert.error('Failed to Remove.', 'Purchase');
      }
    });
  }
}
PreviewPurchase(invoicno:number){

}
DownloadPurchase(invoicno:number){

}
}
