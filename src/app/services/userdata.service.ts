import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/";
  //url = "https://apimysql-12ky.onrender.com/"
  //url="https://angularproject-b5ny.onrender.com/";
  //url="https://angularproject-bavdhan.onrender.com/";
  users() {
    return this.http.get(this.url + "todos")
  }
  paymentmode() { 
    return this.http.get(this.url + "paymentmode")
  }
  uservalidation(data: any) {
    return this.http.post(this.url + "user/uservalidate", data)
  }

  productcategory() {
    return this.http.get(this.url + "productcategory")
  }
  productcategoryadd(data: any) {
    return this.http.post(this.url + "productcategory", data)
  }
  productcategoryedit(data: any) {
    return this.http.put(this.url + "productcategory", data)
  }
  productcategorydelete(data: any) {
    return this.http.delete(this.url + "productcategory", data)
  }
  customer() {
    return this.http.get(this.url + "customer")
  }
  customerbyID(ID: number) {
    return this.http.get(this.url + "customer/" + ID)
  }
  savecustomer(data: any) {

    if (data.custno === "" || data.custno === null) {
      console.log("Empty")
      return this.http.post(this.url + "customer", data)
    }
    else
      return this.http.put(this.url + "customer/" + data.custno, data)
  }


  cusstomeradd(data: any) {
    return this.http.post(this.url + "customer", data)
  }
  customeredit(data: any) {
    return this.http.put(this.url + "customer", data)
  }
  customerdelete(data: any) {
    return this.http.delete(this.url + "customer", data)
  }

  center() {
    return this.http.get(this.url + "center")
  }

  centerbyID(ID: number) {
    return this.http.get(this.url + "center/" + ID)
  }

  product() {
    return this.http.get(this.url + "product")
  }
  productbyID(ID: number) {
    return this.http.get(this.url + "product/" + ID)
  }
  productadd(data: any) {
    return this.http.post(this.url + "product", data)
  }
  productedit(data: any) {
    return this.http.put(this.url + "product", data)
  }
  productdelete(data: any) {
    return this.http.delete(this.url + "product", data)
  }
  saveproduct(data: any) {

    if (data.productno === "" || data.productno === null) {
      console.log("Empty")
      return this.http.post(this.url + "product", data)
    }
    else
      return this.http.put(this.url + "product", data)
  }


  invoice() {
    return this.http.get(this.url + "invoice")
  }
  lastinvoice(data:any) {
    return this.http.post(this.url + "invoice/lastinvoice",data)
  }
  invoicebyID(invoiceno: any, centerno: any) {
    return this.http.get(this.url + "invoice/" + invoiceno + "/" + centerno)
  }
  invoiceItembyID(invoiceno: any, centerno: any) {
    return this.http.get(this.url + "invoice/" + invoiceno + "/" + centerno)
  }
  invoicebyIDHeader(invoiceno: any) {
    return this.http.get(this.url + "invoice/" + invoiceno)
  }
  saveinvoice(data: any) {


    return this.http.post(this.url + "invoice", data)

  }
  invoiceedit(data: any) {
    return this.http.put(this.url + "invoice/" + data.invoiceno, data)
  }
  invoicedelete(data: any) {
    return this.http.delete(this.url + "invoice/" + data)
  }
  invoicesummary(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "invoice/reportinvoicesummary", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }

  accountbalancesummary(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/customeropening", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }
  transactiondetail(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/customertransaction", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }

  itembalancesummary(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/itemopening", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }
  itemtransactiondetail(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/itemtransaction", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }
  itemsummary(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/itemsummary", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }
  itemsummaryp(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "report/itemsummaryp", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }
  receipt() {
    return this.http.get(this.url + "customerreceipt")
  }
  receiptbyID(ID: number) {
    return this.http.get(this.url + "customerreceipt/" + ID)
  }
  receiptadd(data: any) {
    return this.http.post(this.url + "customerreceipt", data)
  }
  receiptedit(data: any) {
    return this.http.put(this.url + "customerreceipt", data)
  }
  receiptdelete(data: any) {
    return this.http.delete(this.url + "customerreceipt", data)
  }
  savereceipt(data: any) {
    console.log(data)
    const customerreceiptno = data.customerreceiptno ? 0 : data.customerreceiptno
    if (data.customerreceiptno === "" || data.customerreceiptno === null || data.customerreceiptno == 0) {
      console.log("Empty")
      return this.http.post(this.url + "customerreceipt", data)
    }
    else
      return this.http.put(this.url + "customerreceipt/" + data.customerreceiptno, data)
  }

  payment() {
    return this.http.get(this.url + "supplierpayment")
  }
  paymentbyID(ID: number) {
    return this.http.get(this.url + "supplierpayment/" + ID)
  }
  paymentadd(data: any) {
    return this.http.post(this.url + "supplierpayment", data)
  }
  paymentedit(data: any) {
    return this.http.put(this.url + "supplierpayment", data)
  }
  paymentdelete(data: any) {
    return this.http.delete(this.url + "supplierpayment", data)
  }
  savepayment(data: any) {
    console.log(data)
    if (data.supplierpaymentno === "" || data.supplierpaymentno === null || data.supplierpaymentno == 0) {
      console.log("Empty")
      return this.http.post(this.url + "supplierpayment", data)
    }
    else
      return this.http.put(this.url + "supplierpayment" , data)
  }



  supplier() {
    return this.http.get(this.url + "supplier")
  }
  supplierbyID(ID: number) {
    return this.http.get(this.url + "supplier/" + ID)
  }
  savesupplier(data: any) {

    if (data.supplierno === "" || data.supplierno === null) {
      console.log("Empty")
      return this.http.post(this.url + "supplier", data)
    }
    else
      return this.http.put(this.url + "supplier", data)
  }


  supplieradd(data: any) {
    return this.http.post(this.url + "supplier", data)
  }
  supplieredit(data: any) {
    return this.http.put(this.url + "supplier", data)
  }
  supplierdelete(data: any) {
    return this.http.delete(this.url + "supplier", data)
  }

  purchase() {
    return this.http.get(this.url + "purchase")
  }
  purchasebyID(purchaseno: any, centerno: any) {
    return this.http.get(this.url + "purchase/" + purchaseno + "/" + centerno)
  }
  purchaseItembyID(purchaseno: any, centerno: any) {
    return this.http.get(this.url + "purchase/" + purchaseno + "/" + centerno)
  }
  purchasebyIDHeader(purchaseno: any) {
    return this.http.get(this.url + "purchase/" + purchaseno)
  }
  savepurchase(data: any) {

    return this.http.post(this.url + "purchase", data)
  }
  purchaseedit(data: any) {
    return this.http.put(this.url + "purchase/" + data.purchaseno, data)
  }
  purchasedelete(purchaseno: any,centerno:any) {
    return this.http.delete(this.url + "purchase/" + purchaseno+"/"+centerno)
  }
  purchasesummary(paramdata: any) {
    console.log(paramdata)
    return this.http.post(this.url + "purchase/reportpurchasesummary", paramdata)
    //return this.http.post(this.url + "invoicesummary",paramdata)
  }



}
