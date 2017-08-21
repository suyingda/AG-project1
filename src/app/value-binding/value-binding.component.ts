import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-value-binding',
    templateUrl: './value-binding.component.html',
    styleUrls: ['./value-binding.component.scss']
})
export class ValueBindingComponent implements OnInit {
    public imgSrc: string = '../../assets/img/1.jpg';
    public imgSrc2: string = '../../assets/img/2.jpg';

    constructor() {
    }

    ngOnInit() {
    }

    public changerSrc(): void {
        if (Math.ceil((Math.random() * 10000000)) % 2) {
            this.imgSrc = '../../assets/img/3.jpg';
        } else {
            this.imgSrc = '../../assets/img/1.jpg';
        }
    }

}
