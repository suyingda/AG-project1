import {Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver} from '@angular/core';
import {ChilcOneComponent} from './chilc-one/chilc-one.component';

@Component({
    selector: 'app-test-dynamic-component',
    templateUrl: './test-dynamic-component.component.html',
    styleUrls: ['./test-dynamic-component.component.scss']
})
export class TestDynamicComponentComponent implements OnInit {


    @ViewChild('dyncommp', {read: ViewContainerRef})
    dyncontainer: ViewContainerRef;
    comp1: ComponentRef<ChilcOneComponent>;
    comp2: ComponentRef<ChilcOneComponent>;
    comp3: ComponentRef<ChilcOneComponent>;
    comp4: ComponentRef<ChilcOneComponent>;

    constructor(private resolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log('动态创建组件的实例...');
        const childComp = this.resolver.resolveComponentFactory(ChilcOneComponent);

        this.comp1 = this.dyncontainer.createComponent(childComp);
        this.comp1.instance.title = '设置一个新的标题';  // 这个是给子组件 传字段

        this.comp1.instance.myEvent.subscribe((data) =>  // 接受子组件的事件
        {
            console.log(data);
        });

     /*   this.comp2 = this.dyncontainer.createComponent(childComp);
        this.comp2.instance.title = '设置一个新的标题222';  // 这个是给子组件 传字段
        this.comp3 = this.dyncontainer.createComponent(childComp);
        this.comp3.instance.title = '设置一个新的标题333';  // 这个是给子组件 传字段
        this.comp4 = this.dyncontainer.createComponent(childComp,0);
        this.comp4.instance.title = '设置一个新的标题444';  // 这个是给子组件 传字段*/

    }
    public delComp():void{
        this.comp1.destroy()
    }

}
