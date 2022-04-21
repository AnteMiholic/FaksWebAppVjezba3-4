import { Component, OnInit } from '@angular/core';
import {Hardware} from "./hardware";
import {HardwareService} from "./hardware.service";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {

  title = 'xd';
  hardwares: Hardware[] | undefined;
  selectedHardware: Hardware | undefined;

  constructor(private hardwareService: HardwareService) {
  }
  ngOnInit(): void {
    this.getHardwares();
    //this.deleteHardware( {name: "Genious MK-500 Mechanical", price: 200, code:'123456789'})
  }
  onSelect(hardware: Hardware): void{
    this.selectedHardware = hardware;
  }

  private getHardwares() {
    this.hardwareService.getHardwares()
      .subscribe(hardwares => this.hardwares = hardwares)
  }
  deleteHardware(hardware: Hardware){
    this.hardwareService.deleteHardware(hardware)
      .subscribe(pkr => this.getHardwares())
  }
}
