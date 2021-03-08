import { Injectable } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customer-detail';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerDetail: CustomerDetail


  setData(value){

    this.customerDetail = value;
    this.customerDetail.id = Date.now()
  }

  getData(){
    return {...this.customerDetail}
  }

  constructor() { }
}
