import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'ui-text-field'
})
@View({
    template: '<input type="text" value="{{ name }}" />'
})
class ButtonComponent {
    name: string = 'Value!';
}
bootstrap(ButtonComponent);
