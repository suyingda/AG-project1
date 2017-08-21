import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
//导入NgModel包
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TemplateApp1Component} from './template-app1/template-app1.component';
import {TestNgClassComponent} from './test-ng-class/test-ng-class.component';
import {TemplateRefVarComponent} from './template-ref-var/template-ref-var.component';
import {ValueBindingComponent} from './value-binding/value-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';
import {FootResizeComponent} from './two-way-binding/foot-resize/foot-resize.component';
import {TestNgIFComponent} from './test-ng-if/test-ng-if.component';
import {TestNgForComponent} from './test-ng-for/test-ng-for.component';
import {TestNgSwitchComponent} from './test-ng-switch/test-ng-switch.component';
import {TestNgStyleComponent} from './test-ng-style/test-ng-style.component';
import {TestNgModelComponent} from './test-ng-model/test-ng-model.component';
import {TestPipeComponent} from './test-pipe/test-pipe.component';
import {TestNavComponent} from './test-nav/test-nav.component';
import {PatherAndSonComponent} from './pather-and-son/pather-and-son.component';
import {ChildComponent} from './pather-and-son/child/child.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component';
import {TestNgOnChangeComponent} from './test-ng-on-change/test-ng-on-change.component';
import {Child111Component} from './test-ng-on-change/child111/child111.component';
/*import {TestDynamicComponent2Component} from './test-dynamic-component2/test-dynamic-component2.component';*/
import { TestDynamicComponentComponent } from './test-dynamic-component/test-dynamic-component.component';
import { ChilcOneComponent } from './test-dynamic-component/chilc-one/chilc-one.component';
import { TestShadowDomComponent } from './test-shadow-dom/test-shadow-dom.component';
import { TestEmulatedModeComponent } from './test-emulated-mode/test-emulated-mode.component';
import { TestNoneModeComponent } from './test-none-mode/test-none-mode.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { ChildTwoComponent } from './test-ng-content/child-two/child-two.component';
import { ChildThreeComponent } from './test-ng-content/child-three/child-three.component';


@NgModule({
    declarations: [
        AppComponent,
        TemplateApp1Component,
        TestNgClassComponent,
        TemplateRefVarComponent,
        ValueBindingComponent,
        EventBindingComponent,
        TwoWayBindingComponent,
        FootResizeComponent,
        TestNgIFComponent,
        TestNgForComponent,
        TestNgSwitchComponent,
        TestNgStyleComponent,
        TestNgModelComponent,
        TestPipeComponent,
        TestNavComponent,
        PatherAndSonComponent,
        ChildComponent,
        LifeCycleComponent,
        TestNgOnChangeComponent,
        Child111Component,
     /*   TestDynamicComponent2Component,*/
        TestDynamicComponentComponent,
        ChilcOneComponent,
        TestShadowDomComponent,
        TestEmulatedModeComponent,
        TestNoneModeComponent,
        TestNgContentComponent,
        ChildTwoComponent,
        ChildThreeComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ChilcOneComponent]
})
export class AppModule {
}
