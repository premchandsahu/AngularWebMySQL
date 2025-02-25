import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlisting',
  templateUrl: './supplierlisting.component.html',
  styleUrl: './supplierlisting.component.css'
})
export class SupplierlistingComponent {
  constructor(private userdata: UserdataService,private router: Router){  }
  ngOnInit(): void {
    this.loadSupplier();
  }
  supplierlisting: any;
  loadSupplier(){
    
    this.userdata.supplier().subscribe((res) => {
  
      this.supplierlisting = res;
    })
    console.log(this.supplierlisting);


  }
  
Editsupplier(suppno:any){
  this.router.navigateByUrl('/appmenu/editsupplier/' + suppno);
}
supplierremove(suppno:any){

}
}
