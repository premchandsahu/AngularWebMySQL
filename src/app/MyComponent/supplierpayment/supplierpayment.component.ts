import { Component, inject } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplierpayment',
  templateUrl: './supplierpayment.component.html',
  styleUrl: './supplierpayment.component.css'
})
export class SupplierpaymentComponent {
constructor(private userdata: UserdataService, private alert: ToastrService, private router: Router, private activeroute: ActivatedRoute) { }
  
  pagetitle: string="Receipt Details";
  
  
  private formBuilder = inject(FormBuilder);

  

  paymentform = this.formBuilder.group({
    supplierpaymentno: this.formBuilder.control({value: '', disabled: true }),
    supplierpaymentdate: this.formBuilder.control('', Validators.required), 
    supplierno: this.formBuilder.control('',  Validators.required),
    paymentamount: this.formBuilder.control(0, Validators.required),
    paymentmodeno: this.formBuilder.control(0, Validators.required),
    documentnumber:  this.formBuilder.control(0, Validators.required),
    remarks: this.formBuilder.control(1)
  })
  editpaymentno:any;
  isedit: boolean=false;

  ngOnInit(): void {
    this.loadReceiptCategory();
    this.loadPaymentmode();
    this.editpaymentno = this.activeroute.snapshot.paramMap.get('paymentno');
    if (this.editpaymentno != null) {
      this.pagetitle = "Edit Receipt";
      this.isedit = true;
      this.SetEditInfo(this.editpaymentno);
    }

   


  }
  async SetEditInfo(paymentno:any){
    await this.userdata.paymentbyID(paymentno).subscribe(res => {
      let editdata: any;
      editdata = res;
      console.log(editdata)
      if (editdata != null) {
        this.paymentform.setValue({
          supplierpaymentno: editdata[0].supplierpaymentno, supplierpaymentdate: editdata[0].supplierpaymentdate, supplierno: editdata[0].supplierno,
          paymentamount: editdata[0].paymentamount ,paymentmodeno: editdata[0].paymentmodeno ,documentnumber: editdata[0].documentnumber,
          remarks: editdata[0].remarks
        },  {
          onlySelf: true,
          emitEvent: false
      })
       
      }

    });
   
  }

  SaveReceipt() {
    console.log(this.paymentform.getRawValue());
    if (this.paymentform.valid) {

      this.userdata.savepayment(this.paymentform.getRawValue()).subscribe((res: any) => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          if (this.isedit) {
            this.alert.success('Updated Successfully.', 'Receipt :' + result.paymentno);
          } else {
            this.alert.success('Created Successfully.', 'Receipt :' + result.paymentno);
          }
          this.router.navigate(['/appmenu/paymentlisting']);
        } else {
          this.alert.error('Failed to save.', 'Receipt');
        }
      });
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }
  }

  mastersupplier: any;
  loadReceiptCategory() {
    this.userdata.supplier().subscribe((res) => {
      this.mastersupplier = res;
    })
  }
  paymentmode:any;

  loadPaymentmode() {
    this.userdata.paymentmode().subscribe((res) => {
      this.paymentmode = res;
    })
  }

}
