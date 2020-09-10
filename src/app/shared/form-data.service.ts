import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private formData: { [key: string]: string } = {};

  constructor() {
  }

  get FormData(): any {
    return this.formData;
  }

  set FormData(value: any) {
    this.formData = value;
  }
}
