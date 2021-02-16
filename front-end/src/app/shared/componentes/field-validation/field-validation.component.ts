import { AfterViewInit, Component, ContentChild, Input, OnInit } from "@angular/core";
import { FormControlName } from "@angular/forms";

@Component({
    selector: 'app-field-validation-container',
    templateUrl: './field-validation.component.html',
    styleUrls: ['./field-validation.component.css'],
})
export class FieldValidationComponent implements OnInit, AfterViewInit {
    @Input() required = false;

    @ContentChild(HTMLElement) label: HTMLElement;
    @ContentChild(FormControlName) input: FormControlName;
    
    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {}

    Success(): boolean {
        return this.input.valid && 
        (this.input.dirty || this.input.touched);
    }
  
    Error(): boolean {
        return this.input.invalid && 
        (this.input.dirty || this.input.touched);
    }
  
    optionClass(): string {
        if(this.Error()) {
          return 'has-error';
        }
  
        if(this.Success()) {
          return 'has-success';
        }
    }
    
}