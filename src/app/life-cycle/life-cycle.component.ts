import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-life-cycle',
    templateUrl: './life-cycle.component.html',
    styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent {
    @Input()
    public title: string = '我是接待父组件的title';
    public logs: Array<any> = [
        {name: '1'},
        {name: '2'},
        {name: '3'},
    ];

    constructor() {
        this.logs.push('constructor');
    }

    ngOnInit() {
    }

}
