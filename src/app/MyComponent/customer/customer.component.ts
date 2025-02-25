import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  constructor(private userdata: UserdataService, private alert: ToastrService, private router: Router, private activeroute: ActivatedRoute) { }
  
  pagetitle: string="Customer Details";
  
  
  private formBuilder = inject(FormBuilder);



  customerform = this.formBuilder.group({
    custno: this.formBuilder.control({value: '', disabled: true }),
    customername: this.formBuilder.control('', Validators.required), 
    customeraddress: this.formBuilder.control('',  Validators.required),
    customerphone1: this.formBuilder.control(0, Validators.required),
    customerphone2: this.formBuilder.control(0, Validators.required),
    customeremail: this.formBuilder.control(1),
    openingbalance: this.formBuilder.control(0, Validators.required),
  })
  editcustno:any;
  isedit: boolean=false;

  ngOnInit(): void {
    this.editcustno = this.activeroute.snapshot.paramMap.get('custno');
    console.log(this.editcustno) 
    if (this.editcustno != null) {
      this.pagetitle = "Edit Customer";
      this.isedit = true;
      this.SetEditInfo(this.editcustno);
    }
  }
  async SetEditInfo(custno:any){
    await this.userdata.customerbyID(custno).subscribe(res => {
      let editdata: any;

      editdata = res;
      if (editdata != null) {
        this.customerform.setValue({
          custno: editdata[0].custno, customername: editdata[0].customername, customeraddress: editdata[0].customeraddress,
          customerphone1: editdata[0].customerphone1 , customerphone2: editdata[0].customerphone2 ,
          customeremail: editdata[0].customeremail,
          openingbalance: editdata[0].openingbalance
        },  {
          onlySelf: true,
          emitEvent: false
      })
       
      }

    });
   
  }

  SaveCustomer() {
    console.log(this.customerform.getRawValue());
    if (this.customerform.valid) {

      this.userdata.savecustomer(this.customerform.getRawValue()).subscribe((res: any) => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          if (this.isedit) {
            this.alert.success('Updated Successfully.', 'Customer :' + result.kyValue);
          } else {
            this.alert.success('Created Successfully.', 'Customer :' + result.kyValue);
          }
          this.router.navigate(['/appmenu/customerlisting']);
        } else {
          this.alert.error('Failed to save.', 'Customer');
        }
      });
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }
  }

  masterproductcategory: any;
  

}
