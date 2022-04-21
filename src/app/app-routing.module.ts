import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HardwareComponent} from "./hardware/hardware.component";
import {HardwareDetailComponent} from "./hardware-detail/hardware-detail.component";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: 'hardware', component: HardwareComponent},
  {path: 'hardware/:code', component: HardwareDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
