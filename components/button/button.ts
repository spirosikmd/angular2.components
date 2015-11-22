import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'ui-button'
})
@View({
    template: '<button (click)="click($event)">{{ text }}</button>'
})
class ButtonComponent {
    text: string = 'Click me!';
    click($event: Event) {
        console.log($event);
    };
}
bootstrap(ButtonComponent);
