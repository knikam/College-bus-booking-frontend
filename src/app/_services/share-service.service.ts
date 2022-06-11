import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  private sharingObject: any;
  constructor() { }

  get sharingValue() {
    return this.sharingObject
  }

  set sharingValue(obj) {
    this.sharingObject = obj;
  }
}