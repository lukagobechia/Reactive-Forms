import { FormControl } from "@angular/forms";

export class CustomValidator{
    
  static noSpaceValidator(control: FormControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceValidator: true}
        }
        return null;
    }
}