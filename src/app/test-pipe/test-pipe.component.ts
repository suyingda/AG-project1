import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-pipe',
    templateUrl: './test-pipe.component.html',
    styleUrls: ['./test-pipe.component.scss']
})
export class TestPipeComponent implements OnInit {
    public currentTime: any = new Date();

    constructor() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
    }

    ngOnInit() {
    }

}
