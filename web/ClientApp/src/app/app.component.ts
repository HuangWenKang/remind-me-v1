import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onSubmit(form) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }

}
