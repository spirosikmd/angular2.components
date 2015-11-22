import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'ui-button'
})
@View({
    template: '<button (click)="click()">{{ text }}</button>'
})
class ButtonComponent {
    text: string = 'Click me!';
    click() {
        console.log('clicked');
    };
}
bootstrap(ButtonComponent);
