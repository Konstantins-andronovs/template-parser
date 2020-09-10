import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormDataService} from '../shared/form-data.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  form: FormGroup;
  inputTemplate: string;

  attributeMatch = '#placeholder_';
  formControls: string[] = [];
  prefilled: any = [];

  constructor(
    private formDataService: FormDataService
  ) {
  }

  ngOnInit(): void {
  }

  public parseTemplate(): void {

    if (!this.inputTemplate) {
      return;
    }
    const html = new DOMParser().parseFromString(this.inputTemplate, 'text/html');
    this.formControls = [];

    Array.prototype.slice.call(html.querySelectorAll('div')).filter(el => {
      for (const atr of el.attributes) {
        if (atr.nodeName.indexOf(this.attributeMatch) === 0
          && !this.formControls.includes(atr.nodeName.substr(this.attributeMatch.length))) {
          this.formControls.push(atr.nodeName.substr(this.attributeMatch.length));
          return true;
        }
      }
      return false;
    });
    if (this.formControls.length > 0) {
      this.generateForm();
    }
  }

  public onSubmit(): void {
    this.prefilled = [];
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.controls[key];
      this.prefilled.push(`<div #placeholder_${key}><ng-container>${control.value}</ng-container></div>`);
    });
    this.formDataService.FormData = this.form.value;
  }

  private generateForm(): void {
    const group = {};
    this.formControls.forEach(control => {
      group[control] = new FormControl('');
    });
    this.form = new FormGroup(group);
  }

}
