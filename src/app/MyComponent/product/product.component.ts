import { Component, inject } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private userdata: UserdataService, private alert: ToastrService, private router: Router, private activeroute: ActivatedRoute) { }
  
  pagetitle: string="Product Details";
  
  
  private formBuilder = inject(FormBuilder);



  productform = this.formBuilder.group({
    productno: this.formBuilder.control({value: '', disabled: true }),
    name: this.formBuilder.control('', Validators.required), 
    description: this.formBuilder.control('',  Validators.required),
    salerate: this.formBuilder.control(0, Validators.required),
    purchaserate: this.formBuilder.control(0, Validators.required),
    productcategoryno: this.formBuilder.control(1),
    openingstock: this.formBuilder.control(0, Validators.required),
  })
  editproductno:any;
  isedit: boolean=false;

  ngOnInit(): void {
    this.loadProductCategory();
    this.editproductno = this.activeroute.snapshot.paramMap.get('productno');
    if (this.editproductno != null) {
      this.pagetitle = "Edit Product";
      this.isedit = true;
      this.SetEditInfo(this.editproductno);
    }

   


  }
  async SetEditInfo(productno:any){
    console.log(productno)
    await this.userdata.productbyID(productno).subscribe(res => {
      let editdata: any;

      editdata = res;
      console.log(editdata)
      if (editdata != null) {
        this.productform.setValue({
          productno: editdata[0].productno, name: editdata[0].name, description: editdata[0].description,
          salerate: editdata[0].salerate , purchaserate: editdata[0].purchaserate ,
          productcategoryno: editdata[0].productcategoryno,openingstock: editdata[0].openingstock
        },  {
          onlySelf: true,
          emitEvent: false
      })
       
      }

    });
   
  }

  SaveProduct() {
    console.log(this.productform.getRawValue());
    if (this.productform.valid) {

      this.userdata.saveproduct(this.productform.getRawValue()).subscribe((res: any) => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          if (this.isedit) {
            this.alert.success('Updated Successfully.', 'Product :' + result.productno);
          } else {
            this.alert.success('Created Successfully.', 'Product :' + result.productno);
          }
          this.router.navigate(['/appmenu/productlisting']);
        } else {
          this.alert.error('Failed to save.', 'Product');
        }
      });
    } else {
      this.alert.warning('Please enter values in all mandatory filed', 'Validation');
    }
  }

  masterproductcategory: any;
  loadProductCategory() {
    this.userdata.productcategory().subscribe((res) => {
      this.masterproductcategory = res;
    })
  }
  
}
