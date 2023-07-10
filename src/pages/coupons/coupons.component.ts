import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent  implements OnInit {

  /** ARRAYS */
  coupons: Coupon[] = [];

  constructor(
    private couponService: CouponService,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.datosCoupons();
  }

  /** Recogemos los valores del servicio */
  datosCoupons(): any {
    this.couponService.getCoupons().then((res: any[]) => {
      res.forEach(x => {
        const obj: Coupon = new Coupon(x);
        this.coupons.push(obj);
      })
    });
  }

  /** dirige a la card seleccionada */
  goToCard(): void {
    this.navController.navigateForward('card');
  }
}
