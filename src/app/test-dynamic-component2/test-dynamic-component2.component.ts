import {Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
    selector: 'app-test-dynamic-component2',
    templateUrl: './test-dynamic-component2.component.html',
    styleUrls: ['./test-dynamic-component2.component.scss']
})
export class TestDynamicComponent2Component implements OnInit {

    @ViewChild('dyncommp', {read: ViewContainerRef})
    dyncontainer: ViewContainerRef;
    comp1: ComponentRef<ChildComponent>;

    constructor(private resolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log('动态创建组件的实例...');
        const childComp = this.resolver.resolveComponentFactory(ChildComponent);
        this.comp1 = this.dyncontainer.createComponent(childComp);
        /*   this.comp1 = instance.title = '设置一个新的标题';
           this.comp1.instance.benClick.subscribe(param)=>
           {
               console.log(param);
           }*/
    }

}
