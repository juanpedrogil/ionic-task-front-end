import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { RepeatPassWordValidation } from "../../Validators/repeatPasswordValidator";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public formGroup: FormGroup
  public username: AbstractControl
  public password: AbstractControl
  public repeatPassword: AbstractControl
  public matchingPassword:boolean = false
  public user:any = {
    user: '',
    password: ''
  }
  constructor(public viewCtrl:ViewController, public formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['',Validators.required,RepeatPassWordValidation.isValid]
    })
    this.username = this.formGroup.controls['username']
    this.password = this.formGroup.controls['password']
    this.repeatPassword = this.formGroup.controls['repeatPassword']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  public registerUser():void {
    //Execute when clicking the register button
    if(this.formGroup.valid) {
      //When each field has been filled correctly
      alert('Form is valid')
    }else{
      //When some field has an error
      alert('Please put fill every field!')
    }
  }
  public dismiss():void {
    //Execute when clicking the cancel button
    this.viewCtrl.dismiss()//Close the modal view
  }
}
