import { Component, inject } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  
  constructor(private userdata: UserdataService, private alert: ToastrService, private router: Router, private activeroute: ActivatedRoute) { }
  private formBuilder = inject(FormBuilder);
  purchaseform = this.formBuilder.group({
    purchaseno: this.formBuilder.control({ value: '', disabled: true }),
    centerno: this.formBuilder.control({value: '',disabled:true}),
    purchasedate: this.formBuilder.control(new Date(), Validators.required),
    supplierno: this.formBuilder.control('', Validators.required),
    remarks: this.formBuilder.control('', Validators.required),
    details: this.formBuilder.array([]),
    total: this.formBuilder.control(''),
    tax: this.formBuilder.control(''),
    netTotal: this.formBuilder.control('')

  })
  purchasedetail !: FormArray<any>;
  purchaseproduct !: FormGroup<any>;
  pagetitle = "Create Purchase"
  mastercustomer: any;
  mastercenter: any;
  masterproduct: any;
  isedit = false;
  editpurchaseno: any;
  editinvdetail: any;
  purchaseno: any;
  center: any;

  ngOnInit(): void {
    this.center=window.history.state;
    console.log(this.center)
    this.GetCustomers();
    this.GetCenters();
    this.GetProducts();
    this.purchaseform.get("purchasedate")?.setValue(new Date())
    this.purchaseform.get("centerno")?.setValue(this.center.centerno)
    
    this.editpurchaseno = this.activeroute.snapshot.paramMap.get('purchaseno');
    if (this.editpurchaseno != null) {
      this.pagetitle = "Edit Purchase";
      this.isedit = true;
      this.SetEditInfo(this.editpurchaseno,this.center.centerno);
    }
  }



  GetCustomers() {
    this.userdata.supplier().subscribe((res) => {

      this.mastercustomer = res;
      console.log(this.mastercustomer)
    })
  }
  GetCenters() {
    this.userdata.center().subscribe((res) => {

      this.mastercenter = res;
      console.log(this.mastercenter)
      
    })
  }

  GetProducts() {
    this.userdata.product().subscribe((res) => {

      this.masterproduct = res;
    })
  }
  SavePurchase() {
    console.log(this.purchaseform.getRawValue());
    if (this.purchaseform.valid) {
      
      this.userdata.savepurchase(this.purchaseform.getRawValue()).subscribe((res: any) => {
        let result: any;
        result = res;
        console.log("return")
        console.log(result)
        console.log(result.result);
        if (result.result == 'pass') {
          if (this.isedit) {
            this.alert.success('Updated Successfully.', 'Purchase :' + result.kyValue);
          } else {
            this.alert.success('Created Successfully.', 'Purchase :' + result.kyValue);
          }
          this.router.navigate(['/appmenu/purchaselisting'],{state: this.center});
        } else {
          this.alert.error('Failed to save.', 'Purchase');
        }
      });
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }
  }
  customerchange() {
    let custno = Number(this.purchaseform.get("supplierno")?.value);
    console.log(custno);
    if (custno === 0 || custno === null) {
      this.purchaseproduct.get("productrate")?.setValue(0);
      return;
    }
    this.userdata.supplierbyID(custno).subscribe((res: any) => {
      let custdata: any;
      custdata = res;
    });
  }

  Removeproduct(index: any) {
    if (confirm('Do you want to remove?')) {
      this.invproducts.removeAt(index);
      this.summarycalculation();

    }
  }

  summarycalculation() {
    let array = this.purchaseform.getRawValue().details;
    let sumtotal = 0
    array.forEach((x: any) => {
      sumtotal = sumtotal + Number(x.total);
    });

    // tax calculation
    let sumtax = (7 / 100) * sumtotal;
    let nettotal = sumtotal + sumtax;

    this.purchaseform.get("total")?.setValue(String(sumtotal));
    this.purchaseform.get("tax")?.setValue(String(sumtax));
    this.purchaseform.get("netTotal")?.setValue(String(nettotal));
  }
  async SetEditInfo(purchaseno: any,centerno: any) {
    this.userdata.purchaseItembyID(purchaseno,centerno).subscribe(res => {
      this.editinvdetail = res;
      console.log("Invdetail",this.editinvdetail)
      for (let i = 0; i < this.editinvdetail[0].details.length; i++) {
        this.addnewproduct();
      };
    });

    await this.userdata.purchasebyID(purchaseno,centerno).subscribe(res => {
      let editdata: any;

      editdata = res;
      console.log("Master")
      console.log(editdata[0])
      console.log("details")
      console.log(editdata[0].details)
      if (this.editinvdetail != null) {
        this.purchaseform.setValue({
          purchaseno: editdata[0].purchaseno,centerno: editdata[0].centerno, purchasedate: editdata[0].purchasedate, supplierno: editdata[0].supplierno,
          remarks: editdata[0].remarks, details: this.editinvdetail[0].details,
          total: editdata[0].total, tax: editdata[0].total, netTotal: editdata[0].total
        }, {
          onlySelf: true,
          emitEvent: false
        })

      }
      console.log("Purchase form data")
      console.log(this.purchaseform.value);
    });

    // this.purchaseform

  }
  addnewproduct() {
    this.purchasedetail = this.purchaseform.get("details") as FormArray;

    let customercode = this.purchaseform.get("supplierno")?.value;

    if ((customercode != null && customercode != '') || this.isedit) {
      this.purchasedetail.push(this.Generaterow());
    } else {
      this.alert.warning('Please select the supplier', 'Validation');
    }
  }
  Generaterow() {
    return this.formBuilder.group({
    //  _id: this.formBuilder.control(''), //Validators.required),
      productno: this.formBuilder.control(''), //Validators.required),
      productqty: this.formBuilder.control(1),
      productrate: this.formBuilder.control(0),
      total: this.formBuilder.control({ value: 0, disabled: true })
    });
  }
  Itemcalculation(index: any) {
    this.purchasedetail = this.purchaseform.get("details") as FormArray;
    this.purchaseproduct = this.purchasedetail.at(index) as FormGroup;
    let qty = this.purchaseproduct.get("productqty")?.value;
    let price = this.purchaseproduct.get("productrate")?.value;
    let total = qty * price;
    this.purchaseproduct.get("total")?.setValue(total);

    this.summarycalculation();
  }
  productchange(index: any) {
    this.purchasedetail = this.purchaseform.get("details") as FormArray;
    this.purchaseproduct = this.purchasedetail.at(index) as FormGroup;
    let productcode = this.purchaseproduct.get("productno")?.value;
    if (productcode === "" || productcode === null) {
      this.purchaseproduct.get("productrate")?.setValue(0);
      return;
    }
    this.userdata.productbyID(productcode).subscribe((res: any) => {
      let proddata: any;
      proddata = res;

      if (proddata != null) {
        // this.purchaseproduct.get("productName")?.setValue(proddata.name);
        this.purchaseproduct.get("productrate")?.setValue(proddata[0].salerate);
        this.Itemcalculation(index);
      }
    });
  }



  get invproducts() {
    return this.purchaseform.get("details") as FormArray;
  }



}
