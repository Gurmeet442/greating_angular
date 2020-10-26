import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_REGEX, PHONE_REGEX } from 'src/app/constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  form: FormGroup;
  image;

  constructor(
    private fb:FormBuilder
  ) { 
    this.form = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.pattern(EMAIL_REGEX)]],
      password:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(PHONE_REGEX)]],
      instagramLink:['',[Validators.required]],
      facebookLink:['',[Validators.required]],
      image:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  showMyPassword() {
    this.showPassword = !this.showPassword;
  }
  submit() {
    if(this.form.valid){

    }else{
      Object.keys(this.form.controls).forEach(key=>{
        this.form.controls[key].markAsTouched({onlySelf:true})
      })
    }
  }

  imageSelect(event){
    console.log(event.target.files[0]);
    this.image = event.target.files[0].name;
    
      this.form.controls.image.setValue(this.image);
    
  }
}
