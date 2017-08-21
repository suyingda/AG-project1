import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    public sayHello(event): void {
        console.log(event);
        alert('事件绑定');
    }

}
