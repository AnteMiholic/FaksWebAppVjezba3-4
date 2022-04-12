import {Injectable, OnInit} from '@angular/core';
import { Hardware} from "./hardware";
import {Observable, of} from "rxjs";

export const HARDWARES: Hardware[] = [
  {name: "i5 9500", price: 2000.55},
  {name: "Nvidia GeForce GTX 1650 OC", price: 999.99},
  {name: "Nvidia GeForce RTX 3090", price: 100000},
  {name: "Genious MK-500", price: 50},
  {name: "Genious MK-500 Mechanical", price: 200}
]



@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  getHardwares(): Observable<Hardware[]>{
    return of(HARDWARES)
  }


}
