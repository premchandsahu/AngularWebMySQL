import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrl: './accountbalance.component.css'
})
export class AccountbalanceComponent {
  constructor(private router: Router,private userdata: UserdataService, private alert: ToastrService,  private activeroute: ActivatedRoute){  

  }
  data:any
  todate:any
  cnttotal:any
  sumtotal:any

  loadReport(todate:any){
    const paramdata={"custno":0,"fromdate":todate};
    console.log("from load invoice",paramdata)
   // console.log(fromdate.getMonth(),fromdate.getDate(),fromdate.getFullYear())
   
    this.userdata.accountbalancesummary(paramdata).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.cnttotal=0
      this.sumtotal=0
    
      this.data.forEach((x: any) => {
        this.cnttotal=this.cnttotal+1;
        this.sumtotal = this.sumtotal + Number(x.balance);
      })
    })
   
  }

  ledger(custno: any){
    this.router.navigateByUrl('/appmenu/editledger/' + custno);
  }
}
