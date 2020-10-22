import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_REGEX } from 'src/app/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data:any;
  form:FormGroup;
  submitted:boolean = false;
  showPassword:boolean = false;
  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.form = this.fb.group({
      email:['',Validators.compose([
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ])],
      password:['',Validators.compose([
        Validators.required
      ])]
    }) 
  }

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.data = 'hello';
    },3000)
  }
  submit(){
    console.log(this.form.valid)
    this.router.navigateByUrl(`/dashbord`)
  }

  get controls() {
    return this.form.controls;
  }

  showMyPassword(){
    this.showPassword = !this.showPassword
  }

}
