import { Component, OnInit, } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
        }),
        skills: new FormArray([
          new FormControl(null,Validators.required)
        ]),
        experience: new FormArray([
          
        ])
      })
  }
  
  onSubmit(){
    console.log(this.reactiveForm);
  }
  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  deleteSkills(index: number){
    (<FormArray>this.reactiveForm.get('skills')).removeAt(index);
  }

  addExp(){
    const formgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      experience: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null)
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formgroup);
  }
  
  deleteExp(index:number){
    (<FormArray>this.reactiveForm.get('experience')).removeAt(index)
  }
}
