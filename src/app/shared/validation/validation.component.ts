import { Component, ContentChild, Input, OnInit } from "@angular/core";
import { InputRefDirective } from "../input-ref.directive";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  @Input() label: string;
  @Input() validations:  { [index: string]: string};
  @Input() info: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  get isError() {
    return this.input.hasError;
  }

  get errorMessages() {
    const errors = this.input.errors;
    const messages = [];
    const keys = Object.keys(this.validations);

    keys.forEach(key => {
      if (errors[key]) {
        messages.push(this.validations[key]);
      }
    });
    return messages;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
