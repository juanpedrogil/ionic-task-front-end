import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Variable declaration
  public formgroup: FormGroup
  public username: AbstractControl
  public password: AbstractControl
  //------------------------------

  constructor(public modal:ModalController,public formBuilder:FormBuilder) {
    //Declare the form group and attach the username and password fields
    this.formgroup=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
    //Get the fields from de form group to variables
    this.username = this.formgroup.controls['username']
    this.password = this.formgroup.controls['password']
  }
  public Login():void {
    //Execute when clicking the login button
    if(this.formgroup.valid){
      //When each field has been filled correctly
      alert('Submit')
    }else{
      //When some field has an error
    }
  }
  public Register():void {
    //Execute when clicking the register button
    //Instantiate the modal view
    let registerForm=this.modal.create(RegisterPage)
    registerForm.present()//Display the modal view
  }
}
