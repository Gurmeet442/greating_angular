import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './internal/navbar/navbar.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';
import { FooterComponent } from './internal/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directive/focus.directive';
import { RegisterComponent } from './auth/register/register.component';

import { WishPipe } from './pipes/wish.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoderComponent } from './shared/loder/loder.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    FocusDirective,
    RegisterComponent,
    WishPipe,
    LoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
