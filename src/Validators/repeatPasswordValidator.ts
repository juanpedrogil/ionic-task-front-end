import { FormControl } from "@angular/forms";
export class RepeatPassWordValidation {
    static isValid( passwordOld:FormControl ) {
        return new Promise(resolve=>{
            var passwordNew = passwordOld.parent.controls['password'].value
        if(passwordNew === passwordOld.value) {
            resolve(null)
        } else {
            resolve({
                'not_matching': true
            })
        }
        })
    }
}