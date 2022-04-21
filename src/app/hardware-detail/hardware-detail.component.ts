import {Component, OnInit} from '@angular/core';
import {Hardware} from "../hardware/hardware";
import {HardwareService} from "../hardware/hardware.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  hardware: Hardware | undefined;

  constructor(
    private hardwareService: HardwareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHardware();
  }

  private getHardware() {
    const code = String(this.route.snapshot.paramMap.get('code'))
    this.hardwareService.getHardwareByCode(code)
      .subscribe(hardwares => this.hardware = hardwares)
  }
}
