import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";
import { Http, Headers } from "@angular/http";

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

  constructor(public modal:ModalController,
    public formBuilder:FormBuilder,
    public http:Http) {
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
      //Create a header to notify the data type for the body must be json
      let headers = new Headers({
        'Content-Type': 'application/json',
      });
      //Trying to log in api 
      this.http.post('http://localhost:3000/user/login', {
        "username": this.username.value,
        "password": this.password.value
      }, {
        headers: headers
      }).subscribe(data => {
        //When the log in was successful
        console.log(data.json())
        alert(data.json().message)
      }, err => {
        //When the log in has a problem
        alert(err.json().message)
      })
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
