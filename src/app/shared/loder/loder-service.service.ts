import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoderServiceService {

  constructor(
    private spinner:NgxSpinnerService
  ) { 
   
  }

  showLoder(){
    this.spinner.show(undefined,{
        type: 'timer',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        fullScreen: true
      })
  }   
  
}
