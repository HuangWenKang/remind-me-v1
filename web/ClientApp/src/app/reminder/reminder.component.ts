import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-reminder-component',
    templateUrl: './reminder.component.html'
})

export class CounterComponent {
    exampleForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
    });
}