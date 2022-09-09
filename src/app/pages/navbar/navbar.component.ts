import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isScrolled: boolean = false
  home: boolean = false
  about: boolean = false
  contact: boolean = false

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.url.length)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 100)
      this.isScrolled = true
    else this.isScrolled = false  
    
    if(this.currentRoute.snapshot.url.length == 0){
      if (document.documentElement.scrollTop >= 100 && document.documentElement.scrollTop < 900)
        this.home = true
      else this.home =false

      if (document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 4505)
        this.about = true
      else this.about =false

      if (document.documentElement.scrollTop > 4505)
        this.contact = true
      else this.contact = false
    }
    
  }

}
