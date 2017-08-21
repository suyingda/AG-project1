import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-for',
    templateUrl: './test-ng-for.component.html',
    styleUrls: ['./test-ng-for.component.scss']
})
export class TestNgForComponent implements OnInit {
    public list: Array<any> = [
        {'name': '神族'},
        {'name': '虫族'},
        {'name': '人族'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
