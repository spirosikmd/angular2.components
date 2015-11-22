import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'ui-text-field'
})
@View({
    template: '<input type="text" value="{{ name }}" />'
})
class TextFieldComponent {
    name:string = 'Value!';
}

export {TextFieldComponent};
