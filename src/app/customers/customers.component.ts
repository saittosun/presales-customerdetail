import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
  })
  export class CustomersComponent implements OnInit {

      constructor() { }

      ngOnInit(): void {
        }

  }

// import { NewLeadFormComponent } from './../leads/new-lead-form/new-lead-form.component';
// import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
// import {Component} from '@angular/core';
// import { CustomerService } from './customer.service';
// @Component({
//     selector: 'parent-component',
//     template: `
//         <h1>Parent</h1>
//         <div>
//             <app-customer-detail></app-customer-detail>
//             <app-new-customer-form></app-new-customer-form>
//         </div>
//     `,
//     providers: [CustomerService],
//     directives: [CustomerDetailComponent, NewLeadFormComponent]
// })
// export class CustomersComponent{

// }
