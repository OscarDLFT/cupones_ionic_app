import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsComponent } from './coupons.component';
import { AppModule } from 'src/app/app.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const rutas: Routes = [
  {
    path: '',
    component: CouponsComponent,
  }
]

@NgModule({
  declarations: [CouponsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    FormsModule,
    IonicModule
  ]
})
export class CouponsModule { }
