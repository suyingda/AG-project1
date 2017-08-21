import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
    selector: 'app-pather-and-son',
    templateUrl: './pather-and-son.component.html',
    styleUrls: ['./pather-and-son.component.scss']
})
export class PatherAndSonComponent implements OnInit {
    @ViewChild(ChildComponent)
    private childComponent: ChildComponent;

    constructor() {
    }

    ngOnInit() {
    }

 /*   ngAfterViewInit() {
        //this.childComponent.childFn();
    }

    public doSomething(): void {
        alert('收到了子组件自定义事件');
    }*/
}
