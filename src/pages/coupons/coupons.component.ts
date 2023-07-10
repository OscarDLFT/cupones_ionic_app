import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent  implements OnInit {

  /** ARRAYS */
  coupons: any[] = [];
  constructor(
    private couponService: CouponService,
  ) { }

  ngOnInit() {
    this.datosCoupons();
  }

  /** Recogemos los valores del servicio */
  datosCoupons(): any {
    this.couponService.getCoupons().then((res: any[]) => {
      this.coupons = res;
      console.log(res);
    });
  }
}
