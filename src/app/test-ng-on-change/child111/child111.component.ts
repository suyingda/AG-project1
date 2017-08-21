import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-child111',
    templateUrl: './child111.component.html',
    styleUrls: ['./child111.component.scss']
})
export class Child111Component implements OnInit {
    @Input()
    public username: string = '苏英大';
    @Input()
    public userObj: any = {};

    constructor() {
    }

    ngOnInit() {
    }
    ngOnChanges(){
        console.log('子组件ngOnchanges执行中....')
    }

}
