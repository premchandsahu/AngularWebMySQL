import { Component, inject } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent {
  constructor(private userdata: UserdataService, private alert: ToastrService, private router: Router, private activeroute: ActivatedRoute) { }
  
  pagetitle: string="Supplier Details";
  
  
  private formBuilder = inject(FormBuilder);



  supplierform = this.formBuilder.group({
    supplierno: this.formBuilder.control({value: '', disabled: true }),
    suppliername: this.formBuilder.control('', Validators.required), 
    supplieraddress: this.formBuilder.control('',  Validators.required),
    supplierphone1: this.formBuilder.control(0, Validators.required),
    supplierphone2: this.formBuilder.control(0, Validators.required),
    supplieremail: this.formBuilder.control(1),
    openingbalance: this.formBuilder.control(1),
  })
  editsupplierno:any;
  isedit: boolean=false;

  ngOnInit(): void {
    this.editsupplierno = this.activeroute.snapshot.paramMap.get('supplierno');
    console.log(this.editsupplierno) 
    if (this.editsupplierno != null) {
      this.pagetitle = "Edit Supplier";
      this.isedit = true;
      this.SetEditInfo(this.editsupplierno);
    }
  }
  async SetEditInfo(supplierno:any){
    await this.userdata.supplierbyID(supplierno).subscribe(res => {
      let editdata: any;

      editdata = res;
      if (editdata != null) {
        this.supplierform.setValue({
          supplierno: editdata[0].supplierno, suppliername: editdata[0].suppliername, supplieraddress: editdata[0].supplieraddress,
          supplierphone1: editdata[0].supplierphone1 , supplierphone2: editdata[0].supplierphone2 ,
          supplieremail: editdata[0].supplieremail,openingbalance:  editdata[0].openingbalance
        },  {
          onlySelf: true,
          emitEvent: false
      })
       
      }

    });
   
  }

  SaveSupplier() {
    console.log(this.supplierform.getRawValue());
    if (this.supplierform.valid) {

      this.userdata.savesupplier(this.supplierform.getRawValue()).subscribe((res: any) => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          if (this.isedit) {
            this.alert.success('Updated Successfully.', 'Supplier :' + result.kyValue);
          } else {
            this.alert.success('Created Successfully.', 'Supplier :' + result.kyValue);
          }
          this.router.navigate(['/appmenu/supplierlisting']);
        } else {
          this.alert.error('Failed to save.', 'Supplier');
        }
      });
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }
  }

  masterproductcategory: any;
  
}
