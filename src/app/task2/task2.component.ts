import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../shared/form-data.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  public resultString = '';

  constructor(
    private formDataService: FormDataService
  ) { }

  ngOnInit(): void {
    Object.values(this.formDataService.FormData).forEach( value => this.resultString += value + ' ');
  }

}
