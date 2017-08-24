import {Directive, ElementRef, HostListener, Input,HostBinding} from '@angular/core';

@Directive({
    selector: '[app-my-high-light]'
})
export class MyHighLightDirective {


    constructor(private el: ElementRef) {
        /*  console.log(el)
          el.nativeElement.style.backgroundColor = '#ff3300'*/
    }
    @Input()
    highlightColor: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave')
    onMoseleave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    //
    @HostBinding('style.border')
    border: string;
    @HostListener('click')
    onClick() {
        if (this.border) {
            this.border = '';
        } else {
            this.border = '1px solid red';
        }
    }
}
