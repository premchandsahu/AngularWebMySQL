import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import {provideHttpClient} from '@angular/common/http';
import { AboutComponent } from './MyComponent/about/about.component';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './MyComponent/billing/billing.component';
import { ProductcategoryComponent } from './MyComponent/productcategory/productcategory.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './MyComponent/login/login.component';
import { HeaderComponent } from './MyComponent/header/header.component'
import {ToastrModule} from 'ngx-toastr';
import { ListingComponent } from './MyComponent/listing/listing.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { ProductlistingComponent } from './MyComponent/productlisting/productlisting.component';
import { CustomerlistingComponent } from './MyComponent/customerlisting/customerlisting.component';
import { CustomerComponent } from './MyComponent/customer/customer.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { ReceiptComponent } from './MyComponent/receipt/receipt.component';
import { ReceiptlistingComponent } from './MyComponent/receiptlisting/receiptlisting.component';
import { PurchaselistingComponent } from './MyComponent/purchaselisting/purchaselisting.component';
import { PurchaseComponent } from './MyComponent/purchase/purchase.component';
import { SupplierlistingComponent } from './MyComponent/supplierlisting/supplierlisting.component';
import { SupplierComponent } from './MyComponent/supplier/supplier.component';
import {AgGridModule} from 'ag-grid-angular';
import { GridtestComponent } from './MyComponent/gridtest/gridtest.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { SupplierpaymentComponent } from './MyComponent/supplierpayment/supplierpayment.component';
import { SupplierpaymentlistingComponent } from './MyComponent/supplierpaymentlisting/supplierpaymentlisting.component';
import { ListinginvoiceprofitComponent } from './MyComponent/listinginvoiceprofit/listinginvoiceprofit.component';
import { AccountbalanceComponent } from './Reports/accountbalance/accountbalance.component';
import { CustomertransactionComponent } from './Reports/customertransaction/customertransaction.component';
import { ItemtransactionComponent } from './Reports/itemtransaction/itemtransaction.component';
import { ItembalanceComponent } from './Reports/itembalance/itembalance.component'
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemsummaryComponent } from './Reports/itemsummary/itemsummary.component';
import { ItemsummarypComponent } from './Reports/itemsummaryp/itemsummaryp.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AboutComponent,
    HomeComponent,
    BillingComponent,
    ProductcategoryComponent,
    LoginComponent,
    HeaderComponent,
    ListingComponent,
    ProductComponent,
    ProductlistingComponent,
    CustomerlistingComponent,
    CustomerComponent,
    ReceiptComponent,
    ReceiptlistingComponent,
    PurchaselistingComponent,
    PurchaseComponent,
    SupplierlistingComponent,
    SupplierComponent,
    GridtestComponent,
    AppmenuComponent,
    SupplierpaymentComponent,
    SupplierpaymentlistingComponent,
    ListinginvoiceprofitComponent,
    AccountbalanceComponent,
    CustomertransactionComponent,
    ItemtransactionComponent,
    ItembalanceComponent,
    ItemsummaryComponent,
    ItemsummarypComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgSelectModule,
    AgGridModule,
    NgxPrintModule,
  ],
  providers: [provideHttpClient(),Ng2SearchPipeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
