import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes:Routes =[
  {
    path:'',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InternalModule { 
  constructor(){
    console.log('Internal module')
  }
}
