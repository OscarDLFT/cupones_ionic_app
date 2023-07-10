import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Coupon } from 'src/app/model/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent  implements OnInit {

  /** ARRAYS */
  coupons: Coupon[] = [];

  /**BOOLEANS */
  showCamera: boolean = false;

  constructor(
    private couponService: CouponService,
    private navController: NavController,
    private alertController: AlertController,
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

  closeCamera(): void {
    this.showCamera = false;
    BarcodeScanner.stopScan(); //paramos el que esté buscando para escanear
  }

  async startCamera(): Promise<void> {
    const status = await BarcodeScanner.checkPermission(); //checkeamos permisos de la camara en la app
    if(!status.granted){
        const alert = await this.alertController.create({
          message: 'No tienes permisos para usar la cámara, ¿Quieres abrir las opciones de la aplicación para dar permisos?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: (blah) => {},
            },
            {
              text: 'Ok',
              handler: () => {
                // abre la parte de dar permisos de la app en el móvil
                BarcodeScanner.openAppSettings();
              },
            },
          ],
        });
        await alert.present();
    } else {
      this.showCamera = true;
      const result = await BarcodeScanner.startScan();
      if(result.hasContent){
        console.log('Content QR:', result.content);
        let coupon: Coupon = new Coupon(JSON.parse(result.content));
        console.log(coupon.name, coupon.id_product);

        if(!!result.content && !!coupon && !!coupon.isValid()){
          this.coupons.push(coupon);
          console.log('escaneado correctamente');
        }
      }
    }
  }
}
