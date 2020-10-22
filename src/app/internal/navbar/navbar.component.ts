import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  wishUser: string;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.wish()
    }, 1500);
    
  }

  wish() {
    let now = new Date();
    let hours = now.getHours();
    if (hours < 12) {
      this.wishUser = 'Good Morning';
    } else if (hours >= 12 && hours < 16) {

      this.wishUser = 'Good Afternoon';

    } else {
      this.wishUser = 'Good Evening';
    }
  }
}
