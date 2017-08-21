import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-switch',
  templateUrl: './test-ng-switch.component.html',
  styleUrls: ['./test-ng-switch.component.scss']
})
export class TestNgSwitchComponent implements OnInit {
public mapStaus:string='系统繁忙'
  constructor() { }

  ngOnInit() {
  }

}
