import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-itembalance',
  templateUrl: './itembalance.component.html',
  styleUrl: './itembalance.component.css'
})
export class ItembalanceComponent {
constructor(private router: Router,private userdata: UserdataService, private alert: ToastrService,  private activeroute: ActivatedRoute){  

  }
  data:any
  todate:any
  cnttotal:any
  sumtotal:any
  center:any
  ngOnInit(){
      this.center=window.history.state;
      console.log(this.center)
  }

  loadReport(todate:any){
    const paramdata={"centerno":this.center.centerno,"productno":0,"fromdate":todate};
    console.log("from load invoice",paramdata)
   // console.log(fromdate.getMonth(),fromdate.getDate(),fromdate.getFullYear())
   
    
    this.userdata.itembalancesummary(paramdata).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.cnttotal=0
      this.sumtotal=0
    })
   
  }

  ledger(centerno:any,productno: any){
    this.router.navigateByUrl(`/appmenu/edititemledger/${centerno}/${productno}`);
  }
}
