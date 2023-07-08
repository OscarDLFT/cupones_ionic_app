import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';

const rutas: Routes = [
  {
    path: '',
    component: CardComponent,
  }
]

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    FormsModule,
    IonicModule
  ]
})
export class CardModule { }
