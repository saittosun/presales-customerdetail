import { CustomerService } from 'src/app/core/services/customer.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetail } from 'src/app/models/customer-detail';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail: CustomerDetail;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerDetail = this.customerService.getData()
  }

  onEdit() {
    console.log(this.customerDetail.id);
    this.router.navigate(['customer-detail/', this.customerDetail.id])
  }


}
