import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-on-change',
  templateUrl: './test-ng-on-change.component.html',
  styleUrls: ['./test-ng-on-change.component.scss']
})
export class TestNgOnChangeComponent implements OnInit {

    public username: string = '苏英大';

    public userObj: any = {
      name:'24'
    };

  constructor() { }

  ngOnInit() {
  }

}
