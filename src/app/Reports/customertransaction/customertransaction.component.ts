import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-customertransaction',
  templateUrl: './customertransaction.component.html',
  styleUrl: './customertransaction.component.css'
})
export class CustomertransactionComponent {
  vfromdate: Date= new Date(Date.now());
  vtodate: Date= new Date(Date.now());;
  fromdate: Date= new Date(this.vfromdate.getFullYear(),this.vfromdate.getMonth(),this.vfromdate.getDate());
  todate: Date= new Date(Date.now());
  mastercustomer:any;
  customer:any;
  custno: any;
  center:any;
constructor(private userdata: UserdataService,private router: Router,private alert: ToastrService, private activeroute: ActivatedRoute,){
  fromdate: new Date(Date.now());
  todate: new Date(Date.now());
}

//dtoptions: DataTables.Settings = {};
Invoiceheader: any;
data:any;
sumtotal: number=0;
cnttotal: number=0;
sumtotalp: number=0;
profit: number=0;
openingbalance:number=0;
closingbalance:number=0;
ngOnInit(): void {
  this.center=window.history.state;
  console.log(this.center)
  let vcustno = this.activeroute.snapshot.paramMap.get('custno');
  this.custno=vcustno?vcustno:1
  this.GetCustomers();
  console.log('customerno',vcustno)
 
  this.loadInvoice(this.fromdate,this.todate,this.custno);
}


loadReport(custno:any,fromdate:any){
  const paramdata={"custno":custno,"fromdate":fromdate};
  console.log("from load invoice",paramdata)
 
  
  this.userdata.accountbalancesummary(paramdata).subscribe((res) => {
    this.data = res;
    console.log(this.data);
    this.openingbalance=this.data[0].balance
    console.log(this.openingbalance)
  })
 
}



GetCustomers() {
  this.userdata.customer().subscribe((res) => {

    this.mastercustomer = res;

  })
}
 loadInvoice(fromdate:Date,todate:Date,custno:any){
   
  const paramdata={"custno":custno,"fromdate": fromdate,"todate":todate};
  console.log("from load invoice",paramdata)
 
   forkJoin( [this.userdata.transactiondetail(paramdata),this.userdata.accountbalancesummary(paramdata),this.userdata.customerbyID(custno)]).subscribe((result)=>{
      this.Invoiceheader=result[0]
      this.data=result[1]
      this.customer=result[2]
      console.log(this.Invoiceheader)
      console.log(this.data)
      this.openingbalance=this.data[0].balance
      this.cnttotal=0
      this.sumtotal=0
      this.sumtotalp=0
      this.Invoiceheader.forEach((x: any) => {
        this.cnttotal = this.cnttotal+1;
        this.sumtotal = this.sumtotal + Number(x.invoiceamount);
        this.sumtotalp = this.sumtotalp + Number(x.receiptamount);
      });
      console.log(this.openingbalance,this.sumtotal,this.sumtotalp)
      this.closingbalance=Number(this.openingbalance) + Number(this.sumtotal) - Number(this.sumtotalp)
   })
 
}
Editinvoice(invoiceno:number){
  this.router.navigateByUrl('/appmenu/editbilling/' + invoiceno,{state: this.center});
}
invoiceremove(invoiceno:number){
  if (confirm('Do you want to remove this Invoice :' + invoiceno)) {
    this.userdata.invoicedelete(invoiceno).subscribe(res => {
      let result: any;
      result = res;
      if (result.result == 'pass') {
        this.alert.success('Removed Successfully.', 'Remove Invoice')
        this.loadInvoice(this.fromdate,this.todate,this.custno);
      } else {
        this.alert.error('Failed to Remove.', 'Invoice');
      }
    });
  }
}
PreviewInvoice(invoicno:number){

}
DownloadInvoice(invoicno:number){

}


}
