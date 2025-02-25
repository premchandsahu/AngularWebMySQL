import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './MyComponent/billing/billing.component';
import { ProductcategoryComponent } from './MyComponent/productcategory/productcategory.component';
import { ListingComponent } from './MyComponent/listing/listing.component';
import { ProductlistingComponent } from './MyComponent/productlisting/productlisting.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { CustomerlistingComponent } from './MyComponent/customerlisting/customerlisting.component';
import { CustomerComponent } from './MyComponent/customer/customer.component';
import { ReceiptComponent } from './MyComponent/receipt/receipt.component';
import { ReceiptlistingComponent } from './MyComponent/receiptlisting/receiptlisting.component';
import { PurchaselistingComponent } from './MyComponent/purchaselisting/purchaselisting.component';
import { PurchaseComponent } from './MyComponent/purchase/purchase.component';
import { SupplierlistingComponent } from './MyComponent/supplierlisting/supplierlisting.component';
import { SupplierComponent } from './MyComponent/supplier/supplier.component';
import { GridtestComponent } from './MyComponent/gridtest/gridtest.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './MyComponent/login/login.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { SupplierpaymentComponent } from './MyComponent/supplierpayment/supplierpayment.component';
import { SupplierpaymentlistingComponent } from './MyComponent/supplierpaymentlisting/supplierpaymentlisting.component';
import { ListinginvoiceprofitComponent } from './MyComponent/listinginvoiceprofit/listinginvoiceprofit.component';
import { AccountbalanceComponent } from './Reports/accountbalance/accountbalance.component';
import { CustomertransactionComponent } from './Reports/customertransaction/customertransaction.component';
import { ItembalanceComponent } from './Reports/itembalance/itembalance.component';
import { ItemtransactionComponent } from './Reports/itemtransaction/itemtransaction.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'appmenu',
    component: AppmenuComponent,
    children: [
      {
        path: 'invoicelisting',
        component: ListingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'invoicelistingp',
        component: ListinginvoiceprofitComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'billing',
        component: BillingComponent
      },
      {
        path: 'editbilling/:invoiceno',
        component: BillingComponent
      }, {
        path: 'purchaselisting',
        component: PurchaselistingComponent
        ,
        canActivate: [AuthGuard]
      },
      {
        path: 'purchase',
        component: PurchaseComponent
      },
      {
        path: 'editpurchase/:purchaseno',
        component: PurchaseComponent
      },
      {
        path: 'productcategory',
        component: ProductcategoryComponent
      }
      ,
      {
        path: 'productlisting',
        component: ProductlistingComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'editproduct/:productno',
        component: ProductComponent
      },
      {
        path: 'receipt',
        component: ReceiptComponent
      },
      {
        path: 'editreceipt/:receiptno',
        component: ReceiptComponent
      },
      {
        path: 'receiptlisting',
        component: ReceiptlistingComponent
      },
      {
        path: 'payment',
        component: SupplierpaymentComponent
      },
      {
        path: 'editpayment/:paymentno',
        component: SupplierpaymentComponent
      },
      {
        path: 'paymentlisting',
        component: SupplierpaymentlistingComponent
      },
      {
        path: 'customerlisting',
        component: CustomerlistingComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'editcustomer/:custno',
        component: CustomerComponent
      },
      {
        path: 'supplierlisting',
        component: SupplierlistingComponent
      },
      {
        path: 'supplier',
        component: SupplierComponent
      },
      {
        path: 'editsupplier/:supplierno',
        component: SupplierComponent
      },

      {
        path: 'accountsummary',
        component: AccountbalanceComponent
      },
      {
        path: 'ledger',
        component: CustomertransactionComponent
      },
      {
        path: 'editledger/:custno',
        component: CustomertransactionComponent
      }
      ,
      {
        path: 'itembalance',
        component: ItembalanceComponent
      },
      {
        path: 'itemledger',
        component: ItemtransactionComponent
      },
      {
        path: 'edititemledger/:centerno/:productno',
        component: ItemtransactionComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  //{ path: '**', redirectTo: 'login' },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
