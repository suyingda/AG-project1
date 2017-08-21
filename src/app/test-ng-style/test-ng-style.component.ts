import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-style',
    templateUrl: './test-ng-style.component.html',
    styleUrls: ['./test-ng-style.component.scss']
})
export class TestNgStyleComponent implements OnInit {
    public currentStyles: {};
    public canSave: boolean = true;
    public isUnchanged: boolean = true;
    public isSpecial: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    setCurrent(): void {
        this.currentStyles = {
            'font-size': this.canSave ? '44px' : '20px'
    }
    }
}
