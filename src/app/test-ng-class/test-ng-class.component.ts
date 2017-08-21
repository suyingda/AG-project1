import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-ng-class',
    templateUrl: './test-ng-class.component.html',
    styleUrls: ['./test-ng-class.component.scss']
})
export class TestNgClassComponent implements OnInit {
    public currentClasses: {};
    public canSave: boolean = true;
    public isUnchanged: boolean = true;
    public isSpecial: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    setCurrentClass(): void {
        this.currentClasses = {
            'saveable': this.canSave,
            'modified': this.isUnchanged,
            'spcial': this.isSpecial
        };
    }
}
