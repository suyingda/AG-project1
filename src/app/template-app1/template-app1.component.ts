import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-template-app1',
    templateUrl: './template-app1.component.html',
    styleUrls: ['./template-app1.component.scss']
})
export class TemplateApp1Component implements OnInit {
    public title:string = '假的星际争霸2';

    constructor() {
    }

    ngOnInit() {
    }

    public getVal():number{
        return 65535
    }

}
