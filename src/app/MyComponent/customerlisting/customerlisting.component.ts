import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlisting',
  templateUrl: './customerlisting.component.html',
  styleUrl: './customerlisting.component.css'
})
export class CustomerlistingComponent {
  constructor(private userdata: UserdataService,private router: Router){  }
  ngOnInit(): void {
    this.loadCustomer();
  }
  customerlisting: any;
  loadCustomer(){
    
    this.userdata.customer().subscribe((res) => {
  
      this.customerlisting = res;
    })
    console.log(this.customerlisting);


  }
  
Editcustomer(custno:any){
  this.router.navigateByUrl('/appmenu/editcustomer/' + custno);
}
customerremove(custno:any){

}

}
