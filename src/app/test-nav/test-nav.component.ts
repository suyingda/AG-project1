import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-nav',
    templateUrl: './test-nav.component.html',
    styleUrls: ['./test-nav.component.scss']
})
export class TestNavComponent implements OnInit {
    public currentRace: any = null;//{name: '人族'};

    constructor() {
    }

    ngOnInit() {
    }

}
