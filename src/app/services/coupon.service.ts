import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

constructor() { }

getCoupons() : any {
  return fetch('./assets/data/data.json').then(res => Promise.resolve(res.json()));
}

}
