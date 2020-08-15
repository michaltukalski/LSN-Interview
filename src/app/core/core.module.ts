import { RootStoreModule } from './store/root-store.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RootStoreModule
  ]
})
export class CoreModule { }
