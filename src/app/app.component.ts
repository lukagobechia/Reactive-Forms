import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'reactive-forms';

  reactiveForm: FormGroup;

  ngOnInit(){
      this.reactiveForm = new FormGroup({
        firstname: new FormControl(null,Validators.required),
        lastname: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        username: new FormControl(null),
        dob: new FormControl(null),
        gender: new FormControl('male'), // default value
        address: new FormGroup({
          street: new FormControl(null,Validators.required),
          country: new FormControl('georgia',Validators.required), // default value
          city: new FormControl(null,Validators.required),
          region: new FormControl(null),
          postal: new FormControl(null,Validators.required)
        })
      })
  }
  
  onSubmit(){
    console.log(this.reactiveForm);
  }
}
