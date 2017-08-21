import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-if',
    templateUrl: './test-ng-if.component.html',
    styleUrls: ['./test-ng-if.component.scss']
})
export class TestNgIFComponent implements OnInit {

    public  isShow:boolean=false;
    constructor() {
    }

    ngOnInit() {
    }
/*    isShow():viod{

    }*/
}
