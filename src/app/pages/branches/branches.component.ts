import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  currentUrl: boolean = true

  constructor(private currentRoute: ActivatedRoute) {
    this.currentUrl = this.currentRoute.snapshot.url[0].path == 'science-and-technology'
   }

  ngOnInit(): void {
  }

}
