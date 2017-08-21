import {Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import {EventBindingComponent} from '../../event-binding/event-binding.component';

@Component({
    selector: 'app-chilc-one',
    templateUrl: './chilc-one.component.html',
    styleUrls: ['./chilc-one.component.scss']
})
export class ChilcOneComponent implements OnInit {
    @Input()
    public title: string = '默认的标题';
    @Output()
    public myEvent: EventEmitter<string> = new EventEmitter<string>();   //向父组件传递事件

    constructor() {
    }

    ngOnInit() {
    }

    public sayHello(): void {
        this.myEvent.emit('子组件触发的事件');
    }
}
